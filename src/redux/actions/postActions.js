import {
  CREATEPOST_FAIL,
  CREATEPOST_REQUEST,
  CREATEPOST_SUCCESS,
} from "../constants/postConstants";

export const createPost = (requestBody) => async (dispatch) => {
  dispatch({ type: CREATEPOST_REQUEST});
  try {
    //async api call // response would be response from api
    // we have used setTimeout to assume that api is taking 3 sec of time.. if not use then it is so fast that loading icon could not be displayed
    // request body would be used to send it at abckend and response we will get from that
    const response={
      userId:requestBody.userId,
      userImage:require("../../Assets/Images/ayush.jpg"),
      userName:"Arpit Dwivedi",
      userAbout:"Software Engineer",
      userPostText:requestBody.value,
      userPostMedia:requestBody.media
    }
    setTimeout(() => {
      dispatch({ type: CREATEPOST_SUCCESS, payload: response });
    }, 3000);
  } catch (error) {
    dispatch({
      type: CREATEPOST_FAIL,
      payload: "Something went wrrong, please try again",
    });
  }
  
};
