import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { GithubUserSearchResponse } from '../models/github-user-search-response.model';

@Injectable()
export class GithubUsersSearchGQL extends Query<GithubUserSearchResponse> {
  document = gql`
    query searchUsers($searchVal: String!, $afterCursor: String) {
      search(type: USER, query: $searchVal, first: 10, after: $afterCursor) {
        userCount
        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }
        edges {
          node {
            ... on User {
              id
              login
              name
              url
              email
              bio
              location
              avatarUrl
              createdAt
              followers {
                totalCount
              }
              repositories {
                totalCount
              }
              starredRepositories {
                totalCount
              }
            }

            ... on Organization {
              id
              login
              name
              url
              avatarUrl
              repositories {
                totalCount
              }
            }
          }
        }
      }
    }
  `;
}
