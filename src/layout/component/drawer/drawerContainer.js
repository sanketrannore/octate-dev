import React from "react";
import styles from "../../../../styles/mainNavigation.module.css";
import DrawerContent from "./drawerContent";
import DrawerHeader from "./drawerHeader";
function DrawerContainer(props) {
  return (
    <aside className={`${styles["drawer-container-main-wrapper"]}`}>
      <DrawerHeader handleClose={props.handleClose} />
      <DrawerContent />
    </aside>
  );
}

export default DrawerContainer;
