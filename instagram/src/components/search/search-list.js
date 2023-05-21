import SearchOne from "./search-one";

const SearchList = ({ searchList, setSerachList }) => {
  const setCleanSearch = (id) => {
    const filterList = searchList.filter((todo) => todo.id !== id);
    setSerachList(filterList);
  };


  return (
    <>
      {searchList.map((value, index) => (
        <SearchOne value={value} index = {index} setCleanSearch = {setCleanSearch}/>
      ))}
    </>
  );
};
export default SearchList;
