import React from "react";
import "../styles/signin.css";
import bg from "../assets/bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";

function signin() {
  return (
    <div className="container1">
      <div className="container2">
        <div className="kind">
          <img src={bg} alt="Logo" />
        </div>
        <div className="Add">
          <p>Already Have an Account? Log in</p>
        </div>
        <div className="Rep">
          <button className="timi">Signin With Google</button>
          <FontAwesomeIcon icon="fa-brands fa-google" />
        </div>
        <div className="pet">
          <hr
            style={{
              width: "170px",
            }}
          />
          <p>or</p>
          <hr
            style={{
              width: "170px",
            }}
          />
        </div>
        <div className="nut">
          <button className="tom">
            <FontAwesomeIcon icon={faGoogle} />
            Sign In With Email
          </button>
        </div>
        <div className="pit">
          <button className="play">
            <FontAwesomeIcon icon={faApple} />
            Sign In With Apple
          </button>
        </div>
        <div className="nit">
          <p>By Signin Up, you agree to the Terms and conditions and privacy</p>
        </div>
      </div>
    </div>
  );
}
export default signin;
