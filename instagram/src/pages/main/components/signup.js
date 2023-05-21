import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  useLoginAndUserStore,
  USER_ADD,
} from "../../../context/login-and-user-context";
const initialUserList = require("../../../data/user-login-info.json").UserInfos;

const Signup = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const [newInfoNumber, setNewInfoNumber] = useState("");
  const [newInfoEmail, setNewInfoEmail] = useState("");
  const [newInfoName, setNewInfoName] = useState("");
  const [newInfoId, setNewInfoId] = useState("");
  const [newInfoPassword, setNewInfoPassword] = useState("");

  const [loginAndUser, loginAndUserDispatch] = useLoginAndUserStore();

  const handleNewInfo = (event) => {
    if (event.target.name === "number") {
      setNewInfoNumber(event.target.value);
    }
    if (event.target.name === "email") {
      setNewInfoEmail(event.target.value);
    }
    if (event.target.name === "name") {
      setNewInfoName(event.target.value);
    }
    if (event.target.name === "id") {
      setNewInfoId(event.target.value);
    }
    if (event.target.name === "password") {
      setNewInfoPassword(event.target.value);
    }
  };

  const handleNewUser = () => {
    // 전화번호 형식을 검사
    const numberRegex = /^010-\d{4}$/;
    if (!numberRegex.test(newInfoNumber)) {
      return alert("010-**** 전화번호 형식을 지켜주세요");
    }

    // 이메일 형식을 검사
    const emailRegex = /^[a-z0-9]+@[a-z]+\.com$/;
    if (!emailRegex.test(newInfoEmail)) {
      return alert("aaa@aaa.com 이메일 형식을 지켜주세요");
    }

    // ID 형식을 검사
    const idRegex = /^[a-zA-Z]+$/;
    if (!idRegex.test(newInfoId)) {
      return alert("ID는 영문만 입력해주세요");
    }
    if (newInfoId.length < 3) {
      return alert("ID는 3자 이상 입력해주세요");
    }

    // 비밀번호 형식을 검사
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    if (!passwordRegex.test(newInfoPassword)) {
      return alert("비밀번호는 영문 + 숫자로 작성해주세요");
    }
    if (newInfoPassword.length < 4) {
      return alert("비밀번호는 4자 이상 입력해주세요");
    }

    // 이름 형식을 검사
    const nameRegex = /^[가-힣]+$/;
    if (!nameRegex.test(newInfoName)) {
      return alert("이름을 제대로 입력해주세요 ^^;");
    }
    if (newInfoName.length < 2) {
      return alert("이름은 2자 이상 입력해주세요");
    }

    if (
      newInfoNumber === "" ||
      newInfoEmail === "" ||
      newInfoName === "" ||
      newInfoId === "" ||
      newInfoPassword === ""
    ) {
      return;
    } else {
      const newUser = {
        name: newInfoName,
        id: newInfoId,
        number: newInfoNumber,
        email: newInfoEmail,
        password: newInfoPassword,
      };
      loginAndUserDispatch(USER_ADD(newUser));
      console.log(loginAndUser.userList);
      alert("환영합니다. 다시 메인 페이지로 돌아가서 완료해 주세요.");
    }
  };
  // 길어지면 redirect
  useEffect(() => {
    if (loginAndUser.userList.length > initialUserList.length) {
      navigate("/");
    }
  }, [loginAndUser.userList]);
  return (
    <Main>
      <MainBox>
        <LoginBox>
          <LoginBoxSection1>
            <img src="img/instaLogo.jpg" />
            <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            <button type="button">Facebook으로 로그인</button>
            <p>또는</p>
            <input
              onChange={handleNewInfo}
              name="number"
              placeholder="휴대폰 번호"
            />
            <input
              onChange={handleNewInfo}
              name="email"
              placeholder="이메일 주소"
            />
            <input onChange={handleNewInfo} name="name" placeholder="성명" />
            <input
              onChange={handleNewInfo}
              name="id"
              placeholder="사용자 이름"
            />
            <input
              onChange={handleNewInfo}
              name="password"
              placeholder="비밀번호"
            />
            <InfoP>
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
              업로드했을 수도 있습니다. 더 알아보기
            </InfoP>
            <button onClick={handleNewUser} type="button">
              가입
            </button>
          </LoginBoxSection1>
          <LoginBoxSection2>
            <p>계정이 있으신가요? </p>
            <SignupP
              onClick={() => {
                navigate("/");
              }}
            >
              로그인
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
export default Signup;

const Main = styled.div`
  margin: 0;
  padding: 0;
`;

const MainBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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

const InfoP = styled.p`
  font-size: 10px;
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
