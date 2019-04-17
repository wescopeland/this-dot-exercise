import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tde-github-user-card-datapoint',
  templateUrl: './user-card-datapoint.component.html',
  styleUrls: ['./user-card-datapoint.component.scss']
})
export class UserCardDatapointComponent implements OnInit {
  @Input() icon: string;
  @Input() hyperlink: string;
  @Input() text: string;

  constructor() {}

  ngOnInit() {}
}
