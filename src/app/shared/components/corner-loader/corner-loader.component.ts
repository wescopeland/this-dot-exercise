import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'tde-corner-loader',
  templateUrl: './corner-loader.component.html',
  styleUrls: ['./corner-loader.component.scss'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CornerLoaderComponent implements OnInit {
  @Input() customMessage: string;
  @Input() isShowing: boolean;

  constructor() {}

  ngOnInit() {}
}
