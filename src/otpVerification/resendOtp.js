import React, { useEffect, useState } from "react";
import styles from "../../styles/signUp.module.css";
function ResendOtp(props) {
  const [timeLeft, setTimeLeft] = useState(40);
  function handleResendClicked() {
    setTimeLeft(40);
  }
  function DisplayTimeLeft() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return (
      <p className={styles["resend-otp-text"]}>
        Didn't receive OTP? <span className="link-color">{`${minutes}:${formattedSeconds}`}</span>
      </p>
    );
  }
  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);
  return (
    <section className={styles["resend-otp-main-wrapper"]}>
      {timeLeft <= 0 ? (
        <p className={styles["resend-otp-text"]}>
          Didn't receive OTP?{" "}
          <span onClick={handleResendClicked} className="link-color">
            Resend OTP
          </span>
        </p>
      ) : (
        <DisplayTimeLeft />
      )}
    </section>
  );
}

export default ResendOtp;
