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
