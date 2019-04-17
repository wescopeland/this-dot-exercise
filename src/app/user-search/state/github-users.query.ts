import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { GithubUsersStore, GithubUsersState } from './github-users.store';
import { GithubUser } from './models/github-user.model';

@Injectable()
export class GithubUsersQuery extends QueryEntity<
  GithubUsersState,
  GithubUser
> {
  constructor(protected store: GithubUsersStore) {
    super(store);
  }
}
