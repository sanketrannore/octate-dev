import React from "react";
import styles from "../../styles/joinOrganization.module.css";
function OrganizationHeader() {
  return (
    <div className={`${styles["main-form-header-wrapper"]}`}>
      <h1 className={`${styles["header-title"]}`}>Confirm your organization details </h1>
      <p className={`${styles["header-description"]}`}>
        We found the following organizations based on the domain of your email address. You could join one of these
        orgs, or you could create a new page citing valid reasons. Your new page will be approved through our
        verification process.
      </p>
    </div>
  );
}

export default OrganizationHeader;
