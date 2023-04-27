import Image from "next/image";
import React from "react";
import AsideSingUp from "../signUp/asideSignUp";
import OrganizationSteps from "./organizationSteps";
import styles from "../../styles/joinOrganization.module.css";
function JoinOrganization() {
  return (
    <main className={styles["main-body-wrapper"]}>
      <Image
        className={styles["join-organization-background-image"]}
        height={"100%"}
        alt="banner image"
        width={"100%"}
        src={require("../../public/images/sing-in-background-image.jpg")}
      />
      <div className={styles["main-container"]}>
        <AsideSingUp />
        <OrganizationSteps />
      </div>
    </main>
  );
}

export default JoinOrganization;
