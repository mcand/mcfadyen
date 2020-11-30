import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';
configure({ adapter: new Adapter });

describe('Button', () => {
  const text = 'Button text';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>{text}</Button>)
  });
  it('renders a <button>', () => {
    expect(wrapper.type()).toBe('button');
  });

  it('passes `children` though to the <button>', () => {
    expect(wrapper.prop('children')).toBe(text);
  });
});