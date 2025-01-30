import React from "react";
import "../FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function FAQ() {
  return (
    <div className="newcontainer">
      <div className="light">
        <h1>FAQs</h1>
        <ul>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p> What is monica Ai Translator and how does it work </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p> is Monica Ai Translator free to use </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p> What language does Monica Ai Translator support? </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>
              {" "}
              How does monica Ai Translator compare to other
              <br /> Translator tools?
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>
              {" "}
              How accurate is monica Ai Translator compared to <br /> humam
              Translators{" "}
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>
              {" "}
              How does monica Ai Translator ensure <br /> Translation accuracy?{" "}
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default FAQ;
