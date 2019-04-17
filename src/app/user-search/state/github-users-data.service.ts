import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { GithubUsersSearchGQL } from './queries/github-users-search.service';

@Injectable()
export class GithubUsersDataService {
  constructor(private _searchGQL: GithubUsersSearchGQL) {}

  getUsers(query: string, cursor: string) {
    return this._searchGQL
      .watch({ searchVal: query, afterCursor: cursor })
      .valueChanges.pipe(
        take(1),
        catchError(err =>
          throwError(new Error(`Unable to retrieve users from GitHub. ${err}`))
        )
      );
  }
}
