import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import ProjectInfo from './ProjectInfo';

const Projects = () => {
  return (
    //id necessary for linking when we use hashtags
    //Child error with image, so changed to inline
    <div className='projects' id='projects'>
        <div className='container'>
        
            <div className='text-section'>
                <h2>Projects:</h2>
                <span className='highlight-line'></span>
                
                <div className='card-section'>
                    {ProjectInfo.map((project, id) => (
                        <ProjectCard 
                            key={'project-${id}'}
                            index={id}
                            {...project}
                        />
                    ))}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects