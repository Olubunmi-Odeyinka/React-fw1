import React from 'react';
import { shallow } from 'enzyme';
import { BooksPage } from './BooksPage';

import books from '../../../fixtures/books';
import genres from '../../../fixtures/genres';

let wrapper, props, itemUrl;

beforeEach(() => {
  props = {
    books,
    genres,
    actions:{
      loadBooks: jest.fn()
    }
  };
  itemUrl='';
});

test('should render BooksPage with non empty books', () => {
  wrapper = shallow(<BooksPage {...props} itemUrl={itemUrl}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render BooksPage with empty books', () => {
  props.books = [];
  wrapper = shallow(<BooksPage {...props} itemUrl={itemUrl}/>);
  expect(wrapper).toMatchSnapshot();
});

test('BooksPage should have a header Books', ()=>{
  wrapper = shallow(<BooksPage {...props} itemUrl={itemUrl}/>);
  expect(wrapper.find('h1').text()).toEqual('Books');
});

it('Create button is labeled Add Book', () => {
  wrapper = shallow(<BooksPage {...props} itemUrl={itemUrl}/>);
  expect(wrapper.find('input').props().value).toBe('Add Book');
});
