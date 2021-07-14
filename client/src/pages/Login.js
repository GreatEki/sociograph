import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Input from '../component/Input';
import Button from '../component/Button';

import { useLazyQuery } from '@apollo/client';
import { SIGN_IN_USER } from '../graphql/Query';

const Login = (props) => {
	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	const [error, setError] = useState({
		username: '',
		password: '',
	});

	const [errorMsg, setErrorMsg] = useState('');

	const [login, { loading }] = useLazyQuery(SIGN_IN_USER, {
		errorPolicy: 'all',

		onError(err) {
			console.log(err.graphQLErrors[0].message);
			setErrorMsg(err.graphQLErrors[0].message);
			// setError(err.graphQLErrors[0].extensions.errors);
		},

		onCompleted(data) {
			localStorage.setItem('token', data.login.token);
			props.history.push('/app');
		},
	});

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		login({ variables: user });
	}

	return (
		<Container className='registerPage'>
			<Row className='wrapper'>
				<Col style={{ border: '2px solid orange' }}>
					<div className='flex-center'>
						<h1> Login </h1>
					</div>

					{errorMsg && <span className='font_danger'> {errorMsg} </span>}

					<form onSubmit={handleSubmit}>
						<Input
							label={'Username'}
							type={'text'}
							name={'username'}
							value={user.username}
							onChange={handleChange}
							errorText={error.username}
						/>

						<Input
							label={'Password'}
							type={'password'}
							name={'password'}
							value={user.password}
							onChange={handleChange}
							errorText={error.password}
						/>

						<div className='flex-center m5'>
							<Button className={'btn-primary'} loading={loading}>
								Sign In
							</Button>
						</div>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
