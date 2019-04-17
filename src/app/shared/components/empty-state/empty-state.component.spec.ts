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

  it('renders a custom label on the call to action button', () => {
    spectator.component.buttonLabel = 'test label';
    spectator.detectChanges();

    expect(spectator.query('button')).toHaveText('test label');
  });

  it('calls an event handler function when the call to action button is clicked', () => {
    const handlerSpy = spyOn(spectator.component, 'handleCallToActionClick');

    spectator.dispatchMouseEvent(spectator.query('button'), 'click');
    expect(handlerSpy).toHaveBeenCalledTimes(1);
  });

  it('emits from the call to action handler function', () => {
    const emitSpy = spyOn(spectator.component.callToActionClick, 'emit');

    spectator.component.handleCallToActionClick();
    expect(emitSpy).toHaveBeenCalledTimes(1);
  });
});
