import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/joinOrganization.module.css";
import { useGetRequestQuery } from "../store/api/api";
import { useEnCryptGetApi } from "../utils/hoc/apiHelpers/apiHelpers";
import OrganizationHeader from "./organizationHeader";
import VendorList from "./vendorList";
function OrganizationSteps() {
  const error = false;
  const route = useRouter();
  const getVendorByDomain = useEnCryptGetApi({
    path: `/vendor/searchVendorByDomain?Domain_URL=${"portqii.com"}`,
    service: "core",
    skipQuery: false,
    name: useGetRequestQuery,
  });
  const handleVendorListClicked = () => {
    route.replace("/");
  };
  const vendorListData = getVendorByDomain?.data?.data?.length ? getVendorByDomain?.data?.data : [];
  return (
    <section className={`${styles["join-organization-steps-form-main-wrapper"]}`}>
      <div className={`${error ? "global-card-error" : ""} global-card  p-r`}>
        <div className={`${styles["join-organization-steps-form-content-wrapper"]}`}>
          <OrganizationHeader />
          {vendorListData?.map((item) => {
            return (
              <VendorList
                key={item?.Vendor_Name}
                data={item}
                handleButtonVisible={() => handleVendorListClicked(true)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OrganizationSteps;
