import React, { Component } from 'react';
import customers from './customers.json';
import CustomerRow from './components/CustomerRow';
import Table from './components/Table';
import Chart from './components/Chart';
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
				</header>
				<Table />
				<Chart />
			</div>
		);
	}
}

export default App;
