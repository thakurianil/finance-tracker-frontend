import React from "react";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin.jsx";

const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <>
      <div>
        <Header />
        <Container>
          <div className="p-3">{pageTitle}</div>
          <main className="main">
            <Outlet />
          </main>
        </Container>

        {/* footer  */}
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
