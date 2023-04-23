import React from "react";
import styles from "../../styles/signUp.module.css";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
function SignUpFormHeader(props) {
  return (
    <div className={`${styles["sign-up-form-header"]}`}>
      <Link href={"/sign-in"} className={`${styles["sign-up-button-wrapper"]} ${styles["sign-in-color"]}`}>
        <FontAwesomeIcon icon={faUser} />
        <p className={`${styles["sign-up-button-text"]}`}>Sign In</p>
      </Link>
      <div className={`${styles["sign-up-button-wrapper"]} ${styles["sign-up-color"]}`}>
        <FontAwesomeIcon icon={faUserPlus} />
        <p className={`${styles["sign-up-button-text"]}`}>Sign Up</p>
      </div>
    </div>
  );
}

export default SignUpFormHeader;
