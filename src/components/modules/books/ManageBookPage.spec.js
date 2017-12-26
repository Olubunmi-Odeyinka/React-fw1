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
    actions:{},
    match: {params: {operator: operation.Modify_URL_String}},
    match: {params: {id: books[0].id}}
  };

});

test('Should render Books edit view', ()=>{
  wrapper = <ManageBookPage {...props}/>;
  expect(wrapper).toMatchSnapshot();
});
