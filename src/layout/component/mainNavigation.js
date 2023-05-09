import Image from "next/image";
import React, { useEffect } from "react";
import Others from "./others/others";
import styles from "../../../styles/mainNavigation.module.css";
import SearchBar from "./searchBar/searchBar";
import OctateImage from "./octateImage/octateImage";
import DrawerIcon from "./drawer/drawerIcon";
import { useEnCryptPostApi } from "@/src/utils/hoc/apiHelpers/apiHelpers";
import { usePostRequestMutation } from "@/src/store/api/api";
import { browserName } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetailsFn } from "@/src/store/reducers/userSlice";
import { DecryptApi } from "@/src/utils/hof/apiHelperFunctions";
function MainNavigation(props) {
  function getData() {
    signInAsAnonymous.handleTrigger({
      Skipped: true,
      DeviceId: `${browserName}`,
    });
  }

  const dispatch = useDispatch();
  const getUserDetails = useSelector((state) =>
    state.userDetails.userDetails ? DecryptApi(state.userDetails.userDetails) : {}
  );
  const CurrentPage = useSelector((state) =>
    state.globalDetails.currentPage ? state.globalDetails.currentPage : "topic page"
  );
  const showSearchBar = CurrentPage === "home page" ? false : true;

  const signInAsAnonymous = useEnCryptPostApi({
    path: `/anonymous/signupnew`,
    service: "core",
    name: usePostRequestMutation,
  });
  useEffect(() => {
    if (!getUserDetails?.data?.userId && !signInAsAnonymous.data) {
      getData();
    } else if (!getUserDetails?.data?.userId && signInAsAnonymous?.data) {
      dispatch(setUserDetailsFn(signInAsAnonymous.data));
    }
  }, [signInAsAnonymous?.data]);
  return (
    <nav className={`${showSearchBar ? "main-navigation-wrapper-aside" : "main-navigation-wrapper-aside search-bar-hidden"}`}>
      <div className="main-navigation-content-main-wrapper">
        <DrawerIcon />
        <div className={`${styles["header-octate-octate-image-search-bar-main-wrapper"]}`}>
          <OctateImage />
          {showSearchBar ? (
            <div className={`${styles["search-bar-main-wrapper"]} mobile-hidden`}>
              <SearchBar />
            </div>
          ) : null}
        </div>
        <div className={`${styles["header-octate-others-main-wrapper"]}`}>
          <Others />
        </div>
      </div>
      {showSearchBar ? (
        <div className={`${styles["search-bar-main-wrapper--for-mobile"]} only-show-in-mobile`}>
          <SearchBar />
        </div>
      ) : null}
    </nav>
  );
}

export default MainNavigation;
