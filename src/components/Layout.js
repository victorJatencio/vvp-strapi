import React from "react";
import Header from "../components/Header/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
