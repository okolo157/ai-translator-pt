import React from "react";
import LanguageSelect from "./translator/LanguageSelect";
import Rating from "./translator/Rating";
import TranslateBox from "./translator/TranslateBox";
import VoiceTone from "./translator/VoiceTone";

function TranslateComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "1000px",
          margin: "auto",
          borderRadius: "10px",
          height: "500px",
          backgroundColor: "red",
          boxShadow: "'4px', '4px', '4px', '4px', 'rgba(0, 0, 0, 0.2)'",
        }}
      >
        <LanguageSelect />
        {/* <VoiceTone />
        <TranslateBox />
        <Rating /> */}
      </div>
    </div>
  );
}

export default TranslateComponent;
