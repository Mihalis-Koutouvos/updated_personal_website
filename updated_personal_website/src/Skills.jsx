import React from 'react'
import './Skills.css';
import BallCanvas from './Ball';
import {SectionWrapper} from './SectionWrapper';
import Technologies from './Technologies';


const Skills = () => {
  return (
    //id necessary for linking when we use hashtags
    //Child error with image, so changed to inline
    <div className='skills' id='skills'>
        <div className='container'>
        
            <div className='text-section'>
                <h2>Skills:</h2>
                <span className='highlight-line'></span>
                
                <div className="flex flew-row flex-wrap justify-center gap-10">
                    {Technologies.map((skill) => (
                      <div className='w-28 h-28' key={skill.name}>
                        <BallCanvas icon={skill.icon} />
                      </div>
                    ))}
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Skills