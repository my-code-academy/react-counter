import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';
import {shallow} from 'enzyme';


describe('counter', () => {
  it("should render a counter", () => {
    const tree = renderer.create(<counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should increment count value', () => {
    const wrapper = shallow(<Counter/>);
    wrapper.instance().incrementCount();
    expect(wrapper.instance().state.count).toEqual(1);
  });

  it('should decrement count value', () => {
    const wrapper = shallow(<Counter/>);
    wrapper.instance().decrementCount();
    expect(wrapper.instance().state.count).toEqual(-1);
  });
});