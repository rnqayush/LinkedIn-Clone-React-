import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Link,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import { TokenValidCheck } from "./redux/actions/loginActions";

function App() {
  const loginInfo = useSelector((state) => state.loginInfo);
  const { isLoggedIn } = loginInfo;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TokenValidCheck());
  }, []);
  
  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/home" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="notification" element={<Notifications />} />
          </Route>
          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
