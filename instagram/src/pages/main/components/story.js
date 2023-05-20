import styled from "styled-components";

const Story = () => {
  return (
    <>
      <ImageBox>
        <img src="img/moon1.jpeg" />
        <img src="img/moon2.jpeg" />
        <img src="img/moon3.jpeg" />
        <img src="img/moon4.jpeg" />
        <img src="img/moon5.jpeg" />
        <img src="img/moon6.jpeg" />
        <img src="img/moon7.jpeg" />
        <img src="img/moon8.jpeg" />
      </ImageBox>
    </>
  );
};
export default Story;

const ImageBox = styled.div`
  display: flex;

  align-items: center;
  flex-direction: row;

  img {
    width: 60px;
    height: 60px;
    border-radius: 70%;
    overflow: hidden;
  }
`;
