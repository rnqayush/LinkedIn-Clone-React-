import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
} from "../constants/loginConstants";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, isLoggedIn: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case SIGNOUT_SUCCESS:
      return { isLoggedIn: action.payload };
    default:
      return state;
  }
};
