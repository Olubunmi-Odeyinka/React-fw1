import * as types from '../constants/actionTypes';
import bookApi from '../api/mockBookApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books};
}

export function loadBookSuccess(book) {
  return { type: types.LOAD_BOOK_SUCCESS, book};
}

export function loadBooks() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return bookApi.getAllBooks().then(books => {
      dispatch(loadBooksSuccess(books));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getBookById(id) {
  return function (dispatch){
    dispatch(beginAjaxCall());
    return bookApi.getBookById(id).then(book => {
      dispatch(loadBookSuccess(book));
    }).catch(error => {
      throw(error);
    });
  }
}

export function saveNewBook(book) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return bookApi.saveNewBook(book).then(book => {
      dispatch(loadBookSuccess(book));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function saveUpdateBook(book) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return bookApi.saveUpdateBook(book).then(book => {
        dispatch(loadBookSuccess(book));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function saveDeleteBook(book) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return bookApi.saveDeleteBook(book).then(book => {
        dispatch(loadBookSuccess(book));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

//This is a generic save function that depend on entity state pass to the server
//to determine if it should savve, end or delete
export function saveBook(book) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return bookApi.saveBook(book).then(book => {
      dispatch(loadBookSuccess(book));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
