import styled from "styled-components";
import SideNav from "../../components/side-nav/side-nav";

import { useState } from "react";

import Item from "./item";

const SerachProfile = () => {
  const [itemlist, setItemlist] = useState([
    {
      heart: "1234",
      comment: "1234",
    },
    {
      heart: "1234",
      comment: "1234",
    },
    {
      heart: "1234",
      comment: "1234",
    },
    {
      heart: "1234",
      comment: "1234",
    },
  ]);
  const [state, setState] = useState(true);

  const onClick = () => {
    setState(!state);
    if (state === false) {
      setState(true);
    }
  };
  return (
    <>
      <Container>
        <SideNav />
        <Wrapper>
          <TopMain>
            <MainImg src="img/1.jpg"></MainImg>
            <TextWrapper>
              <li>#고양이짤저장소</li>
              <li>게시물</li>
              <li>15.4만</li>
              {state && <Follow onClick={onClick}>팔로우</Follow>}
              {!state && <Follow2 onClick={onClick}>팔로잉</Follow2>}
            </TextWrapper>
          </TopMain>
          <div>
            <Popular>인기 게시물</Popular>
            <Grid>
              <Img src="img/6.jpg"></Img>
              <Img src="img/cat3.jpg"></Img>
              <Img src="img/cat4.jpg"></Img>
              <Img src="img/cat5.jpg"></Img>
              <Img src="img/4.jpg"></Img>
              <Img src="img/rabbit1.jpg"></Img>
              <Img src="img/cat4.jpg"></Img>
              <Img src="img/dog2.jpg"></Img>
              <Img src="img/8.jpg"></Img>
              <Img src="img/cat4.jpg"></Img>
              <Img src="img/1.jpg"></Img>
              <Img src="img/dog2.jpg"></Img>
            </Grid>
          </div>

          <Item itemlist={itemlist} setItemlist={setItemlist} />
        </Wrapper>
      </Container>
    </>
  );
};

export default SerachProfile;

const Popular = styled.div`
  position: relative;
  top: 40px;
  color: gray;
  font-size: 12px;
  font-weight: bold;
`;
const TextWrapper = styled.ul`
  list-style: none;
  position: relative;
  top: 10px;
  li:first-child {
    font-size: 27px;
  }
  li:nth-child(2) {
    font-size: 15px;
    position: relative;
    top: 5px;
  }
  li:nth-child(3) {
    font-size: 15px;
    font-weight: bold;
    position: relative;
    top: 6px;
  }
`;

const Follow = styled.button`
  width: 630px;
  height: 35px;
  position: relative;
  top: 30px;
  text-align: center;
  padding-top: 3px;
  background-color: #478fe0;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: #65a9f6;
  }
  border: none;
  font-weight: bold;
`;

const Follow2 = styled.button`
  width: 630px;
  height: 35px;
  position: relative;
  top: 30px;
  text-align: center;
  padding-top: 3px;
  background-color: #e6e6e6;
  border-radius: 10px;
  color: black;
  border: none;
  font-weight: bold;
`;

const MainImg = styled.img`
  position: relative;
  left: 5px;
  width: 150px;
  border-radius: 50%;
`;
const Img = styled.img`
  width: 272px;
  height: 272px;

  filter: brightness(0.8);
`;

const Container = styled.ul`
  margin-top: 20;
  padding: 0;
  display: flex;
  height: 1000px;
`;
const Wrapper = styled.div`
  position: relative;
  left: 180px;
  width: 50%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

const TopMain = styled.div`
  display: flex;
`;

const Grid = styled.div`
  position: relative;
  top: 50px;
  display: grid;
  grid-template-columns: 277px 277px 277px;
  grid-template-rows: 277px 277px 277px;
  height: 1000px;
`;
