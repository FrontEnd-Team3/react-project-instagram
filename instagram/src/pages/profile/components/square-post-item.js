import styled from "styled-components";
import { SET_POST, useCurrentPost } from "../context/current-post";

const SquarePostItem = ({ postInfo }) => {
  const [currPost, currPostDispatch] = useCurrentPost();
  console.log(postInfo);
  return (
    <SquarePostContainer postInfo={postInfo}>
      <ShadowBox onClick={() => currPostDispatch(SET_POST(postInfo))}>
        {postInfo.likesTotal} {postInfo.reviews.length}
      </ShadowBox>
    </SquarePostContainer>
  );
};
export default SquarePostItem;
const SquarePostContainer = styled.div`
  background-image: ${({ postInfo }) => `url(${postInfo.postImage[0]})`};
  background-size: contain;
  width: 330px;
  height: 330px;
  margin: 2px 0;
  position: relative;
`;
const ShadowBox = styled.div`
  background-color: black;
  color: white;
  width: 330px;
  height: 330px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.5;
  }
`;
