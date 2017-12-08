import { combineReducers } from 'redux';
import books from './book/booksReducer';
import book from './book/bookReducer';
import { routerReducer } from 'react-router-redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import genres from './genreReducer';



const rootReducer = combineReducers({
  book,
  books,
  genres,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;

