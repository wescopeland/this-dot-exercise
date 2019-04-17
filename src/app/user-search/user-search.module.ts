import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { UserSearchComponent } from './user-search.component';
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCardDatapointComponent } from './user-card-datapoint/user-card-datapoint.component';
import {
  GithubUsersStore,
  GithubUsersQuery,
  GithubUsersService,
  GithubUsersDataService,
  GithubUsersSearchGQL
} from './state';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    UserSearchComponent,
    UserCardListComponent,
    UserCardComponent,
    UserCardDatapointComponent
  ],
  providers: [
    GithubUsersStore,
    GithubUsersQuery,
    GithubUsersService,
    GithubUsersDataService,
    GithubUsersSearchGQL
  ],
  exports: [UserSearchComponent]
})
export class UserSearchModule {}
