import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Input from './component/Input';
import Button from './component/Button';

function App() {
	const handleClick = (e) => {
		e.prevenDefault();
		console.log('Button Clicked');
	};
	return (
		<Container>
			<Row>
				<Col style={{ border: '2px solid orange' }}>
					<h1> Register</h1>

					<form>
						<Input label={'Username'} type={'text'} />

						<Input label={'Email'} type={'text'} />
						<Input label={'Password'} type={'password'} />
						<Input label={'Confirm Password'} type={'password'} />

						<div className='flex-center m5'>
							<Button handleClick={handleClick} className={'btn-primary'}>
								Register
							</Button>
						</div>
					</form>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
