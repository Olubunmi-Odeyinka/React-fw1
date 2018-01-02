import * as types from '../constants/actionTypes'

export default (state={}, action) => {
  switch (action.type){
    case types.LOGIN_SUCCESS:
      return {
        token: action.token
      };
    case types.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
