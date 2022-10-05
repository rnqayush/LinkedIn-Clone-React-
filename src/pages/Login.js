import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { login } from "../redux/actions/loginActions";


const Login = () => {
  
  const dispatch=useDispatch()

  return (
    <div style={{ padding: "20px 30px 10px 90px", height: "100vh" }}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <span
          style={{ fontSize: "30px", fontWeight: "bolder", color: "#0A66C2" }}
        >
          Linked
        </span>
        <img
          src={require("../Assets/Images/download.png")}
          alt="na"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "5%" }}
      >
        <span
          style={{ fontSize: "50px", fontWeight: "lighter", color: "#80420f" }}
        >
          Join the biggest{" "}
        </span>
        <span
          style={{ fontSize: "50px", fontWeight: "lighter", color: "#80420f" }}
        >
          professional community
        </span>
      </div>
      <form
        style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}
      >
        <input
          placeholder="Email"
          style={{ paddingLeft: "20px", width: "35%", height: "2.5rem" }}
        />
        <input
          type={"password"}
          required={true}
          placeholder="Password (8+ Characters)"
          style={{
            paddingLeft: "20px",
            width: "35%",
            height: "2.5rem",
            marginTop: "10px",
          }}
        />
        <span
          style={{
            width: "35%",
            fontSize: "14px",
            color: "gray",
            marginTop: "10px",
          }}
        >
          By clicking Agree & Join, you agree to the LinkedIn User Agreement,
          Privacy Policy, and Cookie Policy.
        </span>
        <Link onClick={()=>{dispatch(login())}} style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "37%",
              marginTop: "15px",
              height: "3.5rem",
              backgroundColor: "#0A66C2",
              borderRadius: "2.5rem",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
            }}
           
          >
            <span style={{ fontSize: "18px", color: "white" }}>
              Agree & Join
            </span>
          </div>
        </Link>
      </form>
      <Outlet />
    </div>
  );
};

export default Login;
