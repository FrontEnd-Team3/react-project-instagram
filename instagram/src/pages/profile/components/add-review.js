import styled from "styled-components";

const AddReview = () => {
  const handleReviewList = () => {};
  return (
    <>
      <form onSubmit={handleReviewList}>
        <S.Comments style={{ height: "20px" }}></S.Comments>
        <div>
          <S.ReplyBox placeholder="댓글 달기..." name="reply" />
        </div>
      </form>
      <hr />
    </>
  );
};
export default AddReview;

const Comments = styled.ul`
  list-style: none;
  padding-left: 0px;
  overflow: hidden;
`;

const ReplyBox = styled.input`
  border: none;
  outline: none;
`;
const S = { Comments, ReplyBox };
