import * as types from '../constants/actionTypes';
import {loadBooksSuccess, loadBookSuccess, loadBooks} from './bookActions';
import books  from '../fixtures/books';

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
