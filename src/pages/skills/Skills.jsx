import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import DetailsSkills from "../skills/DetailsSkills";
import "../skills/Skills.css";

function Skills() {
  return (
    <div>
      <Avatar page="skills" />

      <DetailsSkills />
      
    </div>
  );
}

export default Skills;
