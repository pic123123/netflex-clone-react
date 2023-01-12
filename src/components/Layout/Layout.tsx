import React from "react";
import { Outlet } from "react-router-dom";
import getApiData from "../../api";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
