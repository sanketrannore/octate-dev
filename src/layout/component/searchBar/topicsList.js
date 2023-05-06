import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/mainNavigation.module.css";
function TopicsList(props) {
  const { data, keyName } = props;
  return (
    <section>
      <ul className={styles["search-dropdown-topic-list-main-wrapper"]}>
        {data.map((list) => {
          return (
            <li key={list.name} className={styles["search-dropdown-search-for-section"]}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["search-dropdown-search-for-icon"]} />
              <h5 className={styles["search-dropdown-search-for-text"]}>{list.name}</h5>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TopicsList;
