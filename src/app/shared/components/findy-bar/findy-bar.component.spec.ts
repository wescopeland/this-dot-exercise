import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { SimpleChange } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { FindyBarComponent } from './findy-bar.component';

describe('Component: FindyBarComponent', () => {
  let spectator: Spectator<FindyBarComponent>;
  const createComponent = createTestComponentFactory<FindyBarComponent>({
    component: FindyBarComponent,
    detectChanges: false,
    declarations: [],
    imports: [MatIconModule, FormsModule],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('tries to update the model if a sampleSearch value is received', () => {
    const modelChangeHandlerSpy = spyOn(
      spectator.component,
      'handleNgModelChange'
    );

    spectator.component.sampleSearch = 'new sample';

    spectator.component.ngOnChanges({
      sampleSearch: new SimpleChange(
        undefined,
        spectator.component.sampleSearch,
        false
      )
    });

    spectator.detectChanges();
    expect(modelChangeHandlerSpy).toHaveBeenCalledWith(
      spectator.component.sampleSearch
    );
  });

  it('tries to update the model if the clear button is clicked', () => {
    const modelChangeHandlerSpy = spyOn(
      spectator.component,
      'handleNgModelChange'
    );

    spectator.component.handleClearClick();
    expect(modelChangeHandlerSpy).toHaveBeenCalledWith(null);
  });

  it('properly updates findyValue on input field changes and emits that value to any listeners', () => {
    const emitSpy = spyOn(spectator.component.findyValueChange, 'emit');

    spectator.component.handleNgModelChange('new value');
    expect(emitSpy).toHaveBeenCalledWith('new value');
  });
});
