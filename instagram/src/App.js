import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import Login from "./pages/main/components/login";
import Main from "./pages/main/index";
import Signup from "./pages/main/components/signup";
import { useState } from "react";
import Profile from "./pages/profile/profile";
import LoginAndUserStoreProvider from "./context/login-and-user-context";
import SerachProfile from "./pages/searchprofile/searchprofile";

function App() {
  const [loginState, setLoginState] = useState(null);
  return (
    <LoginAndUserStoreProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              loginState ? <Layout /> : <Login setLoginState={setLoginState} />
            }
          >
            <Route index element={<Main />}></Route>
            <Route path="/:username" element={<Profile />}></Route>
          </Route>
          <Route path="/emailsignup" element={<Signup />} />
          <Route path="/searchprofile" element={<SerachProfile />} />
        </Routes>
      </Router>
    </LoginAndUserStoreProvider>
  );
}

export default App;
