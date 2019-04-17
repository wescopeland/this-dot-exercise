import { Injectable } from '@angular/core';
import { oc } from 'ts-optchain';
import { ApolloQueryResult } from 'apollo-client';

import { GithubUsersDataService } from './github-users-data.service';
import { GithubUsersStore } from './github-users.store';
import { GithubUsersQuery } from './github-users.query';
import { GithubUserSearchResponse } from './models/github-user-search-response.model';
import { GithubUser } from './models/github-user.model';

@Injectable()
export class GithubUsersService {
  constructor(
    private _dataService: GithubUsersDataService,
    private _store: GithubUsersStore,
    private _query: GithubUsersQuery
  ) {
    // Akita stores initialize with loading to true by default.
    this._store.setLoading(false);
  }

  getCursorAtIndex(index: number): string {
    const state = this._query.getValue();

    if (
      state.ui.cachedCursors.length &&
      state.ui.cachedCursors[index] !== undefined
    ) {
      return state.ui.cachedCursors[index];
    }

    console.error(`Unable to find cursor at page index ${index}.`);
    return null;
  }

  async getUsersAtPageIndex(
    search: string,
    pageIndex: number,
    isNewSearch = false
  ) {
    this._store.setLoading(true);

    let cursor: string = null;
    if (!isNewSearch) {
      cursor = this.getCursorAtIndex(pageIndex);
    }

    try {
      const response: ApolloQueryResult<
        GithubUserSearchResponse
      > = await this._dataService.getUsers(search, cursor).toPromise();

      if (oc(response).data.search.edges()) {
        const returnedUsers = response.data.search.edges.map(
          edge =>
            <GithubUser>{
              id: edge.node.id,
              userName: edge.node.login,
              fullName: edge.node.name,
              profileUrl: edge.node.url,
              email: edge.node.email,
              bio: edge.node.bio,
              location: edge.node.location,
              avatarUrl: edge.node.avatarUrl,
              createdAt: edge.node.createdAt,
              followerCount: oc(edge).node.followers.totalCount(null),
              repoCount: oc(edge).node.repositories.totalCount(null),
              starCount: oc(edge).node.starredRepositories.totalCount(null)
            }
        );

        // When the findy bar passes in a new value, start fresh.
        if (isNewSearch) {
          this._store.reset();
        } else {
          this._store.remove();
        }

        this._store.add(returnedUsers);
        this.updateUiCache(response.data.search);
      }
    } catch (e) {
      console.error(e);
    }

    this._store.setLoading(false);
  }

  resetState(): void {
    this._store.reset();
    this._store.setLoading(false);
  }

  updateUiCache(searchData: {
    userCount: number;
    pageInfo: { hasNextPage: boolean; endCursor: string };
  }): void {
    const currentCachedCursors = this._query.getValue().ui.cachedCursors;
    this._store.update({
      ui: {
        userCount: searchData.userCount,
        hasNextPage: searchData.pageInfo.hasNextPage,
        currentPageIndex: 0,
        cachedCursors: [...currentCachedCursors, searchData.pageInfo.endCursor]
      }
    });
  }
}
