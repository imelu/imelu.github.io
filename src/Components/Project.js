import React, { Component, useState, useRef } from 'react';
import '../index.css';
import YoutubeEmbed from "../YoutubeEmbed";
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItchIo, faYoutube, faSteam, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import ModalImage from "react-modal-image";


const myCld = new Cloudinary({
    cloud: {
        cloudName: "dehtondds",
    },
});

const projectPath = 'Portfolio/Images/';

function FaIcon(label){
    switch(label) {
        case "Itch": return (<FontAwesomeIcon icon={faItchIo}/>); 
        case "Git": return (<FontAwesomeIcon icon={faGithub}/>);
        case "Steam": return (<FontAwesomeIcon icon={faSteam}/>); 
        case "Video": return (<FontAwesomeIcon icon={faYoutube}/>); 
        case "Website": return (<FontAwesomeIcon icon={faGlobe}/>); 
        case "Discord": return (<FontAwesomeIcon icon={faDiscord}/>); 
        case "Download": return (<FontAwesomeIcon icon={faFile}/>); 
        default: return (<></>); 
    }
}

function PDF(label){
    switch(label) {
        case "../Documents/Multifarious.pdf": return (require("../Documents/Multifarious.pdf"));
        default: return (label); 
    }
}



export default class Project extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div id={this.props.project.folderName} key={this.props.project.folderName}>
                <div className="project">
                    <div className="column navPlaceholder"></div>
                    <div className="column colMain">
                        <div className="main-image">
                            {
                            this.props.project.video ? 
                            <YoutubeEmbed embedId={this.props.project.videoEmbedID} />
                            :
                            <div className="img">
                                <AdvancedImage cldImg={myCld.image(`${projectPath}${this.props.project.folderName}/Title.png`)} alt="1" />
                            </div>
                            }
                            
                        </div>
                        <div className="header">
                            <div className="title">
                                {this.props.project.name}
                            </div>
                            <div className="links">
                                    {this.props.project.links != null &&
                                        <p>
                                            {this.props.project.links.map((l)=>{
                                                return(
                                                    <a key={this.props.project.links.indexOf(l, 0)} href={PDF(l.href)} target="_blank">
                                                    {`  ${l.type}  `}
                                                    {FaIcon(l.label)}
                                                    </a>
                                                )
                                            })}
                                        </p>
                                    }
                            </div>
                        </div>
                        <div className="descriptionbox">
                            <div className='description'>
                                {this.props.project.description.map((d)=>{
                                    return(
                                        <p key={this.props.project.description.indexOf(d, 0)}>
                                            {d}
                                        </p>
                                    )
                                } )}
                            </div>
                            <div className="collaborators">
                            <p> Collaborators: </p>
                                {this.props.project.collaborators.map((c)=>{
                                    return(
                                        <p key={this.props.project.collaborators.indexOf(c, 0)}>
                                            {
                                                this.props.collaborators[0][c][0].href ? 
                                                <a href={this.props.collaborators[0][c][0].href} target="_blank">
                                                    {`${this.props.collaborators[0][c][0].label}  `}
                                                    <FontAwesomeIcon icon={faUpRightFromSquare} style={{scale: "0.85"}} />
                                                </a>
                                                :
                                                <div>
                                                    {`${this.props.collaborators[0][c][0].label}`}
                                                </div>
                                            }
                                        </p>
                                    )
                                } )}
                            </div>                    
                        </div>
                    </div>
                    <div className="column colSub">
                        <div className="sub-image">
                            <AdvancedImage cldImg={myCld.image(`${projectPath}${this.props.project.folderName}/1_small.png`)} alt="1" onClick={() => this.props.onClickedImg((`${projectPath}${this.props.project.folderName}/`), 1)} />
                            <AdvancedImage cldImg={myCld.image(`${projectPath}${this.props.project.folderName}/2_small.png`)} alt="2" onClick={() => this.props.onClickedImg((`${projectPath}${this.props.project.folderName}/`), 2)} />
                            <AdvancedImage cldImg={myCld.image(`${projectPath}${this.props.project.folderName}/3_small.png`)} alt="3" onClick={() => this.props.onClickedImg((`${projectPath}${this.props.project.folderName}/`), 3)} />
                            <AdvancedImage cldImg={myCld.image(`${projectPath}${this.props.project.folderName}/4_small.png`)} alt="4" onClick={() => this.props.onClickedImg((`${projectPath}${this.props.project.folderName}/`), 4)} />
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div ref={this.props.project.myRef} />
            </div>
        )
    }
}