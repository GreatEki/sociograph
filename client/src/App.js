import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import ApolloProvider from './graphql/ApolloProvider';

import Register from './pages/Register';
import Login from './pages/Login';

function App() {
	return (
		<ApolloProvider>
			<BrowserRouter>
				<Switch>
					<Route exact path={'/'} component={Register} />

					<Route path={'/login'} component={Login} />
				</Switch>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
