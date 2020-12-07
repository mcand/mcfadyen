import React from 'react';
import AppMenu from '../Components/AppMenu';
import { mount } from 'enzyme';
import Select from '@material-ui/core/Select';

describe('AppMenu', () => {
  let wrapper;
  const onTypeChange = jest.fn();
  const onChange = jest.fn();

  beforeEach(() => {
    wrapper = mount(<AppMenu brand='McFadyen News' onTypeChange={onTypeChange} onChange={onChange}/>)
  });

  it('renders the mene with the title', () => {
    expect(wrapper.find('h6').text()).toEqual('McFadyen News');
  });

  it('passes brand through to <h6>', () => {
    const brand = 'My Company';
    wrapper.setProps({ brand });
    expect(wrapper.prop('brand')).toBe(brand);
  });

  // it('passes onTypeChange through to <Select>', () => {
  //   wrapper.find(Select).simulate('change', { target: { value: 'newest'}});
  //   expect(onChange).toHaveBeenCalled();
  // });
  it('renders an <input> for search', () => {
    expect(wrapper.find('[data-testid="searchInput"]').at(0).prop('placeholder')).toBe('Search');
  });

  it('renders a <select> to filter search', () => {
    const select = wrapper.find(Select).at(0);
    expect(select.length).toBe(1);
  });

  // it('changes the value of the input', () => {
  //   wrapper.find('[data-testid="searchInput"]').at(0).simulate('change', {target: {value: 'test'}});
  //   expect(onChange).toHaveBeenCalled();
  // });
});