import React, { useState } from "react";

import "../styles/Signup.css";

import image from "../Bilikisu/bgnew.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup({ onSignupSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        username,
        email,
        password,
      });
      // localStorage.setItem("token", response.data.token);
      // onSignupSuccess(response.data.token);
      alert("Signup successful!");
      navigate("/homepage");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="Signup">
      <div className="parfait">
        <div className="cookies">
          <img src={image} alt="logo" />
          <p> Don't have an account? Signup for free. </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
        </div>

        <div className="cake">
          <div className="coolinputs">
            <label for="input" class="text">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="baby"
              class="input"
              onChange={(e) => setUsername(e.target.value)}
            />
            <i></i>
          </div>

          <div className="coolinputs">
            <label for="input" class="text">
              Email
            </label>
            <input
              type="email"
              placeholder="Sign up with email"
              className="baby"
              class="input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <i></i>
          </div>
          <div className="coolinputs">
            <label for="input" class="text">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="baby"
              class="input"
              name="input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i></i>
          </div>
          <button onClick={handleSignup} class="buttons">
            Sign up
          </button>

          <div className="clickboxs">
            <label>
              <input type="checkbox" class="input" />
              <span class="custom-checkbox"></span>
            </label>
            <p>
              {" "}
              By signing up,you agree to the Terms and conditions and privacy
              policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
