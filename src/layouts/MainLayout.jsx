import React from "react";
import Navbar from "./Navbar";
import "../styles/MainLayout.css";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout_wrapper_container">
      <div className="main-layout_container">
        <Navbar />
        <div
          style={{
            backgroundImage: "url(/wall_poro.jpeg)",
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundSize: "center",
            backgroundPosition: "center",
            objectFit: "cover",
            padding: "0 4%",
            color: "white",
          }}
        >
          <h2>Welcome to React Training!</h2>
        </div>
        <div className="main-layout_content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
