import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/mainNavigation.module.css";
import Image from "next/image";
function DrawerHeader(props) {
  return (
    <header className={`${styles["header-drawer-content-header-main-wrapper"]}`}>
      <Image
        className={`${styles["octateImage"]} tablet-hidden tablet-landscape-hidden`}
        src={require("../../../../public/images/octateActiveLogo.png")}
        alt={"Octate logo"}
        role="button"
        height={600}
        width={600}
      />
      <FontAwesomeIcon onClick={props.handleClose} icon={faClose} className={styles["header-drawer-icon"]} />
    </header>
  );
}

export default DrawerHeader;
