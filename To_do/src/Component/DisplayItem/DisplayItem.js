import "./DisplayItem.css";

// cross btn
const CrossBtn = (props) => {
  const passingValueHandler = (e) => {
    props.onDelete(e.target.id);
  };
  return (
    <span id={props.value} onClick={passingValueHandler} className="cross-btn">
      ❎
    </span>
  );
};
// ////////////////////
const DisplayItem = (props) => {
  return (
    <ul className="list-items">
      {props.item.map((el) => (
        <li className="list-item" key={el.id}>
          {el.text} <CrossBtn value={el.id} onDelete={props.onDeleteItem} />
        </li>
      ))}
    </ul>
  );
};

export default DisplayItem;
