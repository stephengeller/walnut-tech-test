import React, { Component } from 'react';
import CustomerRow from './CustomerRow';
import FindMatchesButton from './FindMatchesButton';
import customers from '../customers.json';

class Table extends Component {
	constructor() {
		super();
		this.state = {
			index: 0,
			customerNumber: 10,
			customerData: customers
		};
	}

	loadMore() {
		this.setState({
			customerNumber: this.state.customerNumber + 10
		});
	}

	setDefaults() {
		this.setState({
			index: 0,
			customerNumber: 10,
			customerData: customers
		});
	}

	changeCustomerData(customers) {
		return this.setState({
			customerData: customers
		});
	}

	render() {
		return (
			<div>
				<FindMatchesButton
					changeCustomerData={this.changeCustomerData.bind(this)}
				/>
				<table className="tableSection">
					<thead>
						<tr>
							<th className="name">Name</th>
							<th className="profession">Profession</th>
							<th>Children</th>
							<th>Traits</th>
						</tr>
					</thead>
					<tbody>
						{this.state.customerData
							.slice(this.state.index, this.state.customerNumber)
							.map(c => <CustomerRow customer={c} />)}
					</tbody>
				</table>
				<div className="import-more">
					<button onClick={this.loadMore.bind(this)} className="btn">
						Load more
					</button>
				</div>
				<button onClick={this.setDefaults.bind(this)} className="btn">
					Set Defaults
				</button>
			</div>
		);
	}
}

export default Table;
