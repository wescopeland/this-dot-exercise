export interface GithubUserSearchResponse {
  search: {
    edges: Array<{
      node: {
        avatarUrl: string;
        bio: string;
        createdAt: string;
        followers: { totalCount: number };
        id: string;
        location: string;
        email: string;
        login: string;
        name: string;
        repositories: { totalCount: number };
        starredRepositories: { totalCount: number };
        url: string;
      };
    }>;
    userCount: number;
    pageInfo: {
      startCursor: string;
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

export let mockGithubUserSearchResponse = {
  data: {
    search: {
      edges: [
        {
          node: {
            avatarUrl: 'https://abc.xyz',
            bio: 'this is a mock bio',
            createdAt: '09-14-1990',
            followers: { totalCount: 42 },
            id: 'asdfasdfasdfadf',
            location: 'Little Rock, AR',
            email: 'hello@mock.com',
            login: 'mockuser',
            name: 'mock user',
            repositories: { totalCount: 42 },
            starredRepositories: { totalCount: 42 },
            url: 'https://abc.xyz'
          }
        }
      ],
      userCount: 1,
      pageInfo: {
        startCursor: 'a',
        hasNextPage: false,
        endCursor: 'b'
      }
    }
  }
};
