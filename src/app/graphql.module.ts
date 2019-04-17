import { NgModule } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { setContext } from 'apollo-link-context';
import {
  IntrospectionFragmentMatcher,
  InMemoryCache
} from 'apollo-cache-inmemory';

import { introspectionQueryResultData } from './fragmentTypes';

const uri = 'https://api.github.com/graphql';
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({ uri });
  const authToken = '9fbc54a1baf7ad195fca8496ef3c9c9739a2803f';
  const auth = setContext((_, { headers }) => {
    return {
      headers: new HttpHeaders().set('Authorization', `Bearer ${authToken}`)
    };
  });

  return {
    link: auth.concat(http),
    cache: new InMemoryCache({ fragmentMatcher })
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
