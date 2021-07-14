import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
	mutation registerUser(
		$username: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		register(
			username: $username
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			username
			email
		}
	}
`;

export const SIGN_IN = gql`
	mutation signInUser($username: String!, $password: String!) {
		register(username: $username, password: $password) {
			username
			email
			token
			createdAt
		}
	}
`;
