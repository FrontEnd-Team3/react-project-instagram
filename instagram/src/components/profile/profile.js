import { useParams } from "react-router-dom";
import userInfo from "../../data/user-info.json";

const Profile = () => {
  const username = useParams().username;
  const UserObjectTemp = userInfo.Users.filter(
    (user) => user.Username === username
  );
  if (UserObjectTemp.length === 0) return <p>찾으시는 유저가 없습니다.</p>;
  const UserObject = UserObjectTemp[0];
  return (
    <div>
      <p>{UserObject.Username}</p>
      <p>
        게시물 {UserObject.Posts} 팔로워 {UserObject.Follow} 게시물{" "}
        {UserObject.Following}
      </p>
      <p>{UserObject.Name}</p>
    </div>
  );
};
export default Profile;
