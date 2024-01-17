import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "../pages/Error/Error";
import About from "../pages/about/About.jsx";
import Skills from "../pages/skills/Skills.jsx";
import Projects from "../pages/projects/Projects.jsx";
import Contact from "../pages/contact/Contact.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
