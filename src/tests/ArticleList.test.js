import React from 'react';
import { shallow } from 'enzyme';
import ArticleList from '../Components/ArticleList';
import { articles } from './fixtures/articles';
import Article from '../Components/Article';

describe('ArticleList', () => {
  let wrapper;
  const setCurrentPage = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setCurrentPage]);

  const title = 'My Articles';

  beforeEach(() => {
    wrapper = shallow(
      <ArticleList
        title={title}
        articles={articles}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('renders the title of the <ArticleList>', () => {
    expect(wrapper.find('h2').text()).toBe(title);
  });

  it('passes title through to <h2>', () => {
    expect(wrapper.find('h2').text()).toBe(title);
  });

  it('renders articles', () => {
    expect(wrapper.find(Article).length).toEqual(articles.length);
  });

});
