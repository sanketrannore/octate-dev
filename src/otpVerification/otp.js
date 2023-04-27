import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/signUp.module.css";
import { usePostRequestMutation } from "../store/api/api";
import { setTemporaryUserDetailsFn } from "../store/reducers/temporaryUserSlice";
import { setUserDetailsFn } from "../store/reducers/userSlice";
import { useEnCryptPostApi } from "../utils/hoc/apiHelpers/apiHelpers";
import { DecryptApi } from "../utils/hof/apiHelperFunctions";
import ResendOtp from "./resendOtp";
function Otp(props) {
  const { emailOtp } = props;
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const getTemporaryUserDetails = useSelector((state) => state.temporaryUserDetails.temporaryUser);
  const getUserDetails = useSelector((state) =>
    state.userDetails.userDetails ? DecryptApi(state.userDetails.userDetails) : {}
  );
  const enableOtpButton = true;
  const VerifyOtpPostApi = useEnCryptPostApi({
    path: getTemporaryUserDetails?.data?.reset_password ? `/user/OTPVerification` : `/user/signInOTPVerification`,
    service: "core",
    name: usePostRequestMutation,
  });
  function handleOtp(val) {
    props.handleOtp(val);
  }
  useEffect(() => {
    if (VerifyOtpPostApi?.data?.userExist) {
      dispatch(
        setTemporaryUserDetailsFn({
          data: { ...getTemporaryUserDetails?.data },
          loading: true,
          verifyOTP: false,
          joinOrg: true,
          resetPassword: true,
        })
      );
      dispatch(setUserDetailsFn({ ...getUserDetails?.data, ...VerifyOtpPostApi?.data }));

      // navigate(tempAuthData?.target, { replace: true });
    } else if (!VerifyOtpPostApi?.data?.userExist && VerifyOtpPostApi?.data?.message) {
      setError(VerifyOtpPostApi?.data?.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [VerifyOtpPostApi?.data]);
  function handleSubmit(val) {
    const rawData = {
      emailId: getTemporaryUserDetails?.data?.emailId,
      userId: getTemporaryUserDetails?.data?.userId,
      OTP: emailOtp,
      Persona: getTemporaryUserDetails?.data?.Persona,
      data: { ...getTemporaryUserDetails?.data },
    };
    alert(JSON.stringify(rawData));
    if (!VerifyOtpPostApi.isLoading) {
      VerifyOtpPostApi.handleTrigger(rawData);
    }
  }
  return (
    <section className={`${styles["sign-up-form-main-wrapper"]}`}>
      <div className={`${error ? "global-card-error" : ""} global-card  p-r`}>
        {error ? <span className="global-card-error-text">{error}</span> : null}
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
        <ResendOtp
          emailId={getTemporaryUserDetails?.data?.emailId}
          userId={getTemporaryUserDetails?.data?.userId}
          type={getTemporaryUserDetails?.data?.reset_password}
        />
        <div
          onClick={handleSubmit}
          className={`${styles["sign-up-main-button-wrapper"]} ${
            VerifyOtpPostApi.isLoading
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
