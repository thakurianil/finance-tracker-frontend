import React from "react";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin.jsx";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Signin />
      <Footer />
    </>
  );
};

export default DefaultLayout;
