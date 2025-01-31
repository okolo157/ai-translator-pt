import React from "react";
import LanguageSelect from "./translator/LanguageSelect";
import Rating from "./translator/Rating";
// import TranslateBox from "./translator/TranslateBox";
import VoiceTone from "./translator/VoiceTone";
import "../styles/TranslateComponent.css";

function TranslateComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          width: "1000px",
          margin: "auto",
          borderRadius: "10px",
          height: "500px",
        }}
        className="card"
      >
        <LanguageSelect />
        <VoiceTone />

        {/* <VoiceTone />
        <TranslateBox />
        {/* <Rating /> */}
      </div>
      <Rating />
    </div>
  );
}

export default TranslateComponent;
