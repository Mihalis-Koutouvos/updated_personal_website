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


            <a href='/' className="moment-quote">A Moment with Mihalis</a>

            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li> 
                    <a href="/" onClick={closeMenu}>About</a>
                </li>

                <li> 
                    <a href="/" onClick={closeMenu}>Skills</a>
                </li>

                <li> 
                    <a href="/" onClick={closeMenu}>Projects</a>
                </li>

                <li> 
                    <a href="/" onClick={closeMenu}>Interests</a>
                </li>

                <li> 
                    <a href="/" onClick={closeMenu}>Contact</a>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar