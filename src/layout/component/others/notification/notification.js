import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import styles from "../../../../../styles/mainNavigation.module.css";
function Notification(props) {
  return (
    <div>
      <FontAwesomeIcon icon={faBell} className={`${styles["header-notification-bell-icons"]}`} />
    </div>
  );
}

export default Notification;
