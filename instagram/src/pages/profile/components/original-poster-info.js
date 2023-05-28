import styled from "styled-components";

const OriginalPosterInfo = ({ post }) => {
  return (
    <S.PostWrapper>
      <S.PostTop>
        <S.BasicProfile src={post.profileImage} />
        <div>
          <S.PostUser>{post.user}</S.PostUser>
        </div>
      </S.PostTop>
    </S.PostWrapper>
  );
};

export default OriginalPosterInfo;

const PostWrapper = styled.div`
  margin: 20px 0;
  /* position: absolute;
  top: 0;
  left: 0; */
`;

const PostTop = styled.div`
  display: flex;
  align-items: center;
`;

const BasicProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostUser = styled.span`
  font-weight: 700;
  margin-right: 10px;
`;

const S = { PostWrapper, PostTop, BasicProfile, PostUser };
