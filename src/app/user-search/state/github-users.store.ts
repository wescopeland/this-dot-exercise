import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { GithubUser } from './models/github-user.model';

export interface GithubUsersState extends EntityState<GithubUser> {
  ui: {
    cachedCursors: string[];
    currentPageIndex: number;
    hasNextPage: boolean;
    userCount: number;
  };
}

const initialState = {
  ui: {
    cachedCursors: [null],
    currentPageIndex: -1,
    hasNextPage: null,
    userCount: null
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
