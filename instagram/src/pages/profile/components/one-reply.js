import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faEllipsis,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import userInfo from "../../../data/user-info.json";

// @TODO 공통된 컴포넌트 리팩토링

const OneReply = (props) => {
  const { post, parentWriter } = props;

  // // 이미지 슬라이드
  // const [imageIndex, setImageIndex] = useState(0);
  // const IMAGEURL = post.postImage[imageIndex];

  // const handlePrevMove = () => {
  //   if (!post.postImage[imageIndex - 1]) return;
  //   setImageIndex(imageIndex - 1);
  // };
  // const handleNextMove = () => {
  //   if (!post.postImage[imageIndex + 1]) return;
  //   setImageIndex(imageIndex + 1);
  // };

  // 모달창

  // 좋아요 개수 변화
  const [likes, setLikes] = useState(post.likesTotal);
  const [isClicked, setIsClicked] = useState(false);

  const handleLikes = () => {
    setIsClicked((prev) => !prev);
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };

  // 댓글 더보기
  const [isEveryComments, setIsEveryComments] = useState(false);
  const handleShowMoreComments = () => {
    setIsEveryComments((prev) => !prev);
  };

  // 댓글 추가
  // const [reviewList, setReviewList] = useState(post.reviews);
  // const [reviewCount, setReviewCount] = useState(reviewList.length);

  // const handleReviewList = (event) => {
  //   event.preventDefault();
  //   const newReviewContent = event.target.reply.value;
  //   const newReview = {
  //     reviewer: `${userInfo.Users[0].Username}`,
  //     reviewContent: newReviewContent,
  //     state: false,
  //   };

  //   const newReviewList = [...reviewList];
  //   newReviewList.push(newReview);
  //   setReviewCount(reviewCount + 1);

  //   setReviewList(newReviewList);
  // };

  /**
   *  댓글 다는 거 빼놓음
   *       
   */

  return (
    <S.PostWrapper>
      <div>
        <S.OneSentenceContainer>
          <S.BasicProfile src={post.profileImage} />
          <S.PostContent
            style={{
              overflow: "visible",
              whiteSpace: "normal",
            }}
          >
            <S.PostUser>{post.replier}</S.PostUser>
            <S.Mention>{parentWriter}</S.Mention>
            {post.replyContent}
          </S.PostContent>
        </S.OneSentenceContainer>
      </div>
    </S.PostWrapper>
  );
};

export default OneReply;

const PostWrapper = styled.div`
  margin: 20px 0;
`;

const OneSentenceContainer = styled.div`
  display: flex;
`;

const PostTop = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
`;

const PostUser = styled.span`
  font-weight: 700;
  margin-right: 10px;
`;

const Mention = styled.span`
  color: blue;
  cursor: pointer;
  ::before {
    content: "@";
  }
`;

const BasicProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const DetailBox = styled.span`
  margin-left: 175px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const PrevButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: lightgray;
  opacity: 50%;
`;

const NextButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: lightgray;
  opacity: 50%;
`;

const PostImage = styled.img`
  z-index: 0;
  width: 400px;
  height: 400px;
`;

const PostButton = styled.span`
  margin-right: 20px;
`;

const BookmarkButton = styled.span`
  margin-left: 280px;
`;

const PostContent = styled.div`
  /* width: 400px; */
  padding: 0px;
  text-overflow: ellipsis;
`;

const ShowMoreButton = styled.button`
  border: none;
  background-color: white;
  /* color: lightgray; */
  padding-left: 0px;
`;

const Comments = styled.ul`
  list-style: none;
  padding-left: 0px;
  overflow: hidden;
`;

const ReplyBox = styled.input`
  border: none;
  outline: none;
`;

const S = {
  PostWrapper,
  OneSentenceContainer,
  PostTop,
  PostUser,
  Mention,
  BasicProfile,
  DetailBox,
  ImageContainer,
  PrevButton,
  NextButton,
  PostImage,
  PostButton,
  BookmarkButton,
  PostContent,
  ShowMoreButton,
  Comments,
  ReplyBox,
};
