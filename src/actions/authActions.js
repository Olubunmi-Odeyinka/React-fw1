import * as types from '../constants/actionTypes';

export const loginSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  token
});

export const login = () => ({

});

export const logoutSuccess = () => ({
  types: 'LOGOUT'
});

export const logout = () => ({

});
