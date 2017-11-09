import React from 'react';
import Chart from '../components/Chart';

// import { Link } from 'react-router';

export default class Graphs extends React.Component {
	navigate() {
		this.props.history.pushState(null, '/');
		// Could also use replaceState, which doesn't give you the option to use the 'back' button
	}

	render() {
		return (
			<div>
				<h2>Graphs</h2>
				<Chart />
			</div>
		);
	}
}
