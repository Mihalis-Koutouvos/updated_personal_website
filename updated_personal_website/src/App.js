import './App.css';
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from ".Skills";
import Projects from ".Projects";
import Interests from ".Interests";
import Contact from ".Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About /> 
      <Skills />
      <Projects />
      <Interests />
      <Contact />

      
    </div>
  );
}

export default App;
