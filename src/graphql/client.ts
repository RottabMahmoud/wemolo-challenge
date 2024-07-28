import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://interview-apixx07.dev.park-depot.de/' }),
  cache: new InMemoryCache(),
});

export default client;
