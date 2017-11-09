import customers from '../../customers.json';
import React, { Component } from 'react';

class FindMatchesButton extends Component {
	_resetInputBox() {
		this.refs.inputBox.value = '';
	}

	checkFullNameMatch(firstName, secondName) {
		if (
			firstName.first_name === secondName[0] &&
			firstName.last_name === secondName[1]
		) {
			return true;
		} else {
			return false;
		}
	}

	checkAnyNameMatch(firstName, secondName) {
		if (
			firstName.first_name === secondName[0] ||
			firstName.last_name === secondName[0]
		) {
			return true;
		} else {
			return false;
		}
	}

	changeCustomerData(data) {
		this.props.changeCustomerData(data);
	}

	findMatches(name) {
		var matches = [];
		name = name.split(' ');
		for (var i = 0; i < customers.length; i++) {
			if (this.checkFullNameMatch(customers[i], name)) {
				matches.push(customers[i]);
				this._resetInputBox();
				return this.changeCustomerData([customers[i]]);
			} else if (this.checkAnyNameMatch(customers[i], name)) {
				matches.push(customers[i]);
			}
		}
		this._resetInputBox();
		return this.changeCustomerData(matches);
	}

	render() {
		return (
			<div>
				<input
					className="input-box"
					ref="inputBox"
					placeholder="Enter a name here"
				/>
				<button
					onClick={() => this.findMatches(this.refs.inputBox.value)}
					className="btn input-button"
				>
					Search for name
				</button>
			</div>
		);
	}
}

export default FindMatchesButton;
