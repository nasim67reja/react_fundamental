import styles from "./Ovarlay.module.css";

const Ovarlay = (props) => {
  const deleteOvarlayHandler = () => {
    props.onDelete();
  };

  const xl = (e) => {
    props.onDelete();
  };

  return (
    <div onClick={xl} className={styles.ovarlay}>
      <div className={styles["ovarlay-card"]}>
        <h2>Invalid Input</h2>
        <p className={styles.description}>
          Please enter a valid name and age(non-empty values)
        </p>
        <button onClick={deleteOvarlayHandler} className={styles.btn}>
          Okay
        </button>
      </div>
    </div>
  );
};
export default Ovarlay;
