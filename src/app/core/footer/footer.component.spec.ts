import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';

import { FooterComponent } from './footer.component';

describe('Component: FooterComponent', () => {
  let spectator: Spectator<FooterComponent>;
  const createComponent = createTestComponentFactory<FooterComponent>({
    component: FooterComponent,
    detectChanges: false,
    declarations: [],
    imports: [],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should render the footer', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
