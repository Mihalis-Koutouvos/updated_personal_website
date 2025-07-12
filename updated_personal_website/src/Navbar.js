import React, { useState } from 'react'
import {Link} from 'react-scroll'
import "./Navbar.css"
//rafce

const Navbar = () => {

    //Creating handlers for clicking on the navbar
    //click is set to false, and setClick will be used to change the 
    //boolean expression
    const [click, setClick] = useState(false)
    //This is the function to change the click boolean
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)




    //Conventional to use unordered lists for navbar elements
  return (
    <div className="header">
        <nav className="navbar">

            {/* Even though the smooth scroll works, we need to be able to see the title of each section, so we adjust the offset.*/}
            <Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>A Moment with Mihalis</Link>

            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li> 
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
                </li>

                <li> 
                    <Link to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills</Link>
                </li>

                <li> 
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Projects</Link>
                </li>

                <li> 
                    <Link to="interests" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Interests</Link>
                </li>

                <li> 
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar