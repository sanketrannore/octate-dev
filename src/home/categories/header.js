import React from "react";
import styles from "../../../styles/home.module.css";
function Header() {
  return (
    <div className={`${styles["home-blade-2-header-main-wrapper"]}`}>
      <h1 className={`${styles["home-blade-2-header-title"]}`}>Explore products by category</h1>
    </div>
  );
}

export default Header;
