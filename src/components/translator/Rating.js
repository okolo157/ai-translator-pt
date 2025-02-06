import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core"
import { faHistory, faGift, faStar } from "@fortawesome/free-solid-svg-icons"
import "../../styles/Rating.css"
// import { faStar } from '../../../node_modules/@fortawesome/free-regular-svg-icons';




function Rating() {
  return (
    <div className="new">
      <div className="container">
        <div className="Star">
          Rate This tool <FontAwesomeIcon icon={faStar} color="#FFD700" />
          <FontAwesomeIcon icon={faStar} color="#FFD700" />
          <FontAwesomeIcon icon={faStar} color="#FFD700" />
          <FontAwesomeIcon icon={faStar} color="#FFD700" />
          <FontAwesomeIcon icon={faStar} color="#FFD700" />
        </div>

        <div className="Number">4.9/5</div>
        <div className="His">
          <FontAwesomeIcon icon={faHistory} color="blue" /> History
        </div>
      </div>

      <div className="Sec">
        <div className="Get">
          <FontAwesomeIcon icon={faGift} color="#FFD700" /> Get Free GPT -4
          Words
        </div>
      </div>
    </div>
  );
}

export default Rating
