import booksReducer from './booksReducer';
import books from '../../fixtures/books';

test('should set default state', () => {
  const state = booksReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should load books from store', () => {
  const action = {
    type: 'LOAD_BOOKS_SUCCESS',
    books
  };
  const state = booksReducer(books, action);
  expect(state).toEqual(books);
});
