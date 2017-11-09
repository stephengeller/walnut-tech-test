import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import customers from './customers.json';
import Home from './pages/Home';
import Graphs from './pages/Graphs';
import CustomerRow from './components/CustomerRow';
import './styles.scss';

class App extends Component {
	constructor() {
		super();
		this.state = {
			chartData: {},
			word: 'hello'
		};
	}

	render() {
		return (
			<div className="app">
				<header className="header">
					<h1>Walnut</h1>
					<Router>
						<div>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/graphs">Graphs</Link>
								</li>
							</ul>
							<Route exact path="/" component={Home} />
							<Route path="/graphs" component={Graphs} />
						</div>
					</Router>
				</header>
			</div>
		);
	}
}

export default App;
