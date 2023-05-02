import React from "react";
import MainNavigation from "./component/mainNavigation";

function Layout(props) {
  return (
    <header>
      <MainNavigation />
      <main>{props.children}</main>
    </header>
  );
}

export default Layout;
