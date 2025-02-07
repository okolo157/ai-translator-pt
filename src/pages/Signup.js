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
          <button className="btn">
            <FontAwesomeIcon icon={faGoogle} size="2x" className="itemxx" />
            sign up with google
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <hr style={{ width: "180px" }} />
            <p> or </p>
            <hr style={{ width: "180px" }} />
          </div>
        </div>

        <div className="cake">
          <button className="baby">
            {<FontAwesomeIcon icon={faEnvelope} size="2x" className="itemx" />}{" "}
            Sign up with Email{" "}
          </button>

          <button className="baby">
            {" "}
            <FontAwesomeIcon icon={faApple} size="2x" className="itemx" />
            Sign up with apple
          </button>
          <p>
            {" "}
            By signing up,you agree to the Terms and conditions and privacy
            policy.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
