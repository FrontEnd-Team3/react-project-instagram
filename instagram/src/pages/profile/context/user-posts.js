import { createContext, useContext, useReducer } from "react";
import { createAction } from "../../../utils/createAction";
import userPostsInfo from "../../../data/user-post-info.json";

export const useUserPosts = () => useContext(UserPosts);

const UserPosts = createContext();

export const ADD_REVIEW = createAction("ADD_REVIEW");
export const REMOVE_REVIEW = createAction("REMOVE_REVIEW");

const userPostsReducer = (state, action) => {

  switch (action.type) {
    case "ADD_REVIEW":
      /** 
       * 컴포넌트에서 값을 가져와서 index, 그리고 프로필 정보를 가져온다.
       * payload: 글 index, 내용
       * {
          "reviewer": action.payload.reviewer,
          "profileImage": "img/user/user_1.jpg",
          "reviewDate": "2023.05.29",
          "reviewLocation": "Seoul, Korea",
          "likesTotal": 0,
          "reviewContent": action.payload.content,
          "state": true,
          "replies": []
        }
      */
      const _state = [...state];
      const reviews = _state[action.payload.index].reviews;
      _state[action.payload.index].reviews = [
        ...reviews,
        {
          id: reviews[reviews.length - 1].id + 1,
          reviewer: action.payload.reviewer,
          profileImage: "img/user/user_1.jpg",
          reviewDate: "2023.05.29",
          reviewLocation: "Seoul, Korea",
          likesTotal: 0,
          reviewContent: action.payload.content,
          state: true,
          replies: [],
        },
      ];
      return _state;
    case "REMOVE_REVIEW":
      _state[action.payload.index].reviews = reviews.filter(
        (review) => review.id !== action.payload
      );
      return -1;
    default:
      return state;
  }
};

// 글의 id 받기
const UserPostsProvider = ({ children }) => {
  const [userPosts, userPostsDispatch] = useReducer(
    userPostsReducer,
    userPostsInfo.posts
  );
  return (
    <UserPosts.Provider value={[userPosts, userPostsDispatch]}>
      {children}
    </UserPosts.Provider>
  );
};

export default UserPostsProvider;
