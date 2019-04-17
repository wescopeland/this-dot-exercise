import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'tde-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {
  @Input() buttonLabel: string;
  @Output() readonly callToActionClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  handleCallToActionClick(): void {
    this.callToActionClick.emit();
  }
}
