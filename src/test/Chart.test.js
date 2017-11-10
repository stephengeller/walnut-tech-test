import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Chart from '../js/components/Chart';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Chart />', () => {
	it('Renders once', () => {
		const component = shallow(<App />);
		expect(component).toHaveLength(1);
	});

	it('renders chart correctly', () => {
		const component = shallow(<Chart />);
		expect(component).toHaveLength(1);
	});
});
