import React from "react";
import styles from "../../styles/signIn.module.css";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
function SignInFormHeader(props) {
  return (
    <div className={`${styles["sign-in-form-header"]}`}>
      <div className={`${styles["sign-in-button-wrapper"]} ${styles["sign-in-color"]}`}>
        <FontAwesomeIcon icon={faUser} />
        <p className={`${styles["sign-in-button-text"]}`}>Sign In</p>
      </div>
      <Link href={"/sign-up"} className={`${styles["sign-in-button-wrapper"]} ${styles["sign-up-color"]}`}>
        <FontAwesomeIcon icon={faUserPlus} />
        <p className={`${styles["sign-in-button-text"]}`}>Sign Up</p>
      </Link>
    </div>
  );
}

export default SignInFormHeader;
