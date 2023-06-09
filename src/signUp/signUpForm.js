import React, { useEffect, useState } from "react";
import BasicInputField from "../utils/hoc/basicInputField/basicInputField";
import styles from "../../styles/signUp.module.css";
import { faEnvelope, faUser, faKeyboard, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faS, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpFormAcceptTAndC from "./signUpFormAcceptTAndC";
import SignUpFormHeader from "./signUpFormHeader";
import SignUpAsBusiness from "./signUpAsBusiness";
import { ValidateSingUpErrors } from "../utils/hof/helperFunctions";
import { useEnCryptPostApi } from "../utils/hoc/apiHelpers/apiHelpers";
import { usePostRequestMutation } from "../store/api/api";
import { useDispatch, useSelector } from "react-redux";
import { setTemporaryUserDetailsFn } from "../store/reducers/temporaryUserSlice";
import { useRouter } from "next/router";
function SignUpForm() {
  const [signUpFormData, setSignUpFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [signUpResult, setSignUpResult] = useState({});
  const [isBusinessUser, setIsBusinessUser] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const getUserDetails = useSelector((state) => state.userDetails.userDetails);
  const signInApiIsLoading = signUpResult.isLoading;
  const enableSignInButton = checkboxValue && Object.keys(signUpFormData).length ? true : false;
  const postSignUpDetails = useEnCryptPostApi({
    path: "/signup/insertSignUpDetails",
    service: "core",
    name: usePostRequestMutation,
  });
  useEffect(() => {
    if (!postSignUpDetails?.data?.status) {
      setFormErrors({
        cardError: postSignUpDetails?.data?.message,
      });
      setTimeout(() => {
        setFormErrors({});
      }, 3000);
    } else {
      dispatch(
        setTemporaryUserDetailsFn({
          data: { ...postSignUpDetails?.data },
          source: "sign up page",
          target: !isBusinessUser ? "/" : "/join-organization",
          verifyOTP: true,
        })
      );
      router.replace("/email-verification");
    }
  }, [postSignUpDetails?.data]);
  function handleChangeText(e) {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({ ...prev, [name]: value.replace(/^\s+|\s+$/gm, "") }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const validateForm = ValidateSingUpErrors(signUpFormData);
    if (!Object.keys(validateForm).length && enableSignInButton && !signInApiIsLoading) {
      const rawData = {
        ...signUpFormData,
        userId: getUserDetails?.data?.userId,
        deviceId: "233aidisksiosoosp",
      };
      if (!postSignUpDetails.isLoading) {
        postSignUpDetails.handleTrigger(rawData);
      }
    } else {
      setFormErrors(validateForm);
    }
  }
  function handleCheckboxValue(val) {
    setCheckboxValue(!checkboxValue);
  }
  function handleCheckBusinessUser(val) {
    setIsBusinessUser(!isBusinessUser);
  }
  return (
    <section className={`${styles["sign-up-form-main-wrapper"]}`}>
      <div className={`${formErrors?.cardError ? "global-card-error" : ""} global-card  p-r`}>
        {formErrors?.cardError ? <span className="global-card-error-text">{formErrors?.cardError}</span> : null}
        <form className={`${styles["sign-up-form-content-wrapper"]}`}>
          <SignUpFormHeader />
          <SignUpAsBusiness value={isBusinessUser} name={"checkbox"} checkboxValue={handleCheckBusinessUser} />
          <div className={`${styles["sign-up-form-first-last-name-wrapper"]}`}>
            <BasicInputField
              icon={false}
              placeholder="First name"
              type="text"
              disable={false}
              error={formErrors.firstName}
              value={signUpFormData.firstName}
              name="firstName"
              required={true}
              changeText={handleChangeText}
            />
            <BasicInputField
              icon={false}
              placeholder="Last name"
              type="text"
              disable={false}
              error={formErrors.lastName}
              value={signUpFormData.lastName}
              name="lastName"
              required={true}
              changeText={handleChangeText}
            />
          </div>

          <BasicInputField
            icon={faEnvelope}
            placeholder={`${isBusinessUser ? "Work email" : "Email address"}`}
            type="email"
            disable={false}
            error={formErrors.emailId}
            value={signUpFormData.emailId}
            name="emailId"
            required={true}
            changeText={handleChangeText}
          />
          <BasicInputField
            icon={faKeyboard}
            placeholder="Password"
            type="password"
            disable={false}
            error={formErrors.password}
            value={signUpFormData.password}
            name="password"
            required={true}
            changeText={handleChangeText}
          />
          <BasicInputField
            icon={faCircleCheck}
            placeholder="Confirm password"
            type="password"
            disable={false}
            error={formErrors["confirm_password"]}
            value={signUpFormData["confirm_password"]}
            name="confirm_password"
            required={true}
            changeText={handleChangeText}
          />
          <SignUpFormAcceptTAndC value={checkboxValue} name={"checkbox"} checkboxValue={handleCheckboxValue} />
        </form>
        <div
          onClick={handleSubmit}
          className={`${styles["sign-up-main-button-wrapper"]} ${
            postSignUpDetails.isLoading
              ? styles["sign-up-color-main-button-is-loading"]
              : enableSignInButton
              ? styles["sign-up-color-main-button"]
              : styles["sign-up-color-main-button-inactive"]
          }`}
        >
          <FontAwesomeIcon icon={faUserPlus} />
          <p className={`${styles["sign-up-button-text"]}`}>Sign Up</p>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;
