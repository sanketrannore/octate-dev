import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/mainNavigation.module.css";
import DrawerContainer from "./drawerContainer";
function DrawerIcon(props) {
  function handleShowDrawer() {
    setShowDrawer(true);
  }
  function handleClose() {
    setShowDrawer(false);
  }
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className={`${styles["header-drawer-main-wrapper"]} only-show-in-mobile`}>
      <FontAwesomeIcon onClick={handleShowDrawer} icon={faBars} className={styles["header-drawer-icon"]} />
      {showDrawer ? <DrawerContainer handleClose={handleClose} /> : null}
    </div>
  );
}

export default DrawerIcon;
