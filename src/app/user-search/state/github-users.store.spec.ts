import { SpectatorService } from '@netbasal/spectator';
import { createService } from '@netbasal/spectator/jest';

import { GithubUsersStore } from './github-users.store';

describe('Service: GithubUsersStore', () => {
  let spectator: SpectatorService<GithubUsersStore> = createService({
    service: GithubUsersStore,
    mocks: []
  });

  it('exists', () => {
    expect(spectator.service).toBeDefined();
  });

  it('is resettable', () => {
    expect(spectator.service.config.resettable).toEqual(true);
  });

  it('has an initial ui state', () => {
    expect((spectator.service as any).storeValue).toBeTruthy();
  });
});
