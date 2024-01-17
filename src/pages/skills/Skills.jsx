import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import DetailsSkills from "../skills/DetailsSkills";
import "../skills/Skills.css";

function Skills() {
  return (
    <div>
      <Avatar page="skills" />

      <DetailsSkills />
      {/* <section className="conatiner-progressSkills">
        <div className="progressBar">
          <span className="progress-label">CSS: excellent!</span>
          <div className="progress" style={{ marginBottom: "10px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        <div className="progressBar">
          <span className="progress-label">HTML: excellent!</span>
          <div className="progress" style={{ marginBottom: "10px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        <div className="progressBar"> 
        <span className="progress-label">JavaScript: Medium!</span>
        <div className="progress" style={{ marginBottom: "10px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          ></div>
          </div>
          </div>
          <div className="progressBar">
          <span className="progress-label">React: Well!</span>
          <div className="progress" style={{ marginBottom: "10px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        
      </section> */}
    </div>
  );
}

export default Skills;
