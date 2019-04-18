import { Spectator } from '@netbasal/spectator';
import {
  createTestComponentFactory,
  mockProvider
} from '@netbasal/spectator/jest';
import { fakeAsync } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { UserSearchComponent } from './user-search.component';
import {
  CornerLoaderComponent,
  EmptyStateComponent,
  FindyBarComponent
} from '@shared/components';
import { NotificationService } from '@shared/providers';
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import { GithubUsersQuery, GithubUsersService } from './state';
import { tick } from '@angular/core/testing';

describe('Component: UserSearchComponent', () => {
  let spectator: Spectator<UserSearchComponent>;
  const createComponent = createTestComponentFactory<UserSearchComponent>({
    component: UserSearchComponent,
    detectChanges: false,
    declarations: [
      MockComponent(CornerLoaderComponent),
      MockComponent(EmptyStateComponent),
      MockComponent(FindyBarComponent),
      MockComponent(UserCardListComponent)
    ],
    imports: [MatPaginatorModule],
    providers: [
      mockProvider(GithubUsersQuery),
      mockProvider(GithubUsersService),
      mockProvider(NotificationService)
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('defines state observables on initialization', () => {
    let query = spectator.get<GithubUsersQuery>(GithubUsersQuery);
    query.selectLoading.andReturn(of(true));
    query.selectAll.andReturn(of([]));

    const initTotalUserCountSpy = spyOn(
      spectator.component,
      'initializeTotalUserCountSubscription'
    );

    const initFindyBarSpy = spyOn(
      spectator.component,
      'initializeFindyBarSubscription'
    );

    spectator.component.ngOnInit();
    expect(spectator.component.isLoading$).toBeDefined();
    expect(spectator.component.users$).toBeDefined();
    expect(initTotalUserCountSpy).toHaveBeenCalledTimes(1);
    expect(initFindyBarSpy).toHaveBeenCalledTimes(1);
  });

  it('can initiate a sample search based on an iterator value', () => {
    spectator.component.handleCallToActionClick();
    expect(spectator.component.sampleSearch).toEqual('this dot');

    spectator.component.handleCallToActionClick();
    expect(spectator.component.sampleSearch).toEqual('evan you');

    spectator.component.handleCallToActionClick();
    expect(spectator.component.sampleSearch).toEqual('datorama');

    spectator.component.handleCallToActionClick();
    expect(spectator.component.sampleSearch).toEqual('this dot');
  });

  it('notifies the findy bar observable when the findy bar value changes', () => {
    const findyBarSubjectSpy = spyOn(
      (spectator.component as any)._findyBarSubject,
      'next'
    );

    spectator.component.handleFindyValueChange('new value');
    expect(findyBarSubjectSpy).toHaveBeenCalledWith('new value');
  });

  it('informs the state service when the user attempts to paginate', () => {
    const getUsersAtPageIndexSpy = spyOn(
      (spectator.component as any)._service,
      'getUsersAtPageIndex'
    );

    spectator.component.handlePage({
      pageIndex: 5,
      pageSize: 10,
      length: 10
    });

    expect(getUsersAtPageIndexSpy).toHaveBeenCalledWith(undefined, 5, false);
  });

  it('can initialize a subscription that watches the findy bar for new searches', fakeAsync(() => {
    const getUsersAtPageIndexSpy = spyOn(
      (spectator.component as any)._service,
      'getUsersAtPageIndex'
    );

    spectator.component.initializeFindyBarSubscription();
    spectator.component.handleFindyValueChange('new value');
    tick(500);

    expect(getUsersAtPageIndexSpy).toHaveBeenCalledWith('new value', 0, true);
  }));

  it('resets the state if the findy bar value is empty or less than 3 characters', fakeAsync(() => {
    const getUsersAtPageIndexSpy = spyOn(
      (spectator.component as any)._service,
      'getUsersAtPageIndex'
    );

    const resetStateSpy = spyOn(
      (spectator.component as any)._service,
      'resetState'
    );

    spectator.component.initializeFindyBarSubscription();
    spectator.component.handleFindyValueChange(null);
    tick(500);

    expect(getUsersAtPageIndexSpy).not.toHaveBeenCalled();
    expect(resetStateSpy).toHaveBeenCalled();
  }));

  it('can initialize a subscription to the total user count held in the store', () => {
    let query = spectator.get<GithubUsersQuery>(GithubUsersQuery);
    query.select.andReturn(of(123));

    spectator.component.initializeTotalUserCountSubscription();
    expect(spectator.component.totalUserCount).toEqual(123);
  });
});
