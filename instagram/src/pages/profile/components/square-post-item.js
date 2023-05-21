import styled from "styled-components";

const SquarePostItem = ({ postInfo }) => {
  return (
    <SquarePostContainer postInfo={postInfo}>
      <ShadowBox />
    </SquarePostContainer>
  );
};
export default SquarePostItem;
const SquarePostContainer = styled.div`
  background-image: ${({ postImage }) => `url(${postImage[0]})`};
  width: 330px;
  height: 330px;
  margin: 2px 0;
  position: relative;
`;
const ShadowBox = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 330px;
  height: 330px;
  position: absolute;
  top: 0;
  left: 0;
`;
