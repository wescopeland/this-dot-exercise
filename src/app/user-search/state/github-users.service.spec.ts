import { SpectatorService } from '@netbasal/spectator';
import { createService, mockProvider } from '@netbasal/spectator/jest';
import { of } from 'rxjs';

import { GithubUsersService } from './github-users.service';
import { GithubUsersDataService } from './github-users-data.service';
import { GithubUsersStore } from './github-users.store';
import { GithubUsersQuery } from './github-users.query';
import { mockGithubUserSearchResponse } from './models/github-user-search-response.model';

// The error messages from tests in this file are
// a good thing and only clutter up our terminal.
console.error = jest.fn();

describe('Service: GithubUsersService', () => {
  let spectator: SpectatorService<GithubUsersService> = createService({
    service: GithubUsersService,
    providers: [
      mockProvider(GithubUsersDataService),
      mockProvider(GithubUsersStore),
      mockProvider(GithubUsersQuery)
    ]
  });

  let query;
  let store;
  let dataService;

  beforeEach(() => {
    query = spectator.get<GithubUsersQuery>(GithubUsersQuery);
    query.getValue.andReturn({
      ui: {
        cachedCursors: [null, 'a', 'b', 'c']
      }
    });

    store = spectator.get<GithubUsersStore>(GithubUsersStore);

    dataService = spectator.get<GithubUsersDataService>(GithubUsersDataService);
  });

  it('exists', () => {
    expect(spectator.service).toBeDefined();
  });

  it('can get a cached pagination cursor at a specified index from the store', () => {
    const cursor = spectator.service.getCursorAtIndex(2);
    expect(cursor).toEqual('b');
  });

  it('returns null if there is no cached cursor at the specified index in the store', () => {
    const cursor = spectator.service.getCursorAtIndex(999);
    expect(cursor).toBeNull();
  });

  it('can try to load github users from a designated page index and place them in the store', async () => {
    dataService.getUsers.andReturn(of(mockGithubUserSearchResponse));
    spectator.service.getCursorAtIndex = jest.fn().mockReturnValue('abc');

    await spectator.service.getUsersAtPageIndex('mock search', 0);
    expect(store.add).toHaveBeenCalledTimes(1);
  });

  it('wipes out existing entities in the store when loading new ones', async () => {
    dataService.getUsers.andReturn(of(mockGithubUserSearchResponse));
    spectator.service.getCursorAtIndex = jest.fn().mockReturnValue('abc');

    await spectator.service.getUsersAtPageIndex('mock search', 0);
    expect(store.remove).toHaveBeenCalledTimes(1);
  });

  it('has the ability to reset the store entirely on a new request', async () => {
    dataService.getUsers.andReturn(of(mockGithubUserSearchResponse));
    spectator.service.getCursorAtIndex = jest.fn().mockReturnValue('abc');

    await spectator.service.getUsersAtPageIndex('mock search', 0, true);
    expect(store.reset).toHaveBeenCalledTimes(1);
  });

  it('can reset the store', () => {
    spectator.service.resetState();

    expect(store.reset).toHaveBeenCalledTimes(1);
    expect(store.setLoading).toHaveBeenCalledWith(false);
  });

  it('can cache the next page cursor in the entity ui store', () => {
    const searchData = {
      userCount: 123,
      pageInfo: {
        hasNextPage: true,
        endCursor: 'xyz'
      }
    };

    spectator.service.updateUiCache(searchData);
    expect(store.update).toHaveBeenCalledWith({
      ui: {
        cachedCursors: [null, 'a', 'b', 'c', 'xyz'],
        currentPageIndex: 0,
        hasNextPage: true,
        userCount: 123
      }
    });
  });
});
