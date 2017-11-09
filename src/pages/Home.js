import React from 'react';
import Table from '../components/Table';

// import { Link } from 'react-router';

export default class Home extends React.Component {
	navigate() {
		this.props.history.pushState(null, '/');
		// Could also use replaceState, which doesn't give you the option to use the 'back' button
	}

	render() {
		return (
			<div>
				<h2>Home</h2>
				<Table />
			</div>
		);
	}
}
