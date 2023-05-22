import ItemOne from "./item-one";

const Item = ({ itemlist, setItemlist }) => {
  return (
    <>
      {itemlist.map((value, index) => (
        <ItemOne value={value} index={index} />
      ))}
    </>
  );
};

export default Item;
