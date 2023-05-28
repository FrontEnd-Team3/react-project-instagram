import { useState } from "react";
import styled from "styled-components";
import { useLoginAndUserStore } from "../../context/login-and-user-context";
import SquarePostItem from "./components/square-post-item";
import UserPostModal from "./components/user-post-modal";
import CurrentPostProvider from "./context/current-post";
import { useUserPosts } from "./context/user-posts";
/**
 *
 * @TODO S 객체 만들기, 파일 나누기
 */
const Profile = () => {
  const [loginAndUser, loginAndUserDispatch] = useLoginAndUserStore();
  const [navState, setNavState] = useState(0);
  const currUser = loginAndUser.currUser;
  const [userPosts, userPostsDispatch] = useUserPosts();
  console.log(
    userPosts.map((postInfo, index) => (
      <SquarePostItem postInfo={postInfo} index={index}></SquarePostItem>
    ))
  );
  if (currUser === null || Object.keys(currUser).length === 0)
    return <p>데이터가 잘못되었습니다.</p>;

  return (
    <CurrentPostProvider>
      <UserPostModal />
      <ProfileMain>
        <ProfileContainer>
          <div>
            <ProfileImg src="img/default-profile.jpg" alt="" width="150px" />
          </div>
          <InfoContainer>
            <h2>{currUser.id}</h2>
            <Numbers>
              <div>
                게시물 <strong>{currUser.posts}</strong>
              </div>
              <div>
                팔로워 <strong>{currUser.follow}</strong>
              </div>
              <div>
                팔로우 <strong>{currUser.following}</strong>
              </div>
            </Numbers>
            <h4>{currUser.name}</h4>
          </InfoContainer>
        </ProfileContainer>
        <PostsNavContainer>
          <div
            className={navState === 0 ? "selected" : ""}
            onClick={() => setNavState(0)}
          >
            게시물
          </div>
          <div
            className={navState === 1 ? "selected" : ""}
            onClick={() => setNavState(1)}
          >
            릴스
          </div>
          <div
            className={navState === 2 ? "selected" : ""}
            onClick={() => setNavState(2)}
          >
            태그됨
          </div>
        </PostsNavContainer>
        <ProfilePostsContainer>
          {userPosts.map((postInfo, index) => (
            <SquarePostItem postInfo={postInfo} index={index}></SquarePostItem>
          ))}
        </ProfilePostsContainer>
      </ProfileMain>
    </CurrentPostProvider>
  );
};
export default Profile;

const ProfileMain = styled.main`
  width: 1000px;
  margin: 0 auto;
`;
const ProfileContainer = styled.div`
  display: flex;
  margin: 30px 70px;
`;
const InfoContainer = styled.div`
  margin-left: 70px;
`;
const ProfileImg = styled.img`
  margin: 0 30px;
`;
const PostsNavContainer = styled.div`
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  div {
    margin: 0 50px;
    padding: 10px 0;
    cursor: pointer;
  }
  div.selected {
    border-top: 1px solid black;
  }
`;
const Numbers = styled.div`
  display: flex;
  div {
    padding-right: 20px;
  }
`;
const ProfilePostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const PostImg = styled.img`
  width: 330px;
  height: 330px;
  margin: 2px 0;
`;
