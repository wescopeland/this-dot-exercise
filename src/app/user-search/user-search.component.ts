import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { PageEvent } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { GithubUsersQuery, GithubUsersService } from './state';
import { GithubUser } from './state/models/github-user.model';

@Component({
  selector: 'tde-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;
  public sampleSearch: string;
  public totalUserCount: number;
  public users$: Observable<GithubUser[]>;
  private _findyBarSubject = new Subject<string>();
  private _findyBarValue: string;

  constructor(
    private _query: GithubUsersQuery,
    private _service: GithubUsersService
  ) {}

  ngOnInit() {
    this.isLoading$ = this._query.selectLoading();
    this.users$ = this._query.selectAll();

    this.initializeTotalUserCountSubscription();
    this.initializeFindyBarSubscription();
  }

  ngOnDestroy() {}

  handleCallToActionClick() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
      this.sampleSearch = 'evan you';
    } else if (randomNumber === 2) {
      this.sampleSearch = 'this dot';
    } else if (randomNumber === 3) {
      this.sampleSearch = 'datorama';
    }
  }

  handleFindyValueChange(e: string) {
    this._findyBarSubject.next(e);
  }

  handlePage(e: PageEvent) {
    this._service.getUsersAtPageIndex(this._findyBarValue, e.pageIndex, false);
  }

  initializeFindyBarSubscription(): void {
    this._findyBarSubject
      .pipe(
        debounceTime(300),
        untilDestroyed(this)
      )
      .subscribe(findyBarValue => {
        if (findyBarValue && findyBarValue.length >= 3) {
          this._findyBarValue = findyBarValue;
          this._service.getUsersAtPageIndex(this._findyBarValue, 0, true);
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
