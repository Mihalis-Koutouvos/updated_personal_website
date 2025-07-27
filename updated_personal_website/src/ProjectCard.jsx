import React from 'react';
import './ProjectInfo.js';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {fadeIn, textVariant} from './utils/motion';
import SectionWrapper from './SectionWrapper.jsx';

const ProjectCard = ({id, name, description, link, tags}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", id * 0.5, 0.75)}>
        <Tilt 
            options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
            className="bg-tertiary p-5 rounded-2xl sm:2-[360px] w-full">
            test
        </Tilt>
    </motion.div>
  )
}

export default ProjectCard