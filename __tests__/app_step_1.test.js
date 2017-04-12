import React from 'react';
import { View, Text } from 'react-native';
import { shallow, render, mount } from 'enzyme';

import App from '../app/app_step_1';

afterAll(() => {
  console.log('All tests finished');
});

afterEach(() => { /* do something */ });
beforeAll(() => { /* do something */ });
beforeEach(() => { /* do something */ });

describe("<App />", function() {
  const wrapper = shallow(<App />);

  it('should render an App component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('  should have a View component wrapper', () => {
    expect(wrapper.type()).toEqual(View);
  });

  it('  should have flex equal to 1', () => {
    expect(wrapper.props().style.flex).toEqual(1);
  });

  it('  should have only one child', () => {
    expect(wrapper.children()).toHaveLength(1);
  });

  it('    should be a View component', () => {
    // expect(wrapper.children().first().type()).toBe(View);
    expect(wrapper.childAt(0).type()).toBe(View);
  });

  it('    should have two children', () => {
    expect(wrapper.childAt(0).children()).toHaveLength(2);
  });

  it('      should be two Text components', () => {
    wrapper.childAt(0).children().forEach(child => {
        expect(child.type()).toBe(Text)
    });
  });

  it('        should have its first Text component with "Welcome to rmotr\'s workshop!" message', () => {
    expect(wrapper.childAt(0).childAt(0).props().children).toBe('Welcome to rmotr\'s Workshop!');
  });

  it('        should have its first Text component with fontSize 20', () => {
    expect(wrapper.find(Text).get(0).props.style.fontSize).toBe(20);
  });

  it('        should have its first Text component with color \'#2c3e50\'', () => {
    expect(wrapper.find(Text).get(0).props.style.color).toBe('#2c3e50');
  });

  it('        should have its first Text component with fontWeight \'bold\'', () => {
    expect(wrapper.find(Text).get(0).props.style.fontWeight).toBe('bold');
  });

  it('        should have its second Text component with "(Open up main.js to start working)" message', () => {
    expect(wrapper.find(Text).get(1).props.children).toBe('(Open up main.js to start working)');
  });

  it('        should have its second Text component with color #34495e', () => {
    expect(wrapper.find(Text).get(1).props.style.color).toBe('#34495e');
  });
});
