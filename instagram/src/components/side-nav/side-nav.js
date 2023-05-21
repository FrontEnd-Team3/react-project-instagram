import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faHouse,
  faMagnifyingGlass,
  faCompass,
  faClapperboard,
  faPaperPlane,
  faHeart,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../search/search";

const SideNav = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const onClose = () => {
    setState(!state);
  };
  return (
    <S.NavUl>
      <NavinUl>
        <li>
          <S.Img src="img/instaLogo.jpg" />
        </li>
        <li onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHouse} size="lg" />
          {/* 홈 */}
        </li>
        <li onClick={onClose}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          {/* 검색 */}
        </li>
        <li>
          <FontAwesomeIcon icon={faCompass} size="lg" />
          {/* 탐색 탭 */}
        </li>
        <li>
          <FontAwesomeIcon icon={faClapperboard} size="lg" />
          {/* 릴스 */}
        </li>
        <li>
          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          {/* 메시지 */}
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} size="lg" />
          {/* 알림 */}
        </li>
        <li>
          <FontAwesomeIcon icon={faSquarePlus} size="lg" />
          {/* 만들기 */}
        </li>
        <li onClick={() => navigate("/human")}>
          <S.ProfileImage src="img/profileImage.jpg" />
          {/* 프로필 */}
        </li>
      </NavinUl>
      <NavinDiv>{state && <Search />}</NavinDiv>
    </S.NavUl>
  );
};

export default SideNav;

const NavUl = styled.ul`
  display: flex;
  width: 300px;
  position: relative;
  z-index: 1;
`;

const NavinUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 2%;
  height: 80%;
  line-height: 200%;

  li {
    width: 80px;
    cursor: pointer;
    margin: 13px 0;
    :hover {
      background-color: #d9d9d9;
    }
  }
`;

const NavinDiv = styled.div`
  margin-top: 80px;
  margin-left: 40px;
  line-height: 250%;
`;

const Img = styled.img`
  width: 100px;
  height: 50px;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`;

const S = {
  NavUl,
  Img,
  ProfileImage,
};
