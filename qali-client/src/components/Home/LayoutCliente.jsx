import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React from "react";

const Layout = ({ children, clase }) => {
  return (
    <div className={`${clase} flex flex-col`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
