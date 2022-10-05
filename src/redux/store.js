import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { loginReducer } from './reducers/loginReducers.js';
import {
    createPostReducer
  } from './reducers/postReducers.js';

  const initialState = {
  };

  const reducer = combineReducers({
    createPost: createPostReducer,
    loginInfo:loginReducer
  });

  const composeEnhancer = compose;
  const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );

  
export default store;