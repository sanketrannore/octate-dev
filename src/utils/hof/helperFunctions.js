export const ValidateSignInErrors = (value) => {
  let error = {};
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!value.emailId) {
    error.emailId = "Email address is required";
  } else if (!emailRegex.test(value.emailId)) {
    error.emailId = "Please enter a valid email address";
  }
  if (!value.password) {
    error.password = "Password is required";
  }
  return error;
};
export const ValidateSingUpErrors = (values) => {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@$^*()\[\]{}\\|;:'",<.>/?`\-_=+])(?=.{8,})\S+$/;
  if (!values.emailId) {
    errors.emailId = "Email is required";
  } else if (!emailRegex.test(values.emailId)) {
    errors.emailId = "Please enter a valid email address";
  }
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Passwords are at least 8 Characters in length with a minimum of one Capital Letter, a Number and a Special Character.";
  }
  if (values.confirm_password !== values.password) {
    errors.confirm_password = "Password must be same";
  }

  // if (!values.jobTitle) {
  //   errors.jobTitle = "Job title is required";
  // }
  return errors;
};
