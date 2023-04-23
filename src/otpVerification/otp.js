import React, { useState } from "react";
import OtpInput from "react-otp-input";
import styles from "../../styles/signUp.module.css";
import ResendOtp from "./resendOtp";
function Otp(props) {
  const { emailOtp } = props;
  const OtpApiIsLoading = false;
  const enableOtpButton = true;
  function handleOtp(val) {
    props.handleOtp(val);
  }
  return (
    <section className={`${styles["sign-up-form-main-wrapper"]}`}>
      <div className="global-card">
        <form className={`${styles["sign-up-form-content-wrapper"]}`}>
          <div className={`${styles["otp-header-main-wrapper"]}`}>
            <h2 className={`${styles["otp-header-title"]}`}>Email verification</h2>
            <p className={`${styles["otp-description-title"]}`}>
              We have e-mailed you a 6 digit code. Please check your e-mail and enter the code here to complete the
              verification
            </p>
          </div>
          <OtpInput
            value={emailOtp}
            inputStyle={`otp-sing-up-input`}
            onChange={handleOtp}
            inputType={"tel"}
            shouldAutoFocus={true}
            numInputs={6}
            // renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </form>
        <ResendOtp />
        <div
          // onClick={handleSubmit}
          className={`${styles["sign-up-main-button-wrapper"]} ${
            OtpApiIsLoading
              ? styles["sign-up-color-main-button-is-loading"]
              : enableOtpButton
              ? styles["sign-up-color-main-button"]
              : styles["sign-up-color-main-button-inactive"]
          }`}
        >
          <p className={`${styles["sign-up-button-text"]}`}>Verify</p>
        </div>
      </div>
    </section>
  );
}

export default Otp;
