import React from "react";
import styles from "../../styles/signUp.module.css";
function SignUpFormAcceptTAndC(props) {
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
        className={`sign-in-input-field-check-box`}
        autoComplete="off"
      />
      <p className={styles["terms-conditions-text"]}>
        Accept <a className="link-color">Terms of Service</a> and <a className="link-color">Privacy Policy</a>
      </p>
    </div>
  );
}

export default SignUpFormAcceptTAndC;
