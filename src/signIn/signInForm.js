import React, { use, useState } from "react";
import BasicInputField from "../utils/hoc/basicInputField/basicInputField";
import styles from "../../styles/signIn.module.css";
import { faEnvelope, faUser, faKeyboard, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import SignInFormHeader from "./signInFormHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignInFormAcceptTAndC from "./signInFormAcceptTAndC";
import { ValidateSignInErrors } from "../utils/hof/helperFunctions";
function SignInForm() {
  const [signInFormData, setSignInFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [signInResult, setSignInResult] = useState({});
  const signInApiIsLoading = signInResult.isLoading;
  const enableSignInButton = checkboxValue && Object.keys(signInFormData).length ? true : false;
  function handleChangeText(e) {
    const { name, value } = e.target;
    setSignInFormData((prev) => ({ ...prev, [name]: value.replace(/^\s+|\s+$/gm, "") }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const validateForm = ValidateSignInErrors(signInFormData);
    if (!Object.keys(validateForm).length && enableSignInButton && !signInApiIsLoading) {
      setSignInResult({ isLoading: true });
      // const result = await signIn("credentials", { ...signInFormData, redirect: false });
      setTimeout(() => {
        setSignInResult({ ...result, isLoading: false });
      }, 1000);
    } else {
      setFormErrors(validateForm);
    }
  }
  function handleCheckboxValue(val) {
    setCheckboxValue(!checkboxValue);
  }
  return (
    <section className={`${styles["sign-in-form-main-wrapper"]}`}>
      <div className="global-card">
        <form onSubmit={handleSubmit} className={`${styles["sign-in-form-content-wrapper"]}`}>
          <SignInFormHeader />
          <BasicInputField
            placeholder="Email address"
            type="email"
            disable={false}
            error={formErrors.emailId}
            icon={faEnvelope}
            value={signInFormData.emailId}
            name="emailId"
            required={true}
            changeText={handleChangeText}
          />
          <BasicInputField
            placeholder="Password"
            type="password"
            disable={false}
            icon={faKeyboard}
            error={formErrors.password}
            value={signInFormData.password}
            name={"password"}
            required={true}
            changeText={handleChangeText}
          />
        </form>
        <div>
          <p className={styles["forgot-password"]}>Forgot Password?</p>
        </div>
        <SignInFormAcceptTAndC value={checkboxValue} name={"checkbox"} checkboxValue={handleCheckboxValue} />
        <div
          onClick={handleSubmit}
          className={`${styles["sign-in-main-button-wrapper"]} ${
            signInApiIsLoading
              ? styles["sign-in-color-main-button-is-loading"]
              : enableSignInButton
              ? styles["sign-in-color-main-button"]
              : styles["sign-in-color-main-button-inactive"]
          }`}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <p className={`${styles["sign-in-button-text"]}`}>Sign In</p>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;
