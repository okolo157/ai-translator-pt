import React from "react";
import "../styles/Selectplan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import {
  faPlane,
  faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";

function Selectplan() {
  return (
    <div className="wrapper-container">
      <div className="red">
        <h1>PRICING</h1>
        <p>Choose the plan that works for you.</p>
      </div>
      <div className="mother">
        <div className="cookiess">
          <div className="newiconcontainer">
            <FontAwesomeIcon icon={faStar} size="2x" />
            Free
          </div>
          <h1>$0</h1>
          <ul className="cakes">
            <li>10 credits per month</li>
            <li>Basic support</li>
            <li>Access to basic features</li>
          </ul>
          <button className="btn-btn">Subscribe</button>
          <p>ideal for indviduals who want to try out our service.</p>
        </div>
        <div className="cookiess">
          <div className="newiconcontainer">
            <FontAwesomeIcon icon={faPlane} size="2x" />
            pro
          </div>
          <h1>
            $19.99/<span style={{fontSize:"15px"}}>month</span>
          </h1>
          <ul className="cakes">
            <li>Unlimited credits</li>
            <li>Priority support</li>
            <li>Access to all features </li>
          </ul>
          <button className="btn-btn">Subscribe</button>
          <p>perfect for professional who need more credits and support.</p>
        </div>
        <div className="cookiess">
          <div className="newiconcontainer">
            <FontAwesomeIcon icon={faSprayCanSparkles} size="2x" />
          </div>
          <h1>contact us</h1>
          <ul className="cakes">
            <li> Custom Solutions</li>
            <li>Dedicated Support</li>
            <li> Access to all features</li>
          </ul>
          <button className="btn-btn">Subscribe</button>
          <p>Best for large organization with custom needs</p>
        </div>
      </div>
    </div>
  );
}

export default Selectplan;
