import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>Food App</div>
          <nav>
            <ul className={styles.mainNav}>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to="/all-food"
                >
                  All Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to="/favourite-food"
                >
                  Favourite
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
