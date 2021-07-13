import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Register from './pages/Register';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path={'/'} component={Register} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
