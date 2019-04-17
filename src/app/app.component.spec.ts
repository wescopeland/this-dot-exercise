import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';
import { NavbarComponent } from '@core/navbar/navbar.component';
import { FooterComponent } from '@core/footer/footer.component';
import { UserSearchComponent } from './user-search/user-search.component';

describe('Component: AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createTestComponentFactory<AppComponent>({
    component: AppComponent,
    declarations: [
      MockComponent(NavbarComponent),
      MockComponent(FooterComponent),
      MockComponent(UserSearchComponent)
    ],
    imports: [],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
