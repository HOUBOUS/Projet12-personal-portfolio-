import React, { useState } from "react";
import classNames from "classnames";
import "../skills/Skills.css";
import skills from "../../Data/DataSkills.jsx";
import frontendIcon from "../../assets/FrontEnd.png";
import backendIcon from "../../assets/backend3.png";

const DetailsSkills = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const [backendProgress, setBackendProgress] = useState(0);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    if (menuItem === 2) {
      setBackendProgress(50); 
    }
  };

  const getColorClass = (level) => {
    if (level >= 80) return "bg-success";
    if (level >= 50) return "bg-warning";
    return "bg-blue";
  };

  const renderProgressBar = (skill) => {
    const colorClass = getColorClass(skill.level);
    return (
      <div className="progressBar">
        <span className="progress-label">{`${skill.title}: ${skill.levelText}`}</span>
        <div className="progress" style={{ marginBottom: "8px" }}>
          <div
            className={`progress-bar progress-bar-striped progress-bar-animated ${colorClass}`}
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className={`skill-sub-container-${activeMenuItem}`}>
        {activeMenuItem === 1 ? (
          renderProgressBar(skill)
        ) : (
          <>
            {activeMenuItem === 2 && renderProgressBar(skill)} 
           
          </>
        )}
      </div>
    ));
  };

  const menuItems = ["FRONT-END", "BACK-END"];
  const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;

  return (
    <div className="skill-menu">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={classNames("skill-item", {
            activeSkill: activeMenuItem === index + 1,
          })}
          onClick={() => handleMenuItemClick(index + 1)}
        >
          <h2 className="skill-title">{item}</h2>
        </div>
      ))}
      <img className="skill-icon" src={currentIcon} alt="current skill" />
      <div className="skill-sub-container">
        {renderContent(skills[activeMenuItem])}
      </div>
    </div>
  );
};

export default DetailsSkills;
