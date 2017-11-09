import React, { Component } from 'react';
import CustomerRow from './CustomerRow';
import customers from '../customers.json';

class Table extends Component {
	constructor() {
		super();
		this.state = {
			customerNumber: 10
		};
	}

	loadMore() {
		console.log('loading more');
		this.setState({
			customerNumber: this.state.customerNumber + 10
		});
	}

	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th className="name">Name</th>
							<th className="profession">Profession</th>
							<th>Children</th>
							<th>Traits</th>
						</tr>
					</thead>
					<tbody>
						{customers
							.slice(0, this.state.customerNumber)
							.map(c => <CustomerRow customer={c} />)}
					</tbody>
				</table>
				<div className="import-more">
					<button onClick={this.loadMore.bind(this)} className="btn">
						Load more
					</button>
				</div>
			</div>
		);
	}
}

export default Table;
