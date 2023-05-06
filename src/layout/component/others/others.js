import React from "react";
import Notification from "./notification/notification";
import ProductCategories from "./productCategories/productCategories";
import Profile from "./profile/profile";
import styles from "../../../../styles/mainNavigation.module.css";
function Others(props) {
  return (
    <main className={`${styles["header-octate-others-wrapper"]}`}>
      <ProductCategories />
      <Notification />
      <Profile />
    </main>
  );
}

export default Others;
