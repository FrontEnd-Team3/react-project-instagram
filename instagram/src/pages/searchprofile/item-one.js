import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import "./item.css";

const ItemOne = ({ value, index }) => {
  const { heart, comment } = value;

  return (
    <Hide>
      <Ul id="hover1">
        <li id="explain">
          <FontAwesomeIcon icon={faHeart} size="lg" color="#f0f8ff" />
          {heart}
        </li>
        <li id="explain">
          <FontAwesomeIcon icon={faComment} size="lg" color="#f0f8ff" />
          {comment}
        </li>
      </Ul>

      <Ul id="hover1">
        <li id="explain2">
          <FontAwesomeIcon icon={faHeart} size="lg" color="#f0f8ff" />
          {heart}
        </li>
        <li id="explain2">
          <FontAwesomeIcon icon={faComment} size="lg" color="#f0f8ff" />
          {comment}
        </li>
      </Ul>
      <Ul id="hover1">
        <li id="explain3">
          <FontAwesomeIcon icon={faHeart} size="lg" color="#f0f8ff" />
          {heart}
        </li>
        <li id="explain3">
          <FontAwesomeIcon icon={faComment} size="lg" color="#f0f8ff" />
          {comment}
        </li>
      </Ul>
    </Hide>
  );
};
export default ItemOne;

const Hide = styled.div`
  display: grid;
  grid-template-columns: 277px 277px 277px;
  grid-template-rows: 100px 80px 100px;
  z-index: 1;
  position: relative;
  bottom: 835px;
  left: 8px;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
  height: 280px;
  position: relative;
  bottom: 120px;
  li {
    margin-left: 10px;
    padding-left: 15px;
    color: aliceblue;
    font-weight: bold;
    font-size: 13px;
    position: relative;
    top: 120px;
  }
`;
