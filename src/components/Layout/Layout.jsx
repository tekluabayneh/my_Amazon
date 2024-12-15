import React, { Suspense } from "react";
import Fotter from "../Fotter/Fotter";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  );
};

export default Layout;
