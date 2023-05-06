import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAlignLeft, faStore, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/mainNavigation.module.css";
function OthersList(props) {
  const { data, keyName } = props;
  const Icons =
    keyName == "Categories"
      ? faAlignLeft
      : keyName == "Vendors"
      ? faStore
      : keyName == "Products"
      ? faLayerGroup
      : null;
  return (
    <section>
      <ul className={styles["search-dropdown-topic-list-main-wrapper"]}>
        <div className={styles["search-dropdown-others-section-header-main-wrapper"]}>
          <FontAwesomeIcon icon={Icons} className={styles["search-dropdown-search-for-icon"]} />
          <h3>{keyName}</h3>
        </div>
        {data.map((list) => {
          return (
            <li key={list.name} className={styles["search-dropdown-search-for-section"]}>
              <h5 className={styles["search-dropdown-search-for-text"]}>{list.name}</h5>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default OthersList;
