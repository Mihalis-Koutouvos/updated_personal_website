import React from 'react';
import './ProjectInfo.js';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {fadeIn} from './utils/motion';
import './ProjectCard.css';

const ProjectCard = ({id, name, description, link, tags}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", id * 0.5, 0.75)}>
        <Tilt 
            options={{
                max: 45,
                scale: 1,
                speed: 450}} className="project-card">
            
            
            <div className='card-intro'>
                <h3 className="text-white font-bold text-[20px]">{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>

            <div className='tag-section flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p key={tag.name} className={`${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>

        </Tilt>
    </motion.div>
  )
}

export default ProjectCard