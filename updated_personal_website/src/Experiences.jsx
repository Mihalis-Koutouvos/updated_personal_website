import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import {SectionWrapper} from './SectionWrapper';
import {textVariant} from '../utils/motion';
import './Experiences.css';
import ExperienceInfo from './ExperienceInfo';
import ExperienceCard from './ExperienceCard';

const Experiences = () => {
  return (
    //id necessary for linking when we use hashtags
    //Child error with image, so changed to inline
    <div className='experiences' id='experiences'>
        <div className='container'>
            
            <div className='text-section'>
                <h2>Experiences:</h2>
                <span className='highlight-line'></span>
                
                <>
                  <motion.div variants={textVariant()}>
                      <p>Here is some of my work experience!</p>

                  </motion.div>

                  <div className="mt-20 flex flex-col">
                    <VerticalTimeline>
                      {ExperienceInfo.map((experience, index) => (
                        <ExperienceCard
                          key={`experience-${index}`}
                          experience={experience}
                          />
                      ))}
                    </VerticalTimeline>
                  </div>
                </>



                
            </div>
        </div>
    </div>
  )
}

export default SectionWrapper(Experiences, 'work')