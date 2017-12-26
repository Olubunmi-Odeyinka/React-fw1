import bookReducer from './bookReducer';
import books from '../../fixtures/books';

test('should set default state', () => {
  const state = bookReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should load book item from store', () => {
  const action = {
    type: 'LOAD_BOOK_SUCCESS',
    book: books[0]
  };
  const state = bookReducer(books[0], action);
  expect(state).toEqual(books[0]);
});
