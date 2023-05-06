import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import styles from "../../../../styles/mainNavigation.module.css";
function OctateImage() {
  return (
    <Fragment>
      <Link href={"/"}>
        <Image
          className={`${styles["octateImage"]} tablet-hidden tablet-landscape-hidden`}
          src={require("../../../../public/images/octateActiveLogo.png")}
          alt={"Octate logo"}
          role="button"
          height={600}
          width={600}
        />
      </Link>
      <Link href={"/"}>
        <Image
          className={`${styles["octateImage-ico"]} only-show-in-tablet only-show-in-tablet-landscape `}
          src={require("../../../../public/images/OctateIcon.ico")}
          alt={"Octate logo"}
          role="button"
          height={600}
          width={600}
        />
      </Link>
    </Fragment>
  );
}

export default OctateImage;
