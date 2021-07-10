const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { UserInputError, AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/env.json');

module.exports = {
	Query: {
		getUsers: async () => {
			try {
				const users = await User.findAll();

				return users;
			} catch (err) {
				console.log(err);
			}
		},
	},

	Mutation: {
		register: async (_, args, context, info) => {
			const { username, email, password, confirmPassword } = args;
			let validationErrors = {};

			try {
				// Validate Input data
				if (email.trim() === '')
					validationErrors.email = 'email must not be empty';
				if (username.trim() === '')
					validationErrors.username = 'username cannot be empty';
				if (password.trim() === '')
					validationErrors.password = 'password cannot be empty';

				if (password !== confirmPassword)
					validationErrors.confirmPassword = 'Passwords do not match';

				// Check if Username/email exists
				// const exisitingUsername = await User.findOne({ where: { username } });
				// const exisitingEmail = await User.findOne({ where: { email } });

				// if (exisitingUsername)
				// 	validationErrors.username = 'Sorry username has been taken';
				// if (exisitingEmail) validationErrors.email = 'Email already exists';

				// Check if parameters passes
				if (Object.keys(validationErrors).length > 0) {
					throw validationErrors;
				} else {
					const hashedPassword = await bcrypt.hash(password, 6);

					// Create User
					const user = await User.create({
						username,
						email,
						password: hashedPassword,
					});
					return user;
				}
			} catch (err) {
				console.log(err);
				// This validation by sequelize focuses on the uniqueness of the values entered on the columns for those fields specified to be unique
				if (err.name === 'SequelizeUniqueConstraintError') {
					err.errors.forEach((e) => (e.message = `${e.path} is already taken`));
				}

				if (err.name === 'SequelizeValiationError') {
					err.errors.forEach((e) => e.message);
				}

				throw new UserInputError('Bad Input', { error: err });
			}
		},

		login: async (_, args) => {
			const { username, password } = args;
			let validationErrors = {};

			// Validate user input
			if (username.trim() === '')
				validationErrors.username = 'Username cannot be empty';

			if (password === '')
				validationErrors.password = 'Password cannot be empty';

			if (Object.keys(validationErrors).length > 0) {
				throw new UserInputError('Bad Input', { validationErrors });
			}

			try {
				const user = await User.findOne({ where: { username } });
				validationErrors.username = 'User not found';
				if (!user) {
					throw new UserInputError('Not Found', { validationErrors });
				}

				const correctPassword = await bcrypt.compare(password, user.password);

				if (!correctPassword) {
					validationErrors.password = 'Email or password is incorrect';
					throw new AuthenticationError('Invalid Credentials', {
						validationErrors,
					});
				}

				// Generate token
				const token = await jwt.sign({ username }, JWT_SECRET_KEY, {
					expiresIn: '1h',
				});

				return {
					...user.toJSON(),
					token,
					createdAt: user.createdAt.toISOString(),
				};
			} catch (err) {
				throw err;
			}
		},
	},
};
