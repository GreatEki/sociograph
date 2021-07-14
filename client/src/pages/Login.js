import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Input from '../component/Input';
import Button from '../component/Button';

const Login = () => {
	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	return (
		<Container className='registerPage'>
			<Row className='wrapper'>
				<Col style={{ border: '2px solid orange' }}>
					<div className='flex-center'>
						<h1> Login </h1>
					</div>

					<form>
						<Input
							label={'Username'}
							type={'text'}
							name={'username'}
							// value={user.username}
							onChange={handleChange}
							// errorText={error.username}
						/>

						<Input
							label={'Password'}
							type={'password'}
							name={'password'}
							// value={user.password}
							onChange={handleChange}
							// errorText={error.password}
						/>

						<div className='flex-center m5'>
							<Button className={'btn-primary'}>Sign In</Button>
						</div>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
