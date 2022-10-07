import { Outlet } from "react-router";
import styled from "styled-components";
import {
  BsChatRightDotsFill,
  BsFillBellFill,
  BsFillBriefcaseFill,
  BsHouseDoorFill,
  BsPeopleFill,
  BsSearch,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { login, signout } from "../redux/actions/loginActions";
import { Link } from "react-router-dom";
const Navbar = () => {

  const dispatch=useDispatch()
  

  return (
    <div>
      <NavBarContainer
        style={{ position: "fixed", width: "100%", boxSizing: "border-box" }}
      >
        <LeftItem>
          <LogoImage src={require("../Assets/Images/download.png")}></LogoImage>
          <TextInputBox>
            <BsSearch
              style={{
                position: "absolute",
                margin: "8px 8px 0px 8px",
              }}
              alt="na"
              size={16}
            />
            <TextInput placeholder="Search" style={{paddingLeft:"2rem"}} />
          </TextInputBox>
        </LeftItem>
        <RightItem>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsHouseDoorFill size={22} color={"#00000090"}/>

            <span style={{ fontSize: "12px" }}>Home</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsPeopleFill size={22} color={"#00000090"}/>

            <span style={{ fontSize: "12px" }}>Network</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsFillBriefcaseFill size={22} color={"#00000090"}/>

            <span style={{ fontSize: "12px" }}>Jobs</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsChatRightDotsFill size={22} color={"#00000090"}/>
            <Link to={"chat"} >
            <span style={{ fontSize: "12px" }}>Messaging</span>
            </Link>
            
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsFillBellFill size={22} color={"#00000090"}/>

            <span style={{ fontSize: "12px" }}>Notifications</span>
          </div>
          <Link to={"/"}>
          <div
            onClick={()=>{dispatch(signout())}}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={require("../Assets/Images/ayush.jpg")}
              alt="na"
              style={{ width: "28px", height: "28px", borderRadius: "14px" }}
            />
            <span style={{ fontSize: "12px" }}>Me</span>
          </div>
          </Link>
         
        </RightItem>
      </NavBarContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </div>
  );
};

export default Navbar;

const TextInput = styled.input`
  width: 20rem;
  height: 2rem;
  padding-left: 2rem;
  border-width: 0px;
  background-color: #ECF1F7;
  border-radius: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const TextInputBox = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavBarContainer = styled.div`
  padding: 10px 5rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 1px 1px 1px #80808030;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LeftItem = styled.div`
  display: flex;
  align-items: center;
`;
const RightItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;
const BodyContainer = styled.div`
  background-color: #534f4f30;
  padding: 5rem 5rem;
  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;
