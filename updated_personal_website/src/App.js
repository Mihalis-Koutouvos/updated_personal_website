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
import PageLoader from './PageLoader';
import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const timer = setTimeout( () => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
 }, []);

 if (loading) {
    return <PageLoader />;
  }


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
