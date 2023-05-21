import { createContext, useContext, useReducer } from "react";
import { createAction } from "../utils/createAction";

const initialUserList = require("../data/user-login-info.json").UserInfos;

// 복습. 프로바이더란?
// 프로바이더에 값을 제공하면, 그 값을 useContext(MyContext)를 통해 쓸 수 있음.
// 프로바이더에 값을 제공한다는 것은
// <CounterContext.Provider value={{ count, increment, decrement }}>
//    {props.children}
// </CounterContext.Provider>
// 이런 식으로 value에 값을 넣어준다는 것을 의미한다.
// 프로바이더에서 값을 쓰는 방법은, 자식 컴포넌트에서 useContext(콘텍스트 이름) 이런 식으로 하면 된다.

/**
 * 설명(구현 방식을 알고, 복습하고 싶으신 분들은 여기부터)
 *
 * loginAndUserStore는 다음과 같은 형식으로 되어 있습니다.
 *
 * state는 객체이며, 다음과 같은 정보를 담고 있다.
 *
 * 1. state.userList: 모든 사용자들의 정보를 담고 있는 배열. 초기값은 src/data/user-login-info.js에 담겨 있다.
 * 2. state.currUser: 현재 로그인된 사용자의 정보를 담고 있는 객체. 로그아웃 시에는 null이며, 로그인 시에는 state.userList의 객체 중 하나로 설정된다.
 * 로그인 실패 시에는 null이 아닌 빈 객체 {}가 담긴다.(로그아웃된 상태와 로그인 실패된 상태를 구별하기 위함이다.)
 *
 * 사용법(개발한 방법에는 관심 없으신 분들이나, 사용 방법을 빨리 알고 싶으신 분들은 여기부터)
 *
 * USER_ADD, USER_REMOVE, LOGIN_ATTEMPT, LOGOUT이라는 4가지 기능이 있다.
 *
 * 이것을 쓰는 방법은 다음과 같다.
 *
 * 1. 사용하고자 하는 컴포넌트에서 const [loginAndUser, loginAndUserDispatch] = useLoginAndUserStore();로 받아온다.
 * 그러면 loginAndUser에는 state가, loginAndUserDispatch에는 dispatch 함수(state를 변경할 수 있는 함수)가 주어진다.
 *
 * 2. 각 기능의 사용 방법
 *
 * loginAndUserDispatch(USER_ADD({name: "박희수", id: "park", number: "0103333", email: "park@park.com", password: "park1234"}))
 *
 * 해딩 회원 정보를 가진 회원을 추가한다.
 *
 * loginAndUserDispatch(USER_REMOVE("oh"))
 *
 * 아직은 회원 탈퇴를 구현 안 한 것 같지만... 일단 만들었습니다
 * oh라는 id를 가진 회원을 제거한다.
 *
 * TODO: 만약 회원 탈퇴를 구현한다면 현재 로그인된 사용자를 제거하도록 하면 될 것 같다.
 *
 * loginAndUserDispatch(LOGIN_ATTEMPT({firstInputValue: "oh", passwordInputValue: "oh1234"}))
 *
 * 아이디/전화번호/이메일 중 하나가 oh이고, 비밀번호가 oh1234인 사용자가 있는지 확인 후,
 * 있으면 현재 사용자 정보를 state에 담는다.
 *
 * loginAndUserDispatch(LOGOUT())
 *
 * 현재 사용자 정보를 state에서 지운다.
 */
const REDUCER_INITIAL_VALUE = { userList: initialUserList, currUser: null };

export const useLoginAndUserStore = () => useContext(LoginAndUserStore);

const LoginAndUserStore = createContext();

// 이름을 이렇게 붙인 이유: 앞 단어를 보면 user와 관련된 건지 login과 관련된 건지 알 수 있다.
export const USER_ADD = createAction("USER_ADD");
export const USER_REMOVE = createAction("USER_REMOVE");
export const LOGIN_ATTEMPT = createAction("LOGIN_ATTEMPT");
export const LOGOUT = createAction("LOGOUT");

const loginAndUserReducer = (state, action) => {
  switch (action.type) {
    case "USER_ADD":
      return {
        ...state,
        userList: [
          ...state.userList,
          { ...action.payload, posts: 0, follow: 0, following: 0 },
        ],
      };
    case "USER_REMOVE":
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };
    case "LOGIN_ATTEMPT":
      const userList = state.userList;
      const CorrectUserId = userList.findIndex(
        (user) => user.id === action.payload.firstInputValue
      );
      const CorrectUserNumber = userList.findIndex(
        (user) => user.number === action.payload.firstInputValue
      );
      const CorrectUserEmail = userList.findIndex(
        (user) => user.email === action.payload.firstInputValue
      );
      const CorrectUserPassword = userList.findIndex(
        (user) => user.password === action.payload.passwordInputValue
      );
      if (
        (CorrectUserId === CorrectUserPassword ||
          CorrectUserNumber === CorrectUserPassword ||
          CorrectUserEmail === CorrectUserPassword) &&
        CorrectUserPassword !== -1
      ) {
        return { ...state, currUser: userList[CorrectUserPassword] };
      } else {
        return { ...state, currUser: null };
      }
    case "LOGOUT":
      return { ...state, currUser: null };
    default:
      return state;
  }
};

const LoginAndUserStoreProvider = ({ children }) => {
  const [loginAndUser, loginAndUserDispatch] = useReducer(
    loginAndUserReducer,
    REDUCER_INITIAL_VALUE
  );
  return (
    <LoginAndUserStore.Provider value={[loginAndUser, loginAndUserDispatch]}>
      {children}
    </LoginAndUserStore.Provider>
  );
};

export default LoginAndUserStoreProvider;
