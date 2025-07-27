import React from 'react';
import './ProjectInfo.js';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {fadeIn, textVariant} from './utils/motion'


const ProjectCard = ({id, name, description, link, tags}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", id * 0.5, 0.75)}>
        test
    </motion.div>
  )
}

export default ProjectCard