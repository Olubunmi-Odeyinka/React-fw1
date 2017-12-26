import * as types from '../constants/actionTypes';
import {loadBooksSuccess, loadBookSuccess, loadBooks} from './bookActions';
import books  from '../fixtures/books';


test('loadBooksSuccess function generate LOAD_BOOKS_SUCCESS action', ()=>{
  const expected = {
    type: types.LOAD_BOOKS_SUCCESS,
    books
  };

  expect(loadBooksSuccess(books)).toEqual(expected);
});


test('loadBookSuccess function generate LOAD_BOOK_SUCCESS action', ()=>{
  const expected = {
    type: types.LOAD_BOOK_SUCCESS,
    book: books[0]
  };

  expect(loadBookSuccess(books[0])).toEqual(expected);
});

test('should create an ajax_call and return a function', ()=>{
  const dispatch = jest.fn();
  const expected = {
    "type":"BEGIN_AJAX_CALL"
  };

  // we expect this to return a function since it is a thunk
  expect(typeof (loadBooks())).toEqual('function');
  // then we simulate calling it with dispatch as the store would do
  loadBooks()(dispatch);
  // finally assert that the dispatch was called with our expected action
  expect(dispatch).toBeCalledWith(expected);
});
