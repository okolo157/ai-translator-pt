import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="New">
      {/* <img src="c:\Users\major\Downloads\icons8-home-50.png"></img> */}
      <div className="New2">
        <Link to="/features">Features</Link>
        <Link to="/tutorial">Tutorial</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/signup">Login</Link>
      </div>
    </div>
  );
}
