import React from 'react'
import './About.css'

const About = () => {
  return (
    //id necessary for linking when we use hashtags
    //Child error with image, so changed to inline
    <div className='about' id='about'>
        <div className='container'>
            
            <img src='/images/profile-pic.jpeg' alt='Mihalis' />
            <div className='text-section'>
                <h2>About:</h2>
                <span className='highlight-line'></span>
                <p>Hello! My name is Mihalis Koutouvos, and I am a current third-year student at Northeastern University from Ashland, Massachusetts. I am pursuing a Bachelor’s of Science in computer science with a concentration in artificial intelligence and minoring in math. I am intrigued by artificial intelligence, 
                    data engineering, data analytics, data science, machine learning, natural-language processing, and cloud storage. With my diligence, perseverance, and problem-solving capabilities, I have been able to launch myself into the world of computers, trying out new programming languages and applying the concepts I learn along the 
                    way to the projects that I or my teams build. However, as I continue to expand my knowledge in the fields of computer science and math, I plan on adding value to any company that I work for, especially since I work well in fast-paced environments with constantly-evolving elements. 
                    In terms of coding and markup languages, I enjoy working in Python, MySQL, React.js, HTML, CSS, Java, and JavaScript. On top of these, I am advancing my knowledge in using the PyTorch and Anaconda. 
                    Some of my personal interests include competitive swimming exploring national parks, distance running, and cooking Mediterranean food.</p>
                    
                <p>I am also extremely goal-oriented and driven, so when I have something in mind that needs to be accomplished such as a major programming assignment or running a half marathon, I know go around learning what I need to do to reach and then accomplish those goals.</p>
                <div className="button-container">
                  <button className="button">Explore</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About