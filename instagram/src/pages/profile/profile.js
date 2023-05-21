import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import userInfo from "../../data/user-info.json";
/**
 *
 * @TODO S 객체 만들기
 */
const Profile = ({ profileInfo }) => {
  const [navState, setNavState] = useState(0);
  const username = useParams().username;
  const UserObjectTemp = userInfo.Users.filter(
    (user) => user.Username === username
  );
  if (UserObjectTemp.length === 0) return <p>데이터가 잘못되었습니다.</p>;
  const UserObject = UserObjectTemp[0];
  return (
    <ProfileMain>
      <ProfileContainer>
        <div>
          <ProfileImg src="img/default-profile.jpg" alt="" width="150px" />
        </div>
        <InfoContainer>
          <h2>{UserObject.Username}</h2>
          <Numbers>
            <div>
              게시물 <strong>{UserObject.Posts}</strong>
            </div>
            <div>
              팔로워 <strong>{UserObject.Follow}</strong>
            </div>
            <div>
              팔로우 <strong>{UserObject.Following}</strong>
            </div>
          </Numbers>
          <h4>{UserObject.Name}</h4>
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
        <PostImg src="img/post-placeholder.jpg" alt="" />
        <PostImg src="img/post-placeholder.jpg" alt="" />
        <PostImg src="img/post-placeholder.jpg" alt="" />
        <PostImg src="img/post-placeholder.jpg" alt="" />
        <PostImg src="img/post-placeholder.jpg" alt="" />
        <PostImg src="img/post-placeholder.jpg" alt="" />
        <PostImg src="img/post-placeholder.jpg" alt="" />
      </ProfilePostsContainer>
    </ProfileMain>
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
