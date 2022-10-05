import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNOUT_FAIL, SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from "../constants/loginConstants";

  
  export const login = () => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST});
    try {

      setTimeout(() => {
        dispatch({ type: LOGIN_SUCCESS, payload: true });
        localStorage.setItem("isLoggedIn",true)
      }, 3000);
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Something went wrrong, please try again",
      });
    }
  };
  export const signout = () => async (dispatch) => {
    
        dispatch({ type: SIGNOUT_SUCCESS, payload: false });
        localStorage.removeItem("isLoggedIn")
  
  };
  