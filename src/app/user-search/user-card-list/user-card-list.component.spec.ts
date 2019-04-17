import { Spectator } from '@netbasal/spectator';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { UserCardListComponent } from './user-card-list.component';
import { UserCardComponent } from '../user-card/user-card.component';

describe('Component: UserCardListComponent', () => {
  let spectator: Spectator<UserCardListComponent>;
  const createComponent = createTestComponentFactory<UserCardListComponent>({
    component: UserCardListComponent,
    detectChanges: false,
    declarations: [MockComponent(UserCardComponent)],
    imports: [],
    componentProviders: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });

  it('has a trackBy function that works via item id', () => {
    const track = spectator.component.trackByFn(0, { id: 'abc==XYZ' });
    expect(track).toEqual('abc==XYZ');
  });
});
