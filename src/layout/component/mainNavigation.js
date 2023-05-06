import Image from "next/image";
import React from "react";
import Others from "./others/others";
import styles from "../../../styles/mainNavigation.module.css";
import SearchBar from "./searchBar/searchBar";
import OctateImage from "./octateImage/octateImage";
import DrawerIcon from "./drawer/drawerIcon";
function MainNavigation(props) {
  return (
    <nav className="main-navigation-wrapper-aside">
      <div className="main-navigation-content-main-wrapper">
        <DrawerIcon />
        <div className={`${styles["header-octate-octate-image-search-bar-main-wrapper"]}`}>
          <OctateImage />
          <div className={`${styles["search-bar-main-wrapper"]} mobile-hidden`}>
            <SearchBar />
          </div>
        </div>
        <div className={`${styles["header-octate-others-main-wrapper"]}`}>
          <Others />
        </div>
      </div>
      <div className={`${styles["search-bar-main-wrapper--for-mobile"]} only-show-in-mobile`}>
        <SearchBar />
      </div>
    </nav>
  );
}

export default MainNavigation;
