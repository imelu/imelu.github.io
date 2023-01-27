import React, { useState, useRef } from 'react';
import './index.css';
import Project from './Project.js'

export default function ProjectList({ projects }){
    return(
        projects.map(project => {
            return <Project id={project.folderName} key={project.folderName} project={project} />
        })
    )
}