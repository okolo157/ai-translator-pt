import React from "react";
import LanguageSelect from "./translator/LanguageSelect";
import Rating from "./translator/Rating";
import TranslateBox from "./translator/TranslateBox";
import VoiceTone from "./translator/VoiceTone";

function TranslateComponent() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        borderRadius: "10px",
        boxShadow: "'4px', '4px', '4px', '4px', 'rgba(0, 0, 0, 0.2)'",
      }}
    >
      <div>
        <p>Some</p>
        <LanguageSelect />
        <VoiceTone />
        <TranslateBox />
        <Rating />
      </div>
    </div>
  );
}

export default TranslateComponent;
