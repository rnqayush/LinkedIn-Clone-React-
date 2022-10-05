import { useCallback, useEffect, useRef, useState } from "react";
import {
  BsFillCaretRightSquareFill,
  BsFillEyeFill,
  BsFillFileEarmarkTextFill,
  BsFillImageFill,
  BsXLg,
} from "react-icons/bs";

import { useSelector,useDispatch } from "react-redux";
import { createPost } from "../redux/actions/postActions";

const Modal = ({ isVisible, crossPress, postClicked }) => {
  const uploadMedias = useRef();
  const [value, setValue] = useState("");
  const [media,setMedia]=useState()
  
  // const postData = useSelector((state) => state.createPost);


  const dispatch = useDispatch();
  const submitPostHandler=()=>{
    const requestBody={
      userId:"18",
      value,
      media,
    }
    dispatch(createPost(requestBody))
    setValue("")
    setMedia("")
    postClicked()
  }


  return isVisible ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "45%",
          maxHeight: "24rem",
          marginTop: "30px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "20%",
            borderBottomWidth: "1px",
            borderBottomColor: "lightgray",
            borderBottomStyle: "solid",
            alignItems: "center",
            display: "flex",
            padding: "0px 20px",

            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "20px" }}>Create a post</span>
          <BsXLg size={20} onClick={() => crossPress()} />
        
          
        </div>
        <div style={{ padding: "10px 20px", height: "50%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 0,
              margin: 0,
              alignItems: "center",
            }}
          >
            <img
              src={require("../Assets/Images/ayush.jpg")}
              style={{ width: "50px", height: "50px", borderRadius: "25px" }}
              alt="not avlble"
            />
            <div style={{ marginLeft: "10px" }}>
              <span style={{ fontWeight: 600 }}>Ayush Mishra</span>
              <div
                style={{
                  marginTop: "2px",
                  display: "flex",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  padding: "5px 15px 5px 15px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "20px",
                }}
              >
                <BsFillEyeFill size={15} />
                <span style={{ fontSize: "14px" }}>Anyone</span>
              </div>
            </div>
          </div>
          <div>
            <textarea
              name="body"
              placeholder="What do you want to talk about"
              style={{
                width: "100%",
                height: "11rem",
                marginTop: "10px",
                borderWidth: 0,
              }}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </div>
        </div>
        <div style={{ padding: "0px 20px 30px 20px" }}>
          <div>
            <span>Add Hashtag</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "30px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "25%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <BsFillImageFill
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => uploadMedias.current.click()}
              />

              <input
                type={"file"}
                alt={"n/a"}
                
                style={{ display: "none" }}
                ref={uploadMedias}
                onChange={(e)=>setMedia(e.target.files[0])}
              />

              <BsFillCaretRightSquareFill size={20} />
              <BsFillFileEarmarkTextFill size={20} />
            </div>
            <div
              style={{
                width: "4.5rem",
                height: "1.5rem",
                borderWidth: "2px",
                borderColor: "gray",
                borderStyle: "solid",
                display: "flex",
                justifyContent: "center",
                borderRadius: "2rem",
                cursor:"pointer"
              }}
              onClick={submitPostHandler}
            >
              <span style={{}}>post</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
