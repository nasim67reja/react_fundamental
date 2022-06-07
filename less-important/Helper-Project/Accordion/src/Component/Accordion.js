import React, { useState } from "react";

import data from "./accordionapi";
import styles from "./Accordion.module.css";

const MyAccordion = (props) => {
  const [show, setShow] = useState(false);
  return (
    <li>
      <div
        className={styles.heading}
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1 className={styles["heading-primary"]}>{props.question}</h1>
        <span>{show ? "➖" : "➕"}</span>
      </div>
      {show && <p className={styles.description}>{props.answer}</p>}
    </li>
  );
};

const Accordion = () => {
  return (
    <ul className={styles["accordion-list"]}>
      <h1>React Accordion</h1>
      {data.map((el) => (
        <MyAccordion key={el.id} question={el.question} answer={el.answer} />
      ))}
    </ul>
  );
};

export default Accordion;
