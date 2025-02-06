import React from "react";
import "../../styles/VoiceTone.css";
function VoiceTone() {
  return (
    <div className="voicetone">
      <div className="tone">
        <p>Tone of Voice:</p>
      </div>
      <div className="tone-btn">
        <button className="button-1">Auto</button>
        <button className="button">Amicable</button>
        <button className="button">Casual</button>
        <button className="button">Friendly</button>
        <button className="button">Professional</button>
        <button className="button">Witty</button>
        <button className="button">Funny</button>
        <button className="button">Formal</button>
      </div>
    </div>
  );
}

export default VoiceTone;
