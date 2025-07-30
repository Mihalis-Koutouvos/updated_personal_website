import './App.css';
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Projects from "./Projects";
import Interests from "./Interests";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About /> 
      <Experiences />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;
