import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/home.module.css";
function CategoryCard(props) {
  const { data } = props;
  return (
    <div className={styles["home-blade-2-category-card-container"]}>
      <FontAwesomeIcon icon={faAlignLeft} className={styles["home-blade-2-category-card-icon"]} />
      <h5 className={styles["home-blade-2-category-card-text"]}>{data.Product_Category_Name}</h5>
    </div>
  );
}

export default CategoryCard;
