import { combineReducers } from 'redux';
import books from './book/booksReducer';
import book from './book/bookReducer';
import { routerReducer } from 'react-router-redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import genres from './genreReducer';
import auth from './authReducer'



const rootReducer = combineReducers({
  book,
  books,
  genres,
  auth,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;

