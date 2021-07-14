import { gql } from '@apollo/client';

export const SIGN_IN_USER = gql`
	query login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			username
			email
			token
			createdAt
		}
	}
`;
