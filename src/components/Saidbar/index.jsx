import React from "react";
import styles from "./Saidbar.module.css";
import Add from "../../asset/images/add.png";
import Clipboard from "../../asset/images/clipboard.png";
import Fork from "../../asset/images/fork.png";

const Saidbar = () => {
  return (
    <div className={styles.container}>
      <img src={Add} alt="" />
      <img src={Clipboard} alt="" />
      <img src={Fork} alt="" />
    </div>
  );
};

export default Saidbar;
