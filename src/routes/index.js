import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Graphs from '../pages/Graphs';
import Home from '../pages/Home';

export default () => {
	<BrowserRouter>
		<div>
			<Route path="/" component={Home} />
			<Route path="/graphs" component={Graphs} />
		</div>
	</BrowserRouter>;
};
