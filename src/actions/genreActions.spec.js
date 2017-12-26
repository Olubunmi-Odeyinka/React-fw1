import * as types from '../constants/actionTypes';
import {loadGenresSuccess, loadGenres} from './genreActions';
import genres  from '../fixtures/genres';

test('loadGenresSuccess function generate LOAD_BOOKS_SUCCESS action', ()=>{
  const expected = {
    type: types.LOAD_GENRES_SUCCESS,
    genres
  }

  expect(loadGenresSuccess(genres)).toEqual(expected);
})


test('should create an ajax_call and return a function', ()=>{
  const dispatch = jest.fn();
  const expected = {
    "type":"BEGIN_AJAX_CALL"
  };

  // we expect this to return a function since it is a thunk
  expect(typeof (loadGenres())).toEqual('function');
  // then we simulate calling it with dispatch as the store would do
  loadGenres()(dispatch);
  // finally assert that the dispatch was called with our expected action
  expect(dispatch).toBeCalledWith(expected);
});

