import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = ({ setLoginState, userInfo }) => {
  const navigate = useNavigate();
  console.log(userInfo);

  const [firstInputValue, setFirstInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === "firstInput") {
      setFirstInputValue(event.target.value);
      console.log(firstInputValue);
    }
    if (event.target.name === "passwordInput") {
      setPasswordInputValue(event.target.value);
      console.log(passwordInputValue);
    }
  };
  //input값 state에 담기

  const handleLogin = () => {
    const CorrectUserId = userInfo.find((user) => user.id === firstInputValue);
    const CorrectUserNumber = userInfo.find(
      (user) => user.number === firstInputValue
    );
    const CorrectUserEmail = userInfo.find(
      (user) => user.email === firstInputValue
    );
    const CorrectUserPassword = userInfo.find(
      (user) => user.password === passwordInputValue
    );

    if (
      (CorrectUserId || CorrectUserNumber || CorrectUserEmail) &&
      CorrectUserPassword
    ) {
      setLoginState(true);
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };

  return (
    <Main>
      <MainBox>
        <img src="img/loginPageImg1.png" />
        <LoginBox>
          <LoginBoxSection1>
            <img src="img/instaLogo.jpg" />
            <input
              name="firstInput"
              onChange={handleChange}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              name="passwordInput"
              type="password"
              onChange={handleChange}
              placeholder="비밀번호"
            />
            <button onClick={handleLogin} type="button">
              로그인
            </button>
            <p>또는</p>
            <p>Facebook으로 로그인</p>
            <p>비밀번호를 잊어셨나요?</p>
          </LoginBoxSection1>
          <LoginBoxSection2>
            <p>계정이 없으신가요? </p>
            <SignupP
              onClick={() => {
                navigate("/emailsignup");
              }}
            >
              가입하기
            </SignupP>
          </LoginBoxSection2>
          <LoginBoxSection3>
            <p>앱을 다운로드하세요.</p>
            <div>
              <img src="img/loginPageImg3.png" />
              <img src="img/loginPageImg2.png" />
            </div>
          </LoginBoxSection3>
        </LoginBox>
      </MainBox>
    </Main>
  );
};
export default Login;

const Main = styled.div`
  margin: 0;
  padding: 0;
`;

const MainBox = styled.div`
  margin: 50px 0px 0px 410px;
  display: flex;
  flex-direction: row;
  img {
    width: 250px;
  }
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 348px;
  margin-left: 40px;

  img {
    width: 150px;
  }
`;

const LoginBoxSection1 = styled.div`
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 0.5px solid #c9c9c9;
  input {
    margin-top: 5px;
    width: 270px;
    height: 25px;
    border: 0.5px solid #c9c9c9;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    font-size: 12.5px;
    font-weight: 500;
    background: #f9f9f9;
  }
  button {
    margin-top: 10px;
    width: 285px;
    height: 30px;
    border: 0.5px solid #c9c9c9;
    background: #68b5fa;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const LoginBoxSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 0.5px solid #c9c9c9;
  margin-top: 10px;
  p {
    font-size: 14px;
    margin-right: 5px;
    font-weight: bold;
  }
`;

const SignupP = styled.p`
  color: #68b5fa;
  cursor: pointer;
`;

const LoginBoxSection3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
