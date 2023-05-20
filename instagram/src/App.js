import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import Login from "./pages/main/components/login";
import Main from "./pages/main/index";
import Signup from "./pages/main/components/signup";
import { useState } from "react";
import Profile from "./pages/profile/profile";

function App() {
  const userInfos = require("./data/user-login-info.json");
  const [userInfo, setUserInfo] = useState(userInfos.UserInfos);
  //JSON데이터 가져와서 useInfo state에 저장

  const [loginState, setLoginState] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loginState ? (
              <Layout username={loginState.username} />
            ) : (
              <Login setLoginState={setLoginState} userInfo={userInfo} />
            )
          }
        >
          <Route index element={<Main />}></Route>
          <Route
            path=":username"
            element={<Profile profileInfo={loginState} />}
          ></Route>
        </Route>
        <Route
          path="/emailsignup"
          element={<Signup userInfo={userInfo} setUserInfo={setUserInfo} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
