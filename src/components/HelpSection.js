import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "../styles/HelpSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HelpSection() {
  return (
    <div className="container1">
      <div className="containeer2">
        <div className="light">
          <h1>We're here to help!</h1>
        </div>
        <div className="kind">
          <p>
            Choosing the right plan can be a big decision, and we want to make
            sure you find the one that fits your needs best.<br></br> If you
            have any questions or if somethings not covered in our FAQ, were
            here for you. Just reach out in the way thats easiest for you!
          </p>
        </div>
        <div className="nit">
          <FontAwesomeIcon size="3x" icon={faMessage} />
          <div className="LEFT">
            <p style={{ textAlign: "left" }}>Send us a message</p>
            <p>We usually get back to you within a few hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
