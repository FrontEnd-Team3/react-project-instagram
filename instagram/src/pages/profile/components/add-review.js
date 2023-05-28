import styled from "styled-components";
import { useLoginAndUserStore } from "../../../context/login-and-user-context";
import { useCurrentPost } from "../context/current-post";
import { ADD_REVIEW, useUserPosts } from "../context/user-posts";

const AddReview = () => {
  const [currPost, currPostDispatch] = useCurrentPost();
  const [userPosts, userPostsDispatch] = useUserPosts();
  const [loginAndUser, loginAndUserDispatch] = useLoginAndUserStore();
  const currUser = loginAndUser.currUser;

  const handleReviewList = (e) => {
    e.preventDefault();
    const payload = {
      index: currPost,
      reviewer: currUser.id,
      content: e.target.content.value,
    };
    userPostsDispatch(ADD_REVIEW(payload));
    e.target.content.value = null;
  };
  return (
    <div>
      <S.ReviewForm onSubmit={handleReviewList}>
        <S.ReviewBox name="content" placeholder="댓글 달기..." />
        <S.PostButton>게시</S.PostButton>
      </S.ReviewForm>
      <hr />
    </div>
  );
};
export default AddReview;

const ReviewForm = styled.form`
  display: flex;
  width: 100%;
`;

const Comments = styled.ul`
  list-style: none;
  padding-left: 0px;
  overflow: hidden;
`;

const ReviewBox = styled.input`
  display: block;
  border: none;
  outline: none;
  width: 100%;
`;

const PostButton = styled.button`
  display: block;
  background-color: transparent;
  color: blue;
  border: none;
  width: 100px;
`;
const S = { ReviewForm, Comments, ReviewBox, PostButton };
