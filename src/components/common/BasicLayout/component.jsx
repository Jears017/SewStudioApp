import React from "react";

import Navbar from "../Navbar";
import "./styles.css";

const BasicLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="header">Sew studio</div>
      <Navbar className="navbar" />
      <main>{children}</main>
    </div>
  );
};

export default BasicLayout;
