import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Register from './pages/Register';
import ApolloProvider from './graphql/ApolloProvider';

function App() {
	return (
		<ApolloProvider>
			<BrowserRouter>
				<Switch>
					<Route exact path={'/'} component={Register} />
				</Switch>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
