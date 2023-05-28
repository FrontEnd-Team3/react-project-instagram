import { createContext, useContext, useReducer } from "react";
import { createAction } from "../../../utils/createAction";

export const useCurrentPost = () => useContext(CurrentPost);

const CurrentPost = createContext();

export const SET_POST = createAction("SET_POST");
export const CLOSE_POST = createAction("CLOSE_POST");

const currentPostReducer = (state, action) => {
  switch (action.type) {
    case "SET_POST":
      return action.payload;
    case "CLOSE_POST":
      return -1;
    default:
      return state;
  }
};

// 글의 id 받기
const CurrentPostProvider = ({ children }) => {
  const [currPost, currPostDispatch] = useReducer(currentPostReducer, -1);
  return (
    <CurrentPost.Provider value={[currPost, currPostDispatch]}>
      {children}
    </CurrentPost.Provider>
  );
};

export default CurrentPostProvider;
