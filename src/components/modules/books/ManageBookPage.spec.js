import React from 'react';
import { shallow } from 'enzyme';
import { ManageBookPage } from './ManageBookPage';
import * as operation from '../../../constants/operationTypes';
import books from '../../../fixtures/books';
import genres from '../../../fixtures/genres';

let props, wrapper;
beforeEach(() => {

  props = {
    book: books[0],
    genres,
    actions:{getBookById: jest.fn()},
    lookUpsAction:{loadGenres: jest.fn()},
    match: {params: {
      operator: operation.Modify_URL_String,
      id: books[0].id
    }}
  };
});

test('Should render Books edit view', ()=>{
  wrapper = shallow(<ManageBookPage {...props}/>);
  expect(wrapper).toMatchSnapshot();
});
