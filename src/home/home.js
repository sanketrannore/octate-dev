import React from "react";
import Header from "./header/header";
import styles from "../../styles/home.module.css";
import Categories from "./categories/categories";
function Home() {
  return (
    <main className={`${styles["home-main-wrapper"]}`}>
      <Header />
      <Categories />
    </main>
  );
}

export default Home;
