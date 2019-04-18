import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { PageEvent } from '@angular/material';
import { Network } from '@ngx-pwa/offline';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { GithubUsersQuery, GithubUsersService } from './state';
import { GithubUser } from './state/models/github-user.model';
import { NotificationService } from '@shared/providers';

@Component({
  selector: 'tde-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;
  public isOnline$: Observable<boolean>;
  public sampleSearch: string;
  public totalUserCount: number;
  public users$: Observable<GithubUser[]>;
  private _findyBarSubject = new Subject<string>();
  private _findyBarValue: string;
  private _sampleIterator = 0;

  constructor(
    private _network: Network,
    private _notification: NotificationService,
    private _query: GithubUsersQuery,
    private _service: GithubUsersService
  ) {}

  ngOnInit() {
    this.isLoading$ = this._query.selectLoading();
    this.isOnline$ = this._network.onlineChanges;
    this.users$ = this._query.selectAll();

    this.initializeTotalUserCountSubscription();
    this.initializeFindyBarSubscription();
  }

  ngOnDestroy() {}

  handleCallToActionClick(): void {
    // Change the value so it's picked up by the findy bar's ngOnChanges.
    if (this._sampleIterator === 0) {
      this.sampleSearch = 'this dot';
    } else if (this._sampleIterator === 1) {
      this.sampleSearch = 'evan you';
    } else if (this._sampleIterator === 2) {
      this.sampleSearch = 'datorama';
    }

    if (this._sampleIterator < 2) {
      this._sampleIterator += 1;
    } else {
      this._sampleIterator = 0;
    }
  }

  handleFindyValueChange(e: string): void {
    this._findyBarSubject.next(e);
  }

  handlePage(e: PageEvent): void {
    this._service.getUsersAtPageIndex(this._findyBarValue, e.pageIndex, false);
  }

  initializeFindyBarSubscription(): void {
    this._findyBarSubject
      .pipe(
        debounceTime(350),
        untilDestroyed(this)
      )
      .subscribe(async findyBarValue => {
        if (findyBarValue && findyBarValue.length >= 3) {
          this._findyBarValue = findyBarValue;

          // When we have a value from the findy bar,
          // start querying at page index 0 for users from GitHub.
          try {
            await this._service.getUsersAtPageIndex(
              this._findyBarValue,
              0,
              true
            );
          } catch (e) {
            console.error(e);
            this._notification.notify(
              'There was a problem loading users from GitHub. Please try again later.'
            );
          }
        } else {
          this._service.resetState();
        }
      });
  }

  initializeTotalUserCountSubscription(): void {
    this._query
      .select(store => store.ui.userCount)
      .pipe(untilDestroyed(this))
      .subscribe(val => {
        this.totalUserCount = val;
      });
  }
}
