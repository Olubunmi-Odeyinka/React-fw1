import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function genreReducer(state = initialState.genres, action) {
  switch (action.type) {
    case types.LOAD_GENRES_SUCCESS:
      return action.genres;

    default:
      return state;
  }
}
