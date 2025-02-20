import React, { useState } from "react";
import "../../styles/translate.css";
import axios from "axios";

function TranslateBox() {
  const [textTotranslate, setTextToTranslate] = useState("");
  const [response, setResponse] = useState("");

  const handleTranslate = async (e) => {
    try {
      const response = await axios.post("http://localhost:5000/translate", {
        textTotranslate,
      });
      setResponse(response.data);
      alert("Sent successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="insider">
      <div className="other">
        {/* <span>Type or taste here to translate</span> */}
        <input
          onChange={(e) => setTextToTranslate(e.target.value)}
          type="text"
        />
        <div className="apart">
          <button className="child">GTP-40 mini</button>
          <button onClick={handleTranslate} className="son">
            AI translate
          </button>
        </div>
      </div>

      <div className="other2">{response}</div>
    </div>
  );
}

export default TranslateBox;
