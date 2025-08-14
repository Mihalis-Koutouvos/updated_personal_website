import React from 'react'
import './Experiences.css'
import {VerticalTimeline, VarticalTimeLineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import {styles} from './styles';
import 
import {SectionWrapper} 
import {textVariant} from 

import ExperienceInfo from './ExperienceInfo';

const Experiences = () => {
  return (
    //id necessary for linking when we use hashtags
    //Child error with image, so changed to inline
    <div className='experiences' id='experiences'>
        <div className='container'>
            
            
            <div className='text-section'>
                <h2>Experiences:</h2>
                <span className='highlight-line'></span>


                
            </div>
        </div>
    </div>
  )
}

export default Experiences