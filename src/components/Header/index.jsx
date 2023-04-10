import React from "react";
import styles from "./Header.module.css";
import Menu from "../../asset/images/menu.jpg";
import Search from "../../asset/images/serch.jpg";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={Menu} alt="" className={styles.menu} />
      <h1>Food Items</h1>
      <img src={Search} alt="" className={styles.search} />
    </div>
  );
};

export default Header;
