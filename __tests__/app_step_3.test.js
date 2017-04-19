import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { shallow, render, mount } from 'enzyme';

import App from '../app/app_step_3';

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

  it('  should have two childen', () => {
    expect(wrapper.children()).toHaveLength(2);
  });

  it('    should be both View components', () => {
    wrapper.children().forEach(child => {
        expect(child.type()).toBe(View)
    });
  });

  it('    should have its first View with three children', () => {
    expect(wrapper.childAt(0).children()).toHaveLength(3);
  });

  it('      first child should be an Image component', () => {
    expect(wrapper.childAt(0).childAt(0).type()).toBe(Image);
  });

  it('      second should be a Text component', () => {
    expect(wrapper.childAt(0).childAt(1).type()).toBe(Text);
  });

  it('        should have its first Text component with "Welcome to rmotr\'s workshop!" message', () => {
    expect(wrapper.childAt(0).childAt(1).props().children).toBe('Welcome to rmotr\'s Workshop!');
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

  it('      third one should be a Text component', () => {
    expect(wrapper.childAt(0).childAt(2).type()).toBe(Text);
  });

  it('        should have its second Text component with "(Open up main.js to start working)" message', () => {
    expect(wrapper.find(Text).get(1).props.children).toBe('(Open up main.js to start working)');
  });

  it('        should have its second Text component with color #34495e', () => {
    expect(wrapper.find(Text).get(1).props.style.color).toBe('#34495e');
  });

  it('    should have its second View with one child', () => {
    expect(wrapper.childAt(1).children()).toHaveLength(1);
  });

  it('      should be a Button component', () => {
    expect(wrapper.childAt(1).childAt(0).type()).toBe(Button);
  });

  it('        should change title to "Button was pressed!" when its clicked', () => {
    expect(wrapper.state().title).toBe('Welcome to rmotr\'s Workshop!');
    expect(wrapper.childAt(0).childAt(1).props().children).toBe('Welcome to rmotr\'s Workshop!');

    wrapper.childAt(1).childAt(0).simulate('press');

    expect(wrapper.state().title).toBe('Button was pressed!');
    expect(wrapper.childAt(0).childAt(1).props().children).toBe('Button was pressed!');
  });

  it.only('TEST', () => {
    console.log(wrapper);
    console.log(wrapper.text());
    expect(1).toBe(1);
  });
});
