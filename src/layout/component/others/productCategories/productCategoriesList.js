import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../../styles/mainNavigation.module.css";
function ProductCategoriesList(props) {
  const { data } = props;
  return (
    <section>
      <ul>
        {data.map((list) => {
          return (
            <li key={list.Product_Category_ID} className={styles["search-dropdown-search-for-section"]}>
              <FontAwesomeIcon icon={faAlignLeft} className={styles["search-dropdown-search-for-icon"]} />
              <h5 className={styles["search-dropdown-search-for-text"]}>{list.Product_Category_Name}</h5>
            </li>
          );
        })}

        <li className={styles["search-dropdown-search-for-section--browse-all-categories"]}>
          <h5 className={styles["search-dropdown-search-for-text"]}>{"Browse all product category"}</h5>
          <FontAwesomeIcon icon={faArrowRight} className={styles["search-dropdown-search-for-icon"]} />
        </li>
      </ul>
    </section>
  );
}

export default ProductCategoriesList;
