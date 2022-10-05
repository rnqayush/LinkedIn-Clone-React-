import { CREATEPOST_FAIL, CREATEPOST_REQUEST, CREATEPOST_SUCCESS } from "../constants/postConstants";



export const createPostReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATEPOST_REQUEST:
        return  { loading: true };
        
      case CREATEPOST_SUCCESS:
        return { loading: false, createdPostData: action.payload };
      case CREATEPOST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  