import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import walnutImage from './images/walnutPNG.png';
import TablePage from './pages/TablePage';
import Graphs from './pages/Graphs';
import './css/styles.scss';

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
				<Router>
					<header className="header">
						<h1 className="navbar">
							<span className="title">Walnut</span>
							<img alt="walnut" className="icon" src={walnutImage} />
						</h1>
						<div>
							<Link to="/" className="nav-link nav-link-left">
								Table
							</Link>
							<Link to="/graphs" className="nav-link nav-link-right">
								Graphs
							</Link>
							<Route exact path="/" component={TablePage} />
							<Route path="/graphs" component={Graphs} />
						</div>
					</header>
				</Router>
			</div>
		);
	}
}

export default App;
