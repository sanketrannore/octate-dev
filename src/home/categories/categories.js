import React from "react";
import CategoryList from "./categoryList";
import Header from "./header";
import styles from "../../../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Categories() {
  return (
    <section className={`${styles["home-category-main-wrapper"]} body-container-main`}>
      <Header />
      <CategoryList />
      <div className={`${styles["home-blade-2-category-view-all-categories-main-wrapper"]}`}>
        <h1 className={`${styles["home-blade-2-category-view-all-categories"]}`}>View all product categories</h1>
        <FontAwesomeIcon icon={faArrowRight} className={styles["home-blade-2-category-view-all-categories-icon"]} />
      </div>
    </section>
  );
}

export default Categories;
