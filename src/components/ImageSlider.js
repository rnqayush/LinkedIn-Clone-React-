import { useRef, useState } from "react";
import styled from "styled-components";

const ImageSlider = ({ imageList }) => {
  console.log(imageList);
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          width: "100%",
          maxHeight: "33rem",
          height: "33rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "wheat",
        }}
      >
        <SingleImage
          src={
            typeof imageList[count] == "object"
              ? URL.createObjectURL(imageList[count])
              : imageList[count]
          }
          style={{ maxWidth: "100%", maxHeight: "100%" }} // set maxWidth to avoid every image to cover
          alt="not avialable"
        />
      </div>
      {imageList.length - 1 != count ? (
        <div onClick={() => setCount(count + 1)}>Right Arrow</div>
      ) : null}
      {count != 0 ? (
        <div onClick={() => setCount(count - 1)}>Left Arrow</div>
      ) : null}
    </>
  );
};

const SingleImage = styled.img``;

export default ImageSlider;
