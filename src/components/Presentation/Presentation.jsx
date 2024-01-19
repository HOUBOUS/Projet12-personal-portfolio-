import React from "react";
import "./Presentation.css";
import CvIcon from '../../assets/curriculum-vitae.png';

function Presentation() {
  return (
    <div id="presentation">
      Hi, I'm!
        <p className="presentation-text">
        <a href="https://www.canva.com/design/DAF6O30rwZs/view" target="_blank" rel="noopener noreferrer">
        <img src={CvIcon} alt="CV Icon" className="cv-icon" />
        </a>
      </p>
     
      <h1>Houda Bouslama!</h1>
      <div id="my-presentation">
        <span id="my-presentation-one"></span>

        <span id="my-presentation-two"></span>
      </div>

      <h2>
        Intégrateur web <br />
        Developpeuse Front-End
      </h2>
    </div>
  );
}

export default Presentation;
