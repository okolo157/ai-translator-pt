import {
  faAndroid,
  faAppStoreIos,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="cookies">
        2025 BUTTERFLY EFFECT PTE.LTD.
        <br />
        CHATGPT is a registered trademark of OPENAI OPCO,LLC.
      </div>

      <div className="icon-container">
        <a
          style={{ display: "flex", alignItems: "center" }}
          target="_blank"
          rel="noreferrer"
          href="https://macos-web.app/"
        >
          <FontAwesomeIcon icon={faAppStoreIos} size="2x" className="itemx" />
          macOS
        </a>
        <a
          style={{ display: "flex", alignItems: "center" }}
          target="_blank"
          rel="noreferrer"
          href="https://windows.com/stopcode"
        >
          <FontAwesomeIcon icon={faWindows} size="2x" className="itemx" />
          windows
        </a>
        <a
          style={{ display: "flex", alignItems: "center" }}
          target="_blank"
          rel="noreferrer"
          href="https://www.apple.com/ios/ios-18/"
        >
          <FontAwesomeIcon icon={faApple} size="2x" className="itemx" />
          ios
        </a>
        <a
          style={{ display: "flex", alignItems: "center" }}
          target="_blank"
          rel="noreferrer"
          href="https://www.android.com/"
        >
          <FontAwesomeIcon icon={faAndroid} size="2x" className="itemx" />
          Android
        </a>
      </div>
    </div>
  );
}
export default Footer;
