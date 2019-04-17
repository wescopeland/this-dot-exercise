import { SpectatorService } from '@netbasal/spectator';
import { createService } from '@netbasal/spectator/jest';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';

import { GithubUsersDataService } from './github-users-data.service';
import {
  GithubUsersSearchGQL,
  SEARCH_USERS_QUERY
} from './queries/github-users-search.service';

describe('Service: GithubUsersDataService', () => {
  let controller: ApolloTestingController;

  let spectator: SpectatorService<GithubUsersDataService> = createService({
    service: GithubUsersDataService,
    imports: [ApolloTestingModule],
    providers: [GithubUsersSearchGQL]
  });

  beforeEach(() => {
    controller = spectator.get(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('exists', () => {
    expect(spectator.service).toBeDefined();
  });

  it('can make a graphql call to search for github users', () => {
    spectator.service.getUsers('test search', null).subscribe(res => {
      expect(res.data.search.userCount).toEqual(0);
      expect(res.data.search.edges.length).toEqual(0);
    });

    const op = controller.expectOne(SEARCH_USERS_QUERY);

    op.flush({
      data: {
        search: {
          edges: [],
          userCount: 0,
          pageInfo: {
            startCursor: 'a',
            hasNextPage: false,
            endCursor: 'b'
          }
        }
      }
    });
  });
});
