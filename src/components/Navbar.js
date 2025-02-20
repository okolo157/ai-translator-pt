import React from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="New">
      {/* <img src="c:\Users\major\Downloads\icons8-home-50.png"></img> */}
      <div className="New2">
        <Link className="bg" to="/">
          Home
        </Link>

        <Link className="bg" to="/pricing">
          Pricing
        </Link>
        {pathname !== "/homepage" && (
          <div style={{ display: "flex", gap: "10px" }}>
            <Link className="bg" to="/signup">
              Signup
            </Link>
            <Link className="bg" to="/signin">
              Login
            </Link>
          </div>
        )}
        {pathname === "/homepage" && (
          <Link style={{ color: "red", textDecoration: "none" }} to="/">
            Signout
          </Link>
        )}
      </div>
    </div>
  );
}
