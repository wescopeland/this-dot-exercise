import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { MatButtonModule } from '@angular/material/button';

import { EmptyStateComponent } from './empty-state.component';

describe('Component: EmptyStateComponent', () => {
  let spectator: Spectator<EmptyStateComponent>;
  const createComponent = createTestComponentFactory<EmptyStateComponent>({
    component: EmptyStateComponent,
    detectChanges: false,
    declarations: [],
    imports: [MatButtonModule],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('renders a call to action button if a label is passed in', () => {
    spectator.component.buttonLabel = 'test label';
    spectator.detectChanges();

    expect(spectator.query('button')).toBeTruthy();
    expect(spectator.query('button')).toHaveText('test label');

    spectator.component.buttonLabel = null;
    spectator.detectChanges();

    expect(spectator.query('button')).not.toBeTruthy();
  });

  it('calls an event handler function when the call to action button is clicked', () => {
    const handlerSpy = spyOn(spectator.component, 'handleCallToActionClick');

    spectator.component.buttonLabel = 'test label';
    spectator.detectChanges();

    spectator.dispatchMouseEvent(spectator.query('button'), 'click');
    expect(handlerSpy).toHaveBeenCalledTimes(1);
  });

  it('emits from the call to action handler function', () => {
    const emitSpy = spyOn(spectator.component.callToActionClick, 'emit');

    spectator.component.handleCallToActionClick();
    expect(emitSpy).toHaveBeenCalledTimes(1);
  });
});
