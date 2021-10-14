import App from './App.svelte';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql
} from "@apollo/client";


const client = new ApolloClient({
	uri: 'https://graphql.org/swapi-graphql',
	cache: new InMemoryCache()
});

const People = gql`
	query GetPeople {
		allPeople {
		edges {
			node {
			species {
				name
				language
			}
			homeworld {
				name
			}
			name
			}
		}
		}
  	}
`;


const app = new App({
	target: document.body,
	people: People
});

export default app;