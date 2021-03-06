import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'tde-findy-bar',
  templateUrl: './findy-bar.component.html',
  styleUrls: ['./findy-bar.component.scss']
})
export class FindyBarComponent implements OnInit, OnChanges {
  @Input() placeholder: string;
  @Input() sampleSearch: string;
  @Output() readonly findyValueChange = new EventEmitter<string>();

  public findyValue: string;
  public isFocused = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(e) {
    if (!e.sampleSearch.firstChange && e.sampleSearch.currentValue) {
      this.handleNgModelChange(this.sampleSearch);
    }
  }

  handleClearClick(): void {
    this.handleNgModelChange(null);
  }

  handleNgModelChange(e: string): void {
    this.findyValue = e;
    this.findyValueChange.emit(this.findyValue);
  }
}
