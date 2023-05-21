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
      <TextBox>
        <p>moon1</p>
        <p>moon2</p>
        <p>moon3</p>
        <p>moon4</p>
        <p>moon5</p>
        <p>moon6</p>
        <p>moon7</p>
        <p>moon8</p>
      </TextBox>
    </>
  );
};
export default Story;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  img {
    width: 55px;
    height: 55px;
    border-radius: 70%;
    overflow: hidden;
    margin-left: 20px;
    cursor: pointer;
  }
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 10px;
  margin-bottom: 40px;
  margin-right: 24px;
  p {
    margin-left: 41.5px;
    font-weight: 500;
  }
`;
