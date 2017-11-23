import GenreApi from '../api/mockGenreApi';
import * as types from '../constants/actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadGenresSuccess(genres) {
  return {type: types.LOAD_GENRES_SUCCESS, genres};
}

export function loadGenres() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return GenreApi.getAllGenres().then(genres => {
      dispatch(loadGenresSuccess(genres));
    }).catch(error => {
      throw(error);
    });
  };
}
