import { useGetRequestQuery } from "@/src/store/api/api";
import { useEnCryptGetApi } from "@/src/utils/hoc/apiHelpers/apiHelpers";
import React from "react";
import styles from "../../../../../styles/mainNavigation.module.css";
import ProductCategoriesList from "./productCategoriesList";
function ProductCategories(props) {
  // path: `/getAllProductCategory`,
  const getAllCategoriesApi = useEnCryptGetApi({
    name: useGetRequestQuery,
    path: `/getAllProductCategory`,
    service: "search",
    skipQuery: false,
  });
  const allCategoriesListData = getAllCategoriesApi?.data?.data?.length ? getAllCategoriesApi?.data?.data : [];
  return (
    <div className={`${styles["header-product-category-relative-wrapper"]} mobile-hidden`}>
      <h1 className={`${styles["header-product-category-title"]}`}>Product Categories</h1>
      {allCategoriesListData?.length ? (
        <div className={`${styles["header-all-categories-list-wrapper"]}`}>
          <ProductCategoriesList data={allCategoriesListData} />
        </div>
      ) : null}
    </div>
  );
}

export default ProductCategories;
