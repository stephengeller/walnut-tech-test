import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import FindMatchesButton from '../js/components/FindMatchesButton';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<FindMatchesButton />', () => {
  it('Adds 10 items to table of customers ', () => {
    const component = mount(<App />)
    const table = component.find('Table')
    const button = component.find('FindMatchesButton')
    expect(button).toHaveLength(1)
    expect(table.instance().state.index).toBe(0)
    expect(table.instance().state.customerNumber).toBe(10)
    button.simulate('click')
    expect(table.instance().state.customerNumber).toBe(20)
  })
})
