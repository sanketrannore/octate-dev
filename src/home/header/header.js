import React from "react";
import Content from "./content";
import styles from "../../../styles/home.module.css";
import SearchBar from "./searchBar";
function Header(props) {
  return (
    <section className={`${styles["home-blade-1-main-wrapper"]}`}>
      <Content />
      <SearchBar />
    </section>
  );
}

export default Header;
