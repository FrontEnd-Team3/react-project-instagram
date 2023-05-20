import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <NavUl>
      <ul onClick={() => navigate("/")}>홈</ul>
      <ul>검색</ul>
      <ul>탐색 탭</ul>
      <ul>릴스</ul>
      <ul>메시지</ul>
      <ul>알림</ul>
      <ul>만들기</ul>
      <ul onClick={() => navigate("/human")}>프로필</ul>
    </NavUl>
  );
};
const NavUl = styled.ul`
  width: 300px;
  li {
    cursor: pointer;
    margin: 5px 0;
    :hover {
      background-color: #d9d9d9;
    }
  }
`;

export default SideNav;
