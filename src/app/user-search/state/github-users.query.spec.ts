import { SpectatorService } from '@netbasal/spectator';
import { createService } from '@netbasal/spectator/jest';

import { GithubUsersQuery } from './github-users.query';
import { GithubUsersStore } from './github-users.store';

describe('Service: GithubUsersQuery', () => {
  let spectator: SpectatorService<GithubUsersQuery> = createService({
    service: GithubUsersQuery,
    mocks: [GithubUsersStore]
  });

  it('exists', () => {
    expect(spectator.service).toBeDefined();
  });
});
