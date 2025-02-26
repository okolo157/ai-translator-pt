import React from "react";
import "../../styles/LanguageSelect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faRepeat } from "@fortawesome/free-solid-svg-icons";

function LanguageSelect() {
  return (
    <div className="LanguageSelect">
      <div className="cake-parfait">
        <h2>Auto detect </h2>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div className="yoghurt">
        <div className="fruit">
          <FontAwesomeIcon icon={faRepeat} size="4" />
        </div>
        <div className="fruit-parfait">
          <h2>Yoruba</h2>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
}

export default LanguageSelect;
