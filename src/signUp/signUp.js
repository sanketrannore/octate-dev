import React from "react";
import AsideSingUp from "./asideSignUp";
import styles from '../../styles/signUp.module.css'
import Image from "next/image";
import SignUpForm from "./signUpForm";
function SignUp() {
  return (
    <main className={styles["main-body-wrapper"]}>
      <Image
        className={styles["sign-up-background-image"]}
        height={"100%"}
        alt="banner image"
        width={"100%"}
        src={require("../../public/images/sing-in-background-image.jpg")}
      />
      <div className={styles["main-container"]}>
        <AsideSingUp />
        <SignUpForm />
      </div>
    </main>
  );
}

export default SignUp;
