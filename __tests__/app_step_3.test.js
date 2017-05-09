import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { shallow, render, mount } from 'enzyme';

import App from '../app/1_react-native/step_3';

afterAll(() => {
  console.log('All tests finished');
});

afterEach(() => { /* do something */ });
beforeAll(() => { /* do something */ });
beforeEach(() => { /* do something */ });

describe("<App>", () => {
  const wrapper = shallow(<App />);

  it('should have a View component wrapper', () => {
    expect(wrapper.type()).toEqual(View);
  });

  it('should have flex equal to 1', () => {
    expect(wrapper.props().style.flex).toEqual(1);
  });

  it('should have two children', () => {
    expect(wrapper.children()).toHaveLength(2);
  });

  it('should be both View components', () => {
    wrapper.children().forEach(child => {
        expect(child.type()).toBe(View);
    });
  });

  describe("<View>", () => {
    it('should have three children', () => {
      expect(wrapper.childAt(0).children()).toHaveLength(3);
    });

    describe("<Image>", () => {
      it('should be an Image component', () => {
        expect(wrapper.childAt(0).childAt(0).type()).toBe(Image);
      });
    });

    describe("<Text>", () => {
      it('should be a Text component', () => {
        expect(wrapper.childAt(0).childAt(1).type()).toBe(Text);
      });

      it('should have "Welcome!" message', () => {
        expect(wrapper.childAt(0).childAt(1).props().children).toBe('Welcome!');
      });

      it('should have fontSize 20', () => {
        expect(wrapper.find(Text).get(0).props.style.fontSize).toBe(20);
      });

      it('should have color \'#2c3e50\'', () => {
        expect(wrapper.find(Text).get(0).props.style.color).toBe('#2c3e50');
      });

      it('should have fontWeight \'bold\'', () => {
        expect(wrapper.find(Text).get(0).props.style.fontWeight).toBe('bold');
      });
    });

    describe("<Text> 2", () => {
      it('should be a Text component', () => {
        expect(wrapper.childAt(0).childAt(2).type()).toBe(Text);
      });

      it('should have "(Open up main.js to start working)" message', () => {
        expect(wrapper.childAt(0).childAt(2).props().children).toBe('(Open up main.js to start working)');
      });

      it('should have color #34495e', () => {
        expect(wrapper.childAt(0).childAt(2).props().style.color).toBe('#34495e');
      });
    });
  });

  describe("<View> 2", () => {
    it('should have one child', () => {
      expect(wrapper.childAt(1).children()).toHaveLength(1);
    });

    it('should be a Button component', () => {
      expect(wrapper.childAt(1).childAt(0).type()).toBe(Button);
    });

    describe("<Button>", () => {
      it('should change title to "Button was pressed!" when its clicked', () => {
        expect(wrapper.state().title).toBe('Welcome!');
        expect(wrapper.childAt(0).childAt(1).props().children).toBe('Welcome!');

        wrapper.childAt(1).childAt(0).simulate('press');

        expect(wrapper.state().title).toBe('Button was pressed!');
        expect(wrapper.childAt(0).childAt(1).props().children).toBe('Button was pressed!');
      });
    });
  });
});
