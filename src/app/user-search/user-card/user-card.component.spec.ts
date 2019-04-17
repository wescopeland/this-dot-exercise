import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { UserCardComponent } from './user-card.component';
import { UserCardDatapointComponent } from '../user-card-datapoint/user-card-datapoint.component';
import { mockGithubUser } from '../state/models/github-user.model';

describe('Component: UserCardComponent', () => {
  let spectator: Spectator<UserCardComponent>;
  const createComponent = createTestComponentFactory<UserCardComponent>({
    component: UserCardComponent,
    detectChanges: false,
    declarations: [MockComponent(UserCardDatapointComponent)],
    imports: [],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();

    spectator.component.githubUser = mockGithubUser;
    spectator.detectChanges();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('renders an image with the user avatar', () => {
    expect(spectator.query('img')).toHaveAttribute(
      'src',
      mockGithubUser.avatarUrl
    );
  });
});
