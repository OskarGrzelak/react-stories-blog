import React from "react";
import Navbar from "./Navbar";

import "./Layout.css";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
