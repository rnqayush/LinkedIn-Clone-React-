import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const SinglePost = ({ item }) => {

  const { userId, userImage, userName, userAbout, userPostText, userPostMedia } = item

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        marginBottom: "20px",
        borderWidth: "2px",
        borderColor: "lightgray",
        borderStyle: "solid",
        borderRadius: "5px",
      }}
    >
      <PeopleReactionOnPostBox></PeopleReactionOnPostBox>
      <MainPostBox>
        <div style={{ padding: "15px 20px 10px 20px" }}>
          <ImageTitleConatiner>
            <img
              src={userImage}
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "27px",
                marginRight: "10px",
              }}
              alt="Not Available"
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                {userName}
              </span>

              <span style={{ fontSize: "12px" }}>{userAbout}</span>
            </div>
          </ImageTitleConatiner>
          <WrittenContentBox>
            <span style={{ fontSize: "14px" }}>
              {userPostText}
            </span>
          </WrittenContentBox>
        </div>
        <ImageVideoBox style={{ }}>
          {/* TODO: to enable multi image later.. and we will remove userPostMedia[0] to display only single image*/}
          {
            userPostMedia && userPostMedia.length != 0 ?
            <ImageSlider imageList={userPostMedia}  />:null
              // userPostMedia.map(item => <img
              //   src={typeof item == "object" ? URL.createObjectURL(item) : item}
              //   style={{ width: "100%", maxHeight: "33rem" }}
              //   alt="not avialable"
              // />) : null

          }

        </ImageVideoBox>
      </MainPostBox>
    </div>
  );
};
const ImageVideoBox = styled.div``;
const WrittenContentBox = styled.div``;
const MainPostBox = styled.div``;
const PeopleReactionOnPostBox = styled.div``;
const ImageTitleConatiner = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export default SinglePost;
