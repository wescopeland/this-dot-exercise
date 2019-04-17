import { Component, Input, OnInit } from '@angular/core';

import { GithubUser } from '../state/models/github-user.model';

@Component({
  selector: 'tde-github-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.scss']
})
export class UserCardListComponent implements OnInit {
  @Input() githubUsers: GithubUser[];

  constructor() {}

  ngOnInit() {}

  trackByFn(index, item) {
    return item.id;
  }
}
