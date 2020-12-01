import React from 'react';
import AppMenu from '../Components/AppMenu';
import { mount } from 'enzyme';

describe('AppMenu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AppMenu brand='McFadyen News' />)
  });

  it('renders the mene with the title', () => {
    expect(wrapper.find('h6').text()).toEqual('McFadyen News');
  });

  it('passes brand through to <h6>', () => {
    const brand = 'My Company';
    wrapper.setProps({ brand });
    expect(wrapper.prop('brand')).toBe(brand);
  });

  it('renders an input for search', () => {
    expect(wrapper.find('input').prop('placeholder')).toBe('Search');
  });
});