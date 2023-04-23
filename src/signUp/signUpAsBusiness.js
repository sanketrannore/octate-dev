import React from "react";
import styles from "../../styles/signUp.module.css";
function SignUpAsBusiness(props) {
  const { value, name, disable } = props;
  function handleTextChange(e) {
    props.checkboxValue(!value);
  }
  return (
    <div className={`${styles["sign-up-checkbox-wrapper"]}`}>
      <input
        id={"sign-in-checkbox"}
        type={"checkbox"}
        disable={disable}
        name={name}
        value={value ? true : false}
        onChange={handleTextChange}
        className={`sign-up-as-business-input-field-check-box`}
        autoComplete="off"
      />
      <p className={styles["sign-up-as-business-text"]}>Sign Up as business</p>
    </div>
  );
}

export default SignUpAsBusiness;
