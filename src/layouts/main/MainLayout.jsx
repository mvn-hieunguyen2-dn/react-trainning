import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../styles/MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout_wrapper_container">
      <div className="main-layout_container">
        <Navbar />
        <div className="main-layout_content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
