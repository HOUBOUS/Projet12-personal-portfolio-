import React from "react";
import "../App.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Background from'../components/Background/Background.jsx'
import Router from "../Router/Router.jsx";
import Presentation from "./Presentation/Presentation.jsx";


function App() {
  return (
      <>

      <Navbar />
      <Presentation/>
      <Router />
      <Background />

      </>
  );
}
export default App;
