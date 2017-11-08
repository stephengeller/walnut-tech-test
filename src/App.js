import React, { Component } from 'react';
import customers from './customers.json';
import './styles.scss';
import CustomerRow from './components/CustomerRow';
import ImportMoreButton from './components/ImportMoreButton';

class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="header">
					<h1>Walnut</h1>
				</header>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Profession</th>
							<th>Children</th>
							<th>Traits</th>
						</tr>
					</thead>
					<tbody>
						{customers.slice(0, 10).map(c => <CustomerRow customer={c} />)}
					</tbody>
				</table>
				<ImportMoreButton />
			</div>
		);
	}
}

export default App;
