import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faEyeSlash,
  faCircleUser,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { CLOSE_POST, useCurrentPost } from "../context/current-post";
import OriginalPost from "./original-post";
import OneReview from "./one-review";

const UserPostModal = () => {
  // 이거 고치기
  const [currPost, currPostDispatch] = useCurrentPost();
  if (Object.keys(currPost).length !== 0) {
    return (
      <>
        <S.Wrapper onClick={() => currPostDispatch(CLOSE_POST())}></S.Wrapper>
        <S.ModalContainer>
          <S.Picture imgSrc={currPost.postImage[0]} />
          <div>
            <OriginalPost post={currPost} />
            {currPost.reviews.map((review) => (
              <OneReview post={review} />
            ))}
          </div>
        </S.ModalContainer>
      </>
    );
  }
};

export default UserPostModal;

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContainer = styled.div`
  z-index: 1001;
  height: 550px;
  min-width: 1000px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 40px;
  padding-top: 5%;
`;

const Picture = styled.div`
  min-height: 550px;
  min-width: 600px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
`;
const TextContainer = styled.div``;
const ReplyContainer = styled.div``;

const S = {
  Wrapper,
  ModalContainer,
  ModalContent,
  Picture,
  TextContainer,
  ReplyContainer,
};
