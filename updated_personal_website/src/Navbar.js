import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

    //Creating handlers for clicking on the navbar
    //click is set to false, and setClick will be used to change the 
    //boolean expression
    const [click, setClick] = useState(false)
    //This is the function to change the click boolean
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)




  return (
    <div className="header">
        <nav className="navbar">
            <div className="nav-left"> </div>
            <div className="nav-center"> </div>
            <div className="nav-right"> </div>
        </nav>

    </div>
  )



}

export default Navbar