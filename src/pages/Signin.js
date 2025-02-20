import React, { useState } from "react";
import "../styles/signin.css";
import axios from "axios";
import bg from "../assets/bg.png";

import { useNavigate } from "react-router-dom";

function Signin({ onLoginSuccess }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      // localStorage.setItem("token", response.data.token);
      // onLoginSuccess(response.data.token);
      alert("Login successful!");
      navigate("/homepage");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container1">
      <div className="container2">
        <div className="kind">
          <img src={bg} alt="Logo" />
        </div>
        <div className="Add">
          <p>Already Have an Account? Log in</p>
        </div>
        <div className="nut">
          <button className="tom">
            <label for="username">USERNAME</label>
            <input
              className="oyin"
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </button>
        </div>
        <div className="pit">
          <button className="play">
            <label for="Password">PASSWORD</label>
            <input
              className="pin"
              type="text"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </button>
        </div>
        <button onClick={handleLogin} className="pen" type="signin">
          SIGNIN
        </button>
        <div className="nit">
          <p>By Signin Up, you agree to the Terms and conditions and privacy</p>
        </div>
      </div>
    </div>
  );
}
export default Signin;
