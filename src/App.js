import React from "react";
import { useSelector } from "react-redux";
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

function App() {
  const loginInfo = useSelector((state) => state.loginInfo);
  const { isLoggedIn } = loginInfo;

  // Navigate is used to navigate to any route 
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
