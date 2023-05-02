import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/signUp.module.css";
import AsideSingUp from "../signUp/asideSignUp";
import Otp from "./otp";
function OtpVerification() {
  const [emailOtp, setEmailOtp] = useState();
  function handleOtp(val) {
    setEmailOtp(val);
  }
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
        <Otp emailOtp={emailOtp} handleOtp={handleOtp} />
      </div>
    </main>
  );
}

export default OtpVerification;
