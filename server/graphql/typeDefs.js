const { gql } = require('apollo-server');

module.exports = gql`
	type User {
		username: String!
		email: String!
		token: String
		createdAt: String!
	}

	type Query {
		login(username: String!, password: String!): User!
		getUsers: [User]!
	}

	type Mutation {
		register(
			username: String!
			email: String!
			password: String!
			confirmPassword: String!
		): User!
	}
`;
