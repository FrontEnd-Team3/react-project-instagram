import ConnectOne from "./connect-one";

const SearchList = ({ connectList, setConnectList }) => {
  const setCleanConnect = (id) => {
    const filterList = connectList.filter((todo) => todo.id !== id);
    setConnectList(filterList);
  };


  return (
    <>
      {connectList.map((value, index) => (
        <ConnectOne value={value} index = {index} setCleanConnect={setCleanConnect}/>
      ))}
    </>
  );
};
export default SearchList;
