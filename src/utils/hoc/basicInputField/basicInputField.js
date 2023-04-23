import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../../styles/signIn.module.css";
function BasicInputField(props) {
  const { error, placeholder, type, value, name, disable, icon, required } = props;
  function handleTextChange(val) {
    const text = val.target.value;
    if (val.target.value.length == 1) {
      props.changeText(val);
    } else if (text.replace(/^\s+|\s+$/gm, "").length) {
      props.changeText(val);
    } else {
      props.changeText(val);
    }
  }
  return (
    <div className={`${"input-field-parent-wrapper"}`}>
      <div
        className={`${icon ? "input-field-wrapper" : "input-field-wrapper-without-icon"} ${
          error ? "background-error" : ""
        }`}
      >
        {required ? <p className={`input-field-required`}>*</p> : null}
        {icon ? <FontAwesomeIcon icon={icon} className="sign-in-input-field-icons" /> : null}

        <input
          id={placeholder}
          type={type ? type : "text"}
          value={value ? value : ""}
          name={name}
          disabled={disable ? disable : false}
          placeholder={placeholder}
          onChange={handleTextChange}
          className={`sign-in-input-field`}
          autoComplete="off"
        />
      </div>
      {error ? <span className="input-field-text-error">{error}</span> : null}
      {value ? <span className="input-field-label-text">{placeholder}</span> : null}
    </div>
  );
}

export default BasicInputField;
