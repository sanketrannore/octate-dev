import React from "react";
import styles from "../../../../../styles/mainNavigation.module.css";
function Profile(props) {
  return (
    <div className={`${styles["header-profile-main-wrapper"]}`}>
      <div className={`${styles["header-profile-round-wrapper"]}`}>
        <h2 className={`${styles["header-profile-text"]}`}>SR</h2>
      </div>
      <h4 className={`${styles["header-profile-name-text"]} mobile-hidden tablet-hidden`}>Sanket Rannore</h4>
    </div>
  );
}

export default Profile;
