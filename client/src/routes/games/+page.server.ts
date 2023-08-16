import { client } from '../../lib/apolloClient.js';
import { gql } from '@apollo/client';

export async function load() {
	const { data } = await client.query({
		query: gql`
			query GetAllGamesWithReviews {
				games {
					id
					title
					platform
					reviews {
						id
						rating
						content
					}
				}
			}
		`
	});

	return {
		data
	};
}
