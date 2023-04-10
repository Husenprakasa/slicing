import React from "react";
import Header from "../../components/Header";
import Saidbar from "../../components/Saidbar";
import Cart from "../../components/Cart";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
        <Saidbar />
      </div>
      <Cart />
    </div>
  );
};

export default Home;
