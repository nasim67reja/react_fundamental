import React from "react";
import { useSelector } from "react-redux";

import Input from "./Input";
import Button from "./Button";
import styles from "./task.module.css";

const Task = () => {
  const element = useSelector((state) => state.element);

  const content = element.map((el) => <li key={Math.random()}>{el}</li>);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className={styles.task}>
        <form onSubmit={formSubmitHandler}>
          <Input />
          <Button />
        </form>
      </div>
      <ul className={styles["task-list"]}>{content}</ul>
    </React.Fragment>
  );
};

export default Task;
