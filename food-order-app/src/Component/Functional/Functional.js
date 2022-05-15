import React, { useState } from "react";

import styles from "./Functional.module.css";

const Functional = () => {
  const [state, setState] = useState(1);

  const data = [
    {
      pName: "Sushi",
      title: "Finest fish and veggies",
      price: 22.99,
    },
    {
      pName: "Schnitzel",
      title: "A german specialty!",
      price: 16.5,
    },
    {
      pName: "Barbecue Burger",
      title: "American, raw, meaty",
      price: 12.99,
    },
    {
      pName: "Green Bowl",
      title: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <section className={styles["section-product"]}>
      {/* <Product></Product> */}
      {/* ///////////// */}
      {data.map((el) => {
        return (
          <div className={styles.info}>
            <div className={styles["product-info-box"]}>
              <h3>{el.pName}</h3>
              <p>{el.title}</p>
              <div className={styles.number}>
                <span>$</span> {el.price}
              </div>
            </div>
            <div className={styles["product-add-box"]}>
              <div className={styles["add"]}>
                <div>
                  <label htmlFor="input"> Amount</label>
                  <input value={state} type="number" className={styles.input} />
                </div>
                <button>+Add</button>
              </div>
            </div>
          </div>
        );
      })}
      {/* ///////// */}
    </section>
  );
};
export default Functional;
