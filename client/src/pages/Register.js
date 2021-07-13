import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Input from '../component/Input';
import Button from '../component/Button';

import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/Mutation';

const Register = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = useState({});

	const [registerUser, { loading }] = useMutation(REGISTER_USER, {
		update(_, res) {
			console.log(res);
		},

		onError(err) {
			console.log(err.graphQLErrors[0].extensions.error);
			setError(err.graphQLErrors[0].extensions.error);
		},
	});

	function handleSubmit(e) {
		e.preventDefault();

		registerUser({ variables: user });
	}

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<Container>
			<Row className='container'>
				<Col style={{ border: '2px solid orange' }}>
					<div className='flex-center text-white'>
						<h1> Register</h1>
					</div>

					<form onSubmit={handleSubmit}>
						<Input
							label={'Username'}
							type={'text'}
							name={'username'}
							value={user.username}
							onChange={onChange}
						/>

						<Input
							label={'Email'}
							type={'text'}
							name={'email'}
							value={user.email}
							onChange={onChange}
						/>
						<Input
							label={'Password'}
							type={'password'}
							name={'password'}
							value={user.password}
							onChange={onChange}
						/>
						<Input
							label={'Confirm Password'}
							type={'password'}
							name={'confirmPassword'}
							value={user.confirmPassword}
							onChange={onChange}
						/>

						<div className='flex-center m5'>
							<Button className={'btn-primary'} loading={loading}>
								Register
							</Button>
						</div>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default Register;
