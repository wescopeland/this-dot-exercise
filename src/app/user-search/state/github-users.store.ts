import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { GithubUser } from './models/github-user.model';

export interface GithubUsersState extends EntityState<GithubUser> {
  ui: {
    userCount: number;
    hasNextPage: boolean;
    currentPageIndex: number;
    cachedCursors: string[];
  };
}

const initialState = {
  ui: {
    userCount: null,
    hasNextPage: null,
    currentPageIndex: -1,
    cachedCursors: [null]
  }
};

@Injectable()
@StoreConfig({ name: 'githubUsers', resettable: true })
export class GithubUsersStore extends EntityStore<
  GithubUsersState,
  GithubUser
> {
  constructor() {
    super(initialState);
  }
}
