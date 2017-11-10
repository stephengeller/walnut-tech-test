import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Table from '../js/components/Table';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

describe('<App />', () => {
	it('Renders components once', () => {
		const component = mount(<App />);
		expect(component).toHaveLength(1);
		const button = component.find('[id="find-matches-button"]');
		expect(button).toHaveLength(1);
		const table = component.find('Table');
		expect(table).toHaveLength(1);
	});

	it('Renders chart after clicking link to route', () => {
		const component = mount(<App />);
		const graphsLink = component.find('[id="nav-graphs"]').first();
		graphsLink.simulate('click');
		const chart = component.find('Chart');
		expect(chart).toHaveLength(1);
	});
});
