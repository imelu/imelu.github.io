import React, { useState, useRef } from 'react';
import './index.css';
import YoutubeEmbed from "./YoutubeEmbed";
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItchIo } from '@fortawesome/free-brands-svg-icons'


const myCld = new Cloudinary({
    cloud: {
        cloudName: "dehtondds",
    },
});

const projectPath = 'Portfolio/Images/';


export default function Project({ project }) {
    return (
        <div id={project.id} key={project.id}>
            <div className="project">
                <div className="main-image">
                    <YoutubeEmbed embedId={project.videourl} />
                </div>
                <div className="sub-image">
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.projectName}/1.png`)} alt="1" />
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.projectName}/2.png`)} alt="2" />
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.projectName}/3.png`)} alt="3" />
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.projectName}/4.png`)} alt="4" />
                </div>
                <div className="project-title">
                    {project.title}
                </div>
                <div className="description">
                    <p>
                        {project.text}
                    </p>
                </div>
                <div className="links">
                    blablas
                    <FontAwesomeIcon icon={faItchIo} />
                    bliblu
                    <FontAwesomeIcon icon={faItchIo} />
                </div>
                <div className="project"></div>
            </div>
            <div ref={project.myRef} />
        </div>
    )
}