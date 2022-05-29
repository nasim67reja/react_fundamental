import React, { useState } from "react";

import styles from "./AddItem.module.css";

const AddItem = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onGetInfo(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };
  ///
  return (
    <form onSubmit={submitHandler} className={styles["input-form"]}>
      <div className={styles["input-box"]}>
        <label>Username</label>
        <input
          type="text"
          value={enteredUserName}
          onChange={userNameHandler}
          className={styles.input}
        />
      </div>
      <div className={styles["input-box"]}>
        <label>Age(Years)</label>
        <input
          type="number"
          value={enteredAge}
          onChange={ageHandler}
          className={styles.input}
        />
      </div>
      <button className={styles["btn"]}>Add User</button>
    </form>
  );
};
export default AddItem;
