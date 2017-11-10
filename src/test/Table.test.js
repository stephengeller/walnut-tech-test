import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Table from '../js/components/Table';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders props correctly', () => {
	const component = shallow(<Table />);
	expect(component).toHaveLength(1);
});

describe('<Table />', () => {
	it('Renders correctly', () => {
		const component = shallow(<App />);
		const table = component.find('Table');
		expect(component).toHaveLength(1);
	});
});
