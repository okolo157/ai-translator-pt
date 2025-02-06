import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="New">
      {/* <img src="c:\Users\major\Downloads\icons8-home-50.png"></img> */}
      <div className="New2">
        <Link className="bg" to="/features">
          Home
        </Link>
        <Link className="bg" to="/pricing">
          Pricing
        </Link>
        <Link className="bg" to="/tutorial">
          Signup
        </Link>
        <Link className="bg" to="/signup">
          Login
        </Link>
      </div>
    </div>
  );
}
