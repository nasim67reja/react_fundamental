import styles from "./DisplayItem.module.css";

const DisplayItem = (props) => {
  let content = "";
  if (props.items.length > 0) {
    content = (
      <ul className={styles["list-items"]}>
        {props.items.map((el) => {
          return (
            <li key={Math.random().toString()} className={styles["list-item"]}>
              {el}
            </li>
          );
        })}
      </ul>
    );
  }
  return <div>{content}</div>;
};
export default DisplayItem;
