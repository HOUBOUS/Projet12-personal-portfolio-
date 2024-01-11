import React from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";

import Error from "../pages/Error/Error";
import About from "../pages/about/About.jsx";
import Skills from "../pages/skills/Skills.jsx";
import Projects from "../pages/projects/Projects.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Background from "./Background/Background.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Fragment>
            <Background />
            <About />
          </React.Fragment>
        }
      />
      <Route path="/skills" element={
          <React.Fragment>
            <Background />
            <Skills />
          </React.Fragment>
        }/>
      <Route path="/projects" element={
          <React.Fragment>
            <Background />
            <Projects />
          </React.Fragment>
        } 
      />
      <Route path="/contact" 
      element={
        <React.Fragment>
          <Background />
          <Contact />
        </React.Fragment>
      } />

      <Route path="*" 
      element={
        <React.Fragment>
          <Background />
          <Error />
        </React.Fragment>
      }/>
    </Routes>
  );
}
export default App;
