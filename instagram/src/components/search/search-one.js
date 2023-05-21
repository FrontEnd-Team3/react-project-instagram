import styled from "styled-components";

const SearchOne = ({ value, setCleanSearch, index }) => {
  const { id, name, url} = value

  return (
    <OneDiv>
      <OneList>
        <div>
          <Image src={url}></Image>
        </div>
        <ListinUl>
          <li>{id}</li>
          <li>{name}</li>
        </ListinUl>
        <Button onClick={() => setCleanSearch(id)}>x</Button>
      </OneList>
    </OneDiv>
  );
};

export default SearchOne;

const Image = styled.img`
  width: 35px;
  height : 35px;
  border-radius: 50%;
  position: relative;
  top : 2px;
  right: 35px;
`;
const OneList = styled.ul`
  width: 300px;
  height: 37px;
  list-style: none;
  /* border: 1px solid black; */
  margin-top: 20px;
  display: flex;
`;

const OneDiv = styled.div`
  position: relative;
  right: 36px;
`;

const ListinUl = styled.ul`
  list-style: none;

  position: relative;
  right: 35px;
  li {
    /* border: 1px solid black; */
    width: 150px;
    font-size: 11px;
    position: relative;
    right: 20px;
  }
  li:first-child {
    position: relative;
    bottom: 10px;
    font-weight: bold;
  }
  li:nth-child(2) {
    position: relative;
    bottom: 35px;
  }
`;

const Button = styled.button`
  margin-left: 20px;
  margin-top: 3px;
  height: 20px;
  width: 20px;
  border: none;
  background-color: white;
  font-size: 19px;
  color: #787878;
`;
