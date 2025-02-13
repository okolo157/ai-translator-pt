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
        <div className="nut">
          <button className="tom">
            <label for="username">USERNAME</label>
            <input className="oyin" type="text" placeholder="username"></input>
          </button>
        </div>
        <div className="pit">
          <button className="play">
            <label for="Password">PASSWORD</label>
            <input className="pin" type="text" placeholder="password"></input>
          </button>
        </div>
        <button className="pen" type="signin">SIGNIN</button>
        <div className="nit">
          <p>By Signin Up, you agree to the Terms and conditions and privacy</p>
        </div>
      </div>
    </div>
  );
}
export default signin;
