import React from 'react'
import './Footer.css';
//rafce

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <ul className="list">
          <li className='nav-item'>
            <a href='#about'>About</a>

          </li>

          <li className='nav-item'>
            <a href='#experiences'>Experiences</a>

          </li>

          <li className='nav-item'>
            <a href='#skills'>Skills</a>

          </li>

          <li className='nav-item'>
            <a href='#projects'>Projects</a>

          </li>

          <li className='nav-item'>
            <a href='#interests'>Interests</a>

          </li>

          <li className='nav-item'>
            <a href='#contact'>Contact</a>

          </li>

        </ul>

        <div className='final-info' style={{color: 'white'}}>
          <span className='line'></span>
            Copyright © 2025 Mihalis Koutouvos
        </div>

      </div>
    </div>
  )
}

export default Footer