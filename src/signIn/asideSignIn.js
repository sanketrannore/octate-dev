import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faMagnifyingGlassArrowRight,
  faFolderTree,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../../styles/signIn.module.css";
function AsideSignIn(props) {
  return (
    <aside className={`${styles["left-side-overview-main-wrapper-aside"]} mobile-hidden tablet-hidden`}>
      <div className={styles["signUp-vertical-line"]}></div>
      <div className={styles["left-side-overview-wrapper-aside"]}>
        <div className={styles["sign-up-image-container"]}>
          <div>
            <Image
              className="octateImage"
              src={require("../../public/images/octateActiveLogo.png")}
              alt={"Octate logo"}
              role="button"
              height={30}
              width={180}
            />
          </div>

          <div>
            <h2 className={styles["left-side-container-text"]}>{"World's largest platform of curated content "}</h2>
            <h2 className={styles["left-side-container-text"]}>{`for solution discovery.`}</h2>
          </div>
        </div>
        <div className={styles["left-side-container-footer-wrapper"]}>
          <div className={styles["left-side-container-footer-content-wrapper"]}>
            <h3 className={styles["left-side-container-text"]}>{"Discover Products"}</h3>
            <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} bounce className={styles["aside-sign-in-icons"]} />
          </div>
          <div className={styles["left-side-container-footer-content-wrapper"]}>
            <h3 className={styles["left-side-container-text"]}>{"Follow Topics"}</h3>
            <FontAwesomeIcon icon={faHashtag} flip className={styles["aside-sign-in-icons"]} />
          </div>
          <div className={styles["left-side-container-footer-content-wrapper"]}>
            <h3 className={styles["left-side-container-text"]}>{"Curate Boards"}</h3>
            <FontAwesomeIcon icon={faFolderTree} beatFade className={styles["aside-sign-in-icons"]} />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AsideSignIn;
