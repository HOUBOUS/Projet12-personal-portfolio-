import React, { useState } from "react";
import classNames from "classnames";
import projects from "../../Data/DataProjects";
import GithubIcon from '../../assets/githubIcon.png';
import WebSite from '../../assets/webSite.png';
import "../projects/Projects.css";

const DetailsProjects = () => {
  const [activeProject, setActiveProject] = useState(1);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title} className="title-img"></img>
        <div className="project-description">{project.description}</div>
        <div className="link-container">
        <span>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
            <img src={GithubIcon} alt="icon of github" className="icon-img" />
          </a>
          </span>
          <span>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
            <img src={WebSite} alt="icon of web site" className="icon-img"/>
          </a>
          </span>
        </div>
      </div>
    ));
  };

  const projectItems = ["PROJECT Ohmyfood", "PROJECT Sophie Bluel", "PROJECT Argent Bank"];

  return (
    <div className="project-details">
      <div className="project-items-container">
        {projectItems.map((item, index) => (
          <div
            key={index}
            className={classNames("project-item", {
              activeProject: activeProject === index + 1,
            })}
            onClick={() => handleProjectClick(index + 1)}
          >
            <h2 className="title">{item}</h2>
          </div>
        ))}
      </div>
      <div className="project-sub-container">
        {renderContent([projects[activeProject]])}
      </div>
    </div>
  );
};

export default DetailsProjects;
