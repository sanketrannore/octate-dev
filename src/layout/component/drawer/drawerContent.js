import { useGetRequestQuery } from "@/src/store/api/api";
import { useEnCryptGetApi } from "@/src/utils/hoc/apiHelpers/apiHelpers";
import React, { useState } from "react";
import styles from "../../../../styles/mainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import ProductCategoryList from "./productCategoryList";
function DrawerContent(props) {
  function handleOpenDropdown() {
    setOpenDropdown(!openDropdown);
  }
  const [openDropdown, setOpenDropdown] = useState(false);
  const getAllCategoriesApi = useEnCryptGetApi({
    name: useGetRequestQuery,
    path: `/getAllProductCategory`,
    service: "search",
    skipQuery: false,
  });
  const allCategoriesListData = getAllCategoriesApi?.data?.data?.length ? getAllCategoriesApi?.data?.data : [];
  return (
    <div className={`${styles["header-product-category-main-wrapper-position-relative"]}`}>
      <div onClick={handleOpenDropdown} className={`${styles["header-product-category-title-wrapper--mobile"]}`}>
        <FontAwesomeIcon icon={faAlignLeft} className={styles["header-drawer-product-category"]} />
        <h1 className={`${styles["header-product-category-title--mobile"]}`}>Product Categories</h1>
      </div>
      {openDropdown ? (
        <div className={`${styles["header-product-category-dropdown-wrapper--mobile"]}`}>
          <ProductCategoryList data={allCategoriesListData} />
        </div>
      ) : null}
    </div>
  );
}

export default DrawerContent;
