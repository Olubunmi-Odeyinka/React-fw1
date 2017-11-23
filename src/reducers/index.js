import { combineReducers } from 'redux';
import books from './bookReducer';
import { routerReducer } from 'react-router-redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import genres from './genreReducer';



const rootReducer = combineReducers({
  books,
  genres,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;

