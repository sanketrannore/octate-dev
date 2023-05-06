import React from "react";
import styles from "../../../../styles/mainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function KeyWordSearch(props) {
  const { searchText } = props;
  return (
    <section className={styles["search-dropdown-search-for-section"]}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["search-dropdown-search-for-icon"]} />
      <h5 className={styles["search-dropdown-search-for-text"]}>
        Search for <em>{searchText}</em>
      </h5>
    </section>
  );
}

export default KeyWordSearch;
