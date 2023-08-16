import { client } from '../../lib/apolloClient.js';
import { gql } from '@apollo/client';

export async function load({ fetch }) {
	const { data } = await client.query({
		query: gql`
			query GetAllGames {
				games {
					id
					title
					platform
				}
			}
		`
	});

	return {
		data
	};
}
