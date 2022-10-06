import { useEffect, useState } from "react";
import { BsFillCalendarEventFill, BsFillFileRuledFill, BsFillImageFill, BsFillPlayBtnFill, BsReceipt } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "../components/Modal";
import SinglePost from "../components/SinglePost";
import { Feed_ListAPi_Data } from "../Data/data";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [photo, setPhoto] = useState("");
  const [allfeedList, setAllFeedList] = useState([]);
  const postData = useSelector((state) => state.createPost);
  const { loading, createdPostData, error } = postData;


  useEffect(() => {
    getAllFeedPostAPiCall();
  }, []);

  useEffect(() => {
   console.log(createdPostData);
    if (createdPostData) {
      const createdPost = {
        userId: createdPostData.userId,
        userImage: createdPostData.userImage,
        userName: createdPostData.userName,
        userAbout: createdPostData.userAbout,
        userPostText: createdPostData.userPostText,
        userPostMedia: createdPostData.userPostMedia
      };
      
      setAllFeedList([createdPost,...allfeedList])
    }
  }, [loading]);

  const getAllFeedPostAPiCall = () => {
    // api call to get all post
    setAllFeedList(Feed_ListAPi_Data);
  };

  const postClickHandler = (e) => {
    setIsVisible(false);
    //
  };


  return (
    <HomeContainer>
      <SectionContainer>
        <SectionLeft>
          <RecentActivityBox>
            {/* {loading?<span style={{fontSize:"20px"}}>loading</span>:null}
            {photo ?<img src={photo} alt="na" style={{width:"5rem",height:"5rem"}} />:null}        */}
          </RecentActivityBox>
        </SectionLeft>
        <SectionMiddle>
          <Modal
            isVisible={isVisible}
            crossPress={() => setIsVisible(false)}
            postClicked={postClickHandler}
          />
          <FeedBox>
            <WritePostBox>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <img
                  src={require("../Assets/Images/ayush.jpg")}
                  style={{
                    height: "54px",
                    width: "54px",
                    borderRadius: "27px",
                  }}
                  alt="Not Available"
                />

                <div
                  style={{ width: "80%" }}
                  onClick={(e) => setIsVisible(true)}
                >
                  <input
                    disabled={true}
                    placeholder="start a post"
                    style={{
                      paddingLeft: "20px",
                      width: "100%",
                      borderRadius: "2rem",
                      borderWidth: "1px",
                      marginLeft: "10px",
                      height: "3rem",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <BsFillImageFill
                  size={20}
                  style={{marginRight:"1rem"}}
              
                  />

                  <span>Photo</span>
                </div>
                <div style={{ display: "flex" }}>
                  <BsFillPlayBtnFill
                   size={20}
                   style={{marginRight:"1rem"}}
                  />

                  <span>Video</span>
                </div>
                <div style={{ display: "flex" }}>
                  <BsFillCalendarEventFill
                  size={20}
                  style={{marginRight:"1rem"}}
                  />

                  <span>Audio Event</span>
                </div>
                <div style={{ display: "flex",alignItems:"center" }}>
                  <BsFillFileRuledFill
                  size={20}
                  style={{marginRight:"1rem"}}
                  />

                  <span>Write Article</span>
                </div>
              </div>
            </WritePostBox>
            <div
              style={{
                width: "90%",
                borderStyle: "solid",
                borderColor: "gray",
                borderWidth: "0.1px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            ></div>
            <PostsLists>
              {allfeedList.map((item) => (
                <SinglePost key={item.userId} item={item} />
              ))}
            </PostsLists>
          </FeedBox>
        </SectionMiddle>
        <SectionRight>
          <NewsBox>fsf</NewsBox>
        </SectionRight>
      </SectionContainer>
    </HomeContainer>
  );
};

const WritePostBox = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 5px;
`;
const PostsLists = styled.div``;
const RecentActivityBox = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
`;
const FeedBox = styled.div`
  width: 100%;
`;
const NewsBox = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
`;

const HomeContainer = styled.div``;
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SectionLeft = styled.div`
  width: 15%;

  word-wrap: break-word;
  overflow-wrap: break-word;
`;
const SectionMiddle = styled.div`
  width: 50%;
  margin-left: 25px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
const SectionRight = styled.div`
  width: 25%;
`;

export default Home;
