import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React from "react";

const Layout = ({ children, contenedor, main }) => {
  return (
    <div className={contenedor}>
      <Navbar />
      <main className={main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
