import React, { useState, useRef } from 'react';
import './index.css';
import YoutubeEmbed from "./YoutubeEmbed";
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItchIo } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const myCld = new Cloudinary({
    cloud: {
        cloudName: "dehtondds",
    },
});

const projectPath = 'Portfolio/Images/';

function FaIcon(label){
    console.log(label);
    switch(label) {
        case "Itch": return (<FontAwesomeIcon icon={faItchIo}/>); 
        case "Video": return (<FontAwesomeIcon icon={faYoutube}/>); 
        default: return (<></>); 
    }
}

export default function Project({ project }) {
    return (
        <div id={project.folderName} key={project.folderName}>
            <div className="project">
                <div className="main-image">
                    {
                    project.video ? 
                    <YoutubeEmbed embedId={project.videoEmbedID} />
                    :
                    <div className="img">
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.folderName}/Title.png`)} alt="0" />
                    </div>
                    }
                    
                </div>
                <div className="sub-image">
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.folderName}/1.png`)} alt="1" />
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.folderName}/2.png`)} alt="2" />
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.folderName}/3.png`)} alt="3" />
                    <AdvancedImage cldImg={myCld.image(`${projectPath}${project.folderName}/4.png`)} alt="4" />
                </div>
                <div className="header">
                    <div className="title">
                        {project.name}
                    </div>
                    <div className="links">
                            {project.links != null &&
                                <div>{project.links.map((l)=>{
                                        return(
                                            <p>
                                                <a key={project.links.indexOf(l, 0)} href={l.href} target="_blank">
                                                    
                                                    {`  ${l.type}  `}
                                                    {FaIcon(l.label)}
                                                </a>
                                            </p>
                                        )
                                    })}</div>
                            }
                    </div>
                </div>
                <div className="description">
                    {project.description.map((d)=>{
                        return(
                            <p key={project.description.indexOf(d, 0)}>
                                {d}
                            </p>
                        )
                    } )}

                    <div className="collaborators">
                        <p> Collaborators: </p>
                        {project.collaborators.map((c)=>{
                            return(
                                <p>
                                    <a key={project.collaborators.indexOf(c, 0)} href={c.href} target="_blank">
                                        <FontAwesomeIcon icon={faUpRightFromSquare} style={{scale: "0.85"}} />
                                        {`  ${c.label}`}
                                    </a>
                                </p>
                            )
                        } )}
                    </div>                    
                </div>

                
                <div className="project"></div>
            </div>
            <div ref={project.myRef} />
        </div>
    )
}