import React from "react";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Signup.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import image from "../Bilikisu/bgnew.png";
function Signup() {
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
            />
            <i></i>
          </div>
          <button class="buttons">Sign up</button>

          {/* 
          <button className="baby">
            {" "}
            <FontAwesomeIcon icon={faApple} size="2x" className="itemx" />
            Sign up with apple
          </button> */}
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
