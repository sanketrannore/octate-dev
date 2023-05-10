import { useGetRequestQuery } from "@/src/store/api/api";
import { useEnCryptGetApi } from "@/src/utils/hoc/apiHelpers/apiHelpers";
import React from "react";
import CategoryCard from "./categoryCard";
import styles from "../../../styles/home.module.css";
function CategoryList(props) {
  // path: `/getAllProductCategory`,
  const getAllCategoriesApi = useEnCryptGetApi({
    name: useGetRequestQuery,
    path: `/getAllProductCategory`,
    service: "search",
    skipQuery: false,
  });
  const allCategoriesListData = getAllCategoriesApi?.data?.data?.length ? getAllCategoriesApi?.data?.data : [];
  return (
    <div className={`${styles["home-blade-2-category-list-container"]}`}>
      {allCategoriesListData.map((list) => {
        return <CategoryCard key={list.Product_Category_ID} data={list} />;
      })}
    </div>
  );
}

export default CategoryList;
