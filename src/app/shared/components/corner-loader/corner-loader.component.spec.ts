import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CornerLoaderComponent } from './corner-loader.component';

describe('Component: CornerLoaderComponent', () => {
  let spectator: Spectator<CornerLoaderComponent>;
  const createComponent = createTestComponentFactory<CornerLoaderComponent>({
    component: CornerLoaderComponent,
    declarations: [],
    imports: [MatProgressSpinnerModule],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should only be visible if isShowing is truthy', () => {
    spectator.component.isShowing = false;
    spectator.detectChanges();

    expect(spectator.query('div')).not.toBeTruthy();

    spectator.component.isShowing = true;
    spectator.detectChanges();

    expect(spectator.query('div')).toBeTruthy();
  });

  it('can render a custom loading message', () => {
    spectator.component.customMessage = 'unit test';
    spectator.component.isShowing = true;
    spectator.detectChanges();

    expect(spectator.query('p')).toHaveText('unit test');
  });
});
