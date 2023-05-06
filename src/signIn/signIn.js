import React from "react";
import SignInForm from "./signInForm";
import styles from "../../styles/signIn.module.css";
import Image from "next/image";
import AsideSignIn from "./asideSignIn";

function SignIn() {
  return (
    <main className={styles["main-body-wrapper"]}>
      <Image
        className={styles["sing-in-background-image"]}
        height={"100%"}
        alt="banner image"
        width={"100%"}
        src={require("../../public/images/sing-in-background-image.jpg")}
      />
      <div className={`${styles["main-container"]} mobile-hidden tablet-hidden`}>
        <AsideSignIn />
        <SignInForm />
      </div>
      <div className={`${styles["main-container--mobile"]} only-show-in-tablet only-show-in-mobile`}>
        <SignInForm />
      </div>
    </main>
  );
}

export default SignIn;
