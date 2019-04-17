import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { MatIconModule } from '@angular/material/icon';

import { UserCardDatapointComponent } from './user-card-datapoint.component';

describe('Component: UserCardDatapointComponent', () => {
  let spectator: Spectator<UserCardDatapointComponent>;
  const createComponent = createTestComponentFactory<
    UserCardDatapointComponent
  >({
    component: UserCardDatapointComponent,
    detectChanges: false,
    declarations: [],
    imports: [MatIconModule],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('can render a datapoint without a hyperlink', () => {
    spectator.component.icon = 'close';
    spectator.component.text = 'no hyperlink';
    spectator.detectChanges();

    expect(spectator.fixture).toMatchSnapshot();
    expect(spectator.query('span')).toHaveText('no hyperlink');
    expect(spectator.query('a')).not.toBeTruthy();
  });

  it('can render a datapoint with a hyperlink', () => {
    spectator.component.icon = 'close';
    spectator.component.text = 'hyperlink';
    spectator.component.hyperlink = 'https://abc.xyz';
    spectator.detectChanges();

    expect(spectator.fixture).toMatchSnapshot();
    expect(spectator.query('a')).toBeTruthy();
    expect(spectator.query('a')).toHaveAttribute('href', 'https://abc.xyz');
  });
});
