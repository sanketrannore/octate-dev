import Image from "next/image";
import React, { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { usePostRequestMutation } from "../store/api/api";
import { useEnCryptPostApi } from "../utils/hoc/apiHelpers/apiHelpers";
import styles from "../../styles/joinOrganization.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { DecryptApi } from "../utils/hof/apiHelperFunctions";
const VendorList = (props) => {
  const { data, source } = props;
  const [RequestSent, setRequestSent] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const getUserDetails = useSelector((state) =>
    state.userDetails.userDetails ? DecryptApi(state.userDetails.userDetails) : {}
  );
  const vendorData = data;

  const JoinOrClaimOrg = useEnCryptPostApi({
    name: usePostRequestMutation,
    path: `/InsertOrganizationForSelection`,
    service: "core",
  });
  useEffect(() => {
    if (JoinOrClaimOrg?.data?.Status) {
      setRequestSent(true);
      setDisplayText("Request is sent to octate.ai. We will get back to you shortly.");
      props?.handleButtonVisible();
    }
  }, [JoinOrClaimOrg?.data]);

  const handleJoinOrClaim = (val) => {
    if (!RequestSent) {
      const rawData = {
        vendorId: val?.Vendor_ID,
        vendorName: val?.Vendor_Name,
        userId: getUserDetails?.userId,
        createdAt: new Date().toString(),
        action: val?.isAdminExist ? "join" : "claim",
        source: source ? source : "default",
      };
      JoinOrClaimOrg?.handleTrigger(rawData);
      setModalVisible(true);
    }
  };

  const ShowStatusOfRequest = (val) => {
    switch (1) {
      case val?.Is_Joined_Requested:
        return "Request sent";
      case val?.Is_Joined_Accepted:
        return "Request accepted";
      case val?.Is_Joined_Rejected:
        return "Request rejected";
      case !val?.isAdminExist:
        return "Claimed";
      case val?.Is_Claimed:
        return "claimed";
      default:
        return "Request sent";
    }
  };

  const VENDOR_PROCESS =
    vendorData?.Is_Joined_Requested ||
    vendorData?.Is_Joined_Accepted ||
    vendorData?.Is_Joined_Rejected ||
    vendorData?.Is_Claimed;

  return (
    <div className={`${styles["vendor-list-onboard-container"]}`}>
      <div className={`${styles["vendor-list-onboard-header-container"]}`}>
        <div className={`${styles["vendor-list-image-container"]}`}>
          {vendorData?.Vendor_Logo_URL ? (
            <Image
              className={`${styles["vendor-onboarding-thumbnail"]}`}
              loader={() => vendorData?.Vendor_Logo_URL}
              src={vendorData?.Vendor_Logo_URL}
              height={100}
              width={100}
              alt={"Vendor logo"}
            />
          ) : (
            <Image
              className={`${styles["vendor-onboarding-thumbnail"]}`}
              src={require("../../public/images/Vendor_Placeholder_Icon.svg")}
              alt="Vendor logo "
              fill={true}
            />
          )}
        </div>

        <div className={`${styles["vendor-list-onboard-header"]}`}>
          <h5 className={`${styles["vendor-list-onboard-name"]}`}>{vendorData?.Vendor_Name}</h5>
          <div className="flex">
            <p className={`${styles["vendor-onboarding-verified-text"]}`}>
              {vendorData?.Vendor_Status === "Verified" ? "Verified" : "Unverified"}
            </p>
          </div>
        </div>
      </div>
      {VENDOR_PROCESS ? (
        <div className="global-primary-button">
          <>
            {vendorData?.Is_Joined_Requested || vendorData?.Is_Joined_Accepted ? (
              <i className="feather icon icon-check "></i>
            ) : null}
            {ShowStatusOfRequest(vendorData)}
          </>
        </div>
      ) : (
        <div
          className={`${
            JoinOrClaimOrg.isLoading || JoinOrClaimOrg.isFetching
              ? "global-primary-button--is-loading"
              : "global-primary-button"
          }`}
          onClick={() => handleJoinOrClaim(vendorData)}
        >
          {RequestSent ? (
            <>
              <FontAwesomeIcon icon={faCircleCheck} className={`${styles["join-organization-check-icons"]}`} />
              {ShowStatusOfRequest(vendorData)}
            </>
          ) : null}

          {!RequestSent ? (vendorData?.isAdminExist ? "Join" : "Claim") : null}
        </div>
      )}
    </div>
  );
};

export default memo(VendorList);
