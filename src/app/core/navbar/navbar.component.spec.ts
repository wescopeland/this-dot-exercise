import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { MatToolbarModule, MatIconModule } from '@angular/material';

import { NavbarComponent } from './navbar.component';

describe('Component: NavbarComponent', () => {
  let spectator: Spectator<NavbarComponent>;
  const createComponent = createTestComponentFactory<NavbarComponent>({
    component: NavbarComponent,
    detectChanges: false,
    declarations: [],
    imports: [MatToolbarModule, MatIconModule],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should render the navbar', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
