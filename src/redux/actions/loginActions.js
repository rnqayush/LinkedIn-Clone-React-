import { loginCredential } from "../../Data/data";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
} from "../constants/loginConstants";

export const login = (email,password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    if(email===loginCredential.email && password===loginCredential.password){
      setTimeout(() => {
        dispatch({ type: LOGIN_SUCCESS, payload: true });
        localStorage.setItem("Token",loginCredential.token);
      }, 3000);
    }else{
      dispatch({
        type: LOGIN_FAIL,
        payload: "Incorrect UserId or Password",
      });
    }
  
    
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: "Something went wrrong, please try again",
    });
  }
};
export const signout = () => async (dispatch) => {
  dispatch({ type: SIGNOUT_SUCCESS, payload: false });
  localStorage.clear();
};

export const TokenValidCheck = () => async (dispatch) => {
  const token = localStorage.getItem("Token");
  if (token) {
    // api call to check token
    if(token===loginCredential.token){
      dispatch({ type: LOGIN_SUCCESS, payload: true });
    }
    
  }
};
