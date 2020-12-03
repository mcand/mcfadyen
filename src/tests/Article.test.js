import React from 'react';
import { shallow } from 'enzyme';
import Article from '../Components/Article';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

describe('Article', () => {
  const imageUrl = 'http://image.com/image.jpg';
  const title = 'My Article';
  const abstract = 'My Abstrct';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Article 
        title={title}
        abstract={abstract}
        imageUrl={imageUrl}
    />)
  });

  it('renders a <Grid>', () => {
    expect(wrapper.type()).toBe(Grid);
    expect(wrapper.prop('item')).toBe(true);
    expect(wrapper.prop('lg')).toBe(3);
  });

  it('renders a <Card>', () => {
    const card = wrapper.find(Card);
    expect(card.length).toEqual(1);
    expect(card.childAt(0).type()).toBe(CardActionArea);
  });

  it('renders a <CardMedia> and <CardContent> as children', () => {
    const cardActionArea = wrapper.find(CardActionArea);
    expect(cardActionArea.childAt(0).type()).toBe(CardMedia);
    expect(cardActionArea.childAt(1).type()).toBe(CardContent);
  })

  it('passes imageUrl thourgh to <CardMedia>', () => {
    const cardMedia = wrapper.find(CardMedia);
    expect(cardMedia.prop('image')).toBe(imageUrl);
  });

  it('passes title through to <CardContent>', () => {
    const cardContent = wrapper.find(CardContent);
    expect(cardContent.childAt(0).prop('children')).toBe(title);
  })

  it('passes abstract through to <CardContent>', () => {
    const cardContent = wrapper.find(CardContent);
    expect(cardContent.childAt(1).prop('children')).toBe(abstract);
  });

  it('uses imageUrl as <CardMedia>', () => {
    const myImage = 'https://image.com/second.jpg';
    wrapper.setProps({imageUrl: myImage});
    expect(wrapper.find(CardMedia).prop('image')).toBe(myImage);
  });

  it('uses title within <CardContent>', () => {
    const title = 'myTitle';
    wrapper.setProps({title });
    expect(wrapper.find(CardContent).childAt(0).prop('children')).toBe(title);
  });

  it('uses abstract within <CardContent>', () => {
    const abstract = 'My Other Abstract';
    wrapper.setProps({abstract});
    expect(wrapper.find(CardContent).childAt(1).prop('children')).toBe(abstract);
  });

  it('should be possible not render Image', () => {
    wrapper.setProps({shouldShowImage: false})
    expect(wrapper.find(CardMedia).length).toBe(0);
  });
});