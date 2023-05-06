import React, { useState } from "react";
import styles from "../../../../styles/mainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import KeyWordSearch from "./keyWordSearch";
import TopicsList from "./topicsList";
import { useEnCryptGetApi } from "@/src/utils/hoc/apiHelpers/apiHelpers";
import { useGetRequestQuery } from "@/src/store/api/api";
import OthersList from "./othersList";
function SearchBar(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit pressed");
  }
  function handleFocus() {
    setShowDropdown(true);
  }
  function handleBlur() {
    setShowDropdown(false);
  }
  function handleSearchText(e) {
    if (e.target.value) {
      setSearchText(e.target.value.length == 1 ? e.target.value.replace(/^\s+|\s+$/gm, "") : e.target.value);
    } else {
      setSearchText("");
    }
  }

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const validateShowDropdown = showDropdown && searchText ? true : false;

  // `/completeSearch?searchText=${e.target.value}&userId=27&limit=5`,
  const completeSearchResultsApi = useEnCryptGetApi({
    name: useGetRequestQuery,
    path: `/completeSearch?searchText=${searchText}&userId=27&limit=5`,
    service: "search",
    skipQuery: !searchText ? true : false,
  });
  const completeSearchResults = completeSearchResultsApi?.data?.data;
  const KeysInObject = typeof completeSearchResults === "object" ? Object.keys(completeSearchResults) : [];
  return (
    <form onSubmit={handleSubmit} className={`${styles["header-search-form"]}`}>
      <input
        className={`${styles["header-search-input"]}`}
        placeholder={"Search products"}
        id="keywords"
        type="text"
        name="keywords"
        value={searchText}
        onChange={handleSearchText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className={`${styles["header-search-icon-wrapper"]}`} type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["header-search-icon"]} />
      </button>
      {validateShowDropdown ? (
        <div className={`${styles["header-search-dropdown-main-wrapper"]} ${styles["header-dropdown--open"]}`}>
          {KeysInObject?.length &&
            KeysInObject.map((keys) => {
              if (keys == "Topics") {
                return completeSearchResults?.[keys]?.length ? (
                  <TopicsList keys={keys} keyName={keys} data={completeSearchResults?.[keys]} />
                ) : null;
              } else {
                return completeSearchResults?.[keys]?.length ? (
                  <OthersList keys={keys} keyName={keys} data={completeSearchResults?.[keys]} />
                ) : null;
              }
            })}

          <KeyWordSearch searchText={searchText} />
        </div>
      ) : null}
    </form>
  );
}

export default SearchBar;
