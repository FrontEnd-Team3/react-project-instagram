// import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import SearchList from "./search-list";
import ConnectList from "./connect-list";

const Search = () => {
  const [showConnect, setShowConnect] = useState(false);

  const [searchList, setSearchList] = useState([
    {
      id: "Ddanghuni",
      name: "땅후니 * 팔로잉",
      url: "img/moon1.jpeg",
    },
    {
      id: "ilovebyungjae",
      name: "병재오빠 * 팔로잉",
      url: "img/byungjae.jpg",
    },
    {
      id: "tacoyakki",
      name: "주호민 * 팔로워 1479만명",
      url: "img/juhomin.jpg",
    },
    {
      id: "sangsu",
      name: "정상수 * 팔로잉",
      url: "img/sangsu.jpg",
    },
    {
      id: "suzky",
      name: "수지 * 팔로잉",
      url: "img/chim.jpg",
    },
  ]);

  const [connectList, setConnectList] = useState([
    {
      id: "#고양이짤",
      count: "게시물 1239",
      url: "img/cat1.jpg",
    },
    {
      id: "#고양이짤방",
      count: "게시물 678",
      url: "img/cat2.jpg",
    },
    {
      id: "#고양이짤저장소",
      count: "게시물 434",
      url: "img/cat3.jpg",
    },
    {
      id: "#고양이짤그림",
      count: "게시물 231",
      url: "img/cat4.jpg",
    },
    {
      id: "#강아지짤저장소",
      count: "게시물 1239",
      url: "img/dog1.jpg",
    },
    {
      id: "#고릴라짤저장소",
      count: "게시물 1239",
      url: "img/rilra1.jpg",
    },
    {
      id: "#강아지사랑해",
      count: "게시물 1239",
      url: "img/dog2.jpg",
    },
    {
      id: "#고양이짤만화",
      count: "게시물 123",
      url: "img/cat5.jpg",
    },
    {
      id: "#토끼짤저장소",
      count: "게시물 234",
      url: "img/rabbit1.jpg",
    },
    {
      id: "#고양이짤그림",
      count: "게시물 88",
      url: "img/cat6.jpg",
    },
    {
      id: "#고양이짤타투",
      count: "게시물 13",
      url: "img/cat7.jpg",
    },
    {
      id: "#고양이짤툰",
      count: "게시물 4",
      url: "img/cat8.jpg",
    },
  ]);

  const handlefindList = (e) => {
    e.preventDefault();
    const _connectList = connectList;
    const filterList = _connectList.filter(
      (todo) => todo.id === e.target.user.value
    );
    setConnectList(filterList);
  };

  const onChangeInput = (e) => {
    setShowConnect(true);
    if (e.target.value === "") {
      setShowConnect(false);
    }
  };

  const [allClean, setAllClean] = useState(true);
  const [moreClean, setMoreClean] = useState(false);

  const onCleanList = () => {
    setAllClean(false);
    setMoreClean(true)
  };
  const onCleanConnect = () => {
    setMoreClean(false);
  };
  return (
    <>
      <S.Form onSubmit={handlefindList}>
        <S.Title>검색</S.Title>
        <S.Input
          placeholder="검색"
          type="text"
          name="user"
          onChange={onChangeInput}
        ></S.Input>
        <Erase type="reset">x</Erase>
        <Hr />
        <S.List>
          <li>최근 검색 항목</li>
          {allClean && <li onClick={onCleanList}>모두 지우기</li>}
          {moreClean && <li onClick={onCleanConnect}>모두 지우기</li>}
        </S.List>
        <ul>
          {!showConnect && allClean && (
            <SearchList searchList={searchList} setSerachList={setSearchList} />
          )}
          {showConnect && moreClean && (
            <ConnectList
              connectList={connectList}
              setConnectList={setConnectList}
            />
          )}
        </ul>
      </S.Form>
    </>
  );
};

export default Search;

const Form = styled.form`
  /* border: 1px solid gray; */
  width: 350px;
  height: 800px;
  background-color: white;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-top: 20px;
  width: 300px;
  border: none;
  border-radius: 4px;
  color: gray;
  background-color: #eeeeee;
  padding: 8px;
`;

const Erase = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #d6d6d6;
  margin-left: -25px;
  color: #9e9e9e;
`;

const Hr = styled.hr`
  margin-top: 20px;
  position: relative;
  right: 16px;
  width: 315px;
  height: 0.8px;
  border: 0;
  background-color: #d1d1d1;
`;
const List = styled.ul`
  display: flex;
  /* border: 1px solid black; */

  li {
    list-style-type: none;
    position: relative;
    right: 35px;
    cursor: pointer;
  }

  li:first-child {
    font-weight: bold;
    font-size: 13px;
  }

  li:nth-child(2) {
    font-weight: bold;
    font-size: 12px;
    position: relative;
    right: -120px;
    color: #58ccff;
  }

  li:nth-child(3) {
    font-weight: bold;
    font-size: 12px;
    position: relative;
    right: -120px;
    color: #58ccff;
  }
`;

const S = {
  Form,
  Title,
  Input,
  List,
};
