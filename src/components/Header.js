import React from "react";
import styles from "../Styles/Header.module.scss";
import { FiUserPlus, FiUser, FiGlobe } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <FiUserPlus /> <p>SignUp</p>
          </li>
          <li>
            <FiUser /> <p>Login</p>
          </li>
          <li>
            {" "}
            <FiGlobe />
            <p>Lang</p>
          </li>
        </ul>
      </nav>
      <h3>Arrival</h3>
    </header>
  );
};

export default Header;
