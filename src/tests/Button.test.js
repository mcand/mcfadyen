import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Components/Button';

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