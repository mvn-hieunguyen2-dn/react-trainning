import React from "react";
import "../styles/Navbar.css";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_container_wrapper">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="nav_logo_wrapper"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src="/logo192.png" alt="logo" className="nav-bar_logo" />
            <span
              style={{
                marginLeft: 10,
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              REACT JS
            </span>
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="nav-links_brands">
          <div>
            <Facebook style={{ color: "white", cursor: "pointer" }} />
          </div>
          <div>
            <Twitter style={{ color: "white", cursor: "pointer" }} />
          </div>
          <div>
            <Instagram style={{ color: "white", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
