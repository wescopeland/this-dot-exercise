import { Component, Input, OnInit } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';

import { GithubUser } from '../state/models/github-user.model';

@Component({
  selector: 'tde-github-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() githubUser: GithubUser;

  public pluralMapping = {
    repo: {
      '=1': '1 repo',
      other: '# repos'
    },
    star: {
      '=1': '1 star',
      other: '# stars'
    },
    follower: {
      '=1': '1 follower',
      other: '# followers'
    }
  };

  constructor() {}

  ngOnInit() {}
}
