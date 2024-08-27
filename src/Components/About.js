import React, { Component, useState, useRef } from 'react';
import '../index.css';
import AboutData from '../Data/about.json';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Pdf from '../Documents/CV_LucaImesch.pdf';

const myCld = new Cloudinary({
    cloud: {
        cloudName: "dehtondds",
    },
});

const projectPath = 'Portfolio/Images/';

function FaIcon(label){
    switch(label) {
        case "Linkedin": return (<FontAwesomeIcon icon={faLinkedin} style={{scale: "1.55"}}/>); 
        case "Git": return (<FontAwesomeIcon icon={faGithub} style={{scale: "1.55"}}/>);
        default: return (<></>); 
    }
}

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div id={'About'} key={'About'} ref={'About'}>
                <div className='about'>
                    <div className="navPlaceholder"></div>
                    <div className='columnCV aboutme'>
                        <div className="portrait">
                            <AdvancedImage cldImg={myCld.image(`${projectPath}/About/Portrait_cropped.jpg`)} alt="1" className = "img"/>
                        </div>
                        <div className='header'>
                            {AboutData.about[0].header.map((d)=>{
                                return(
                                    <p key={AboutData.about[0].header.indexOf(d, 0)}>
                                        {d}
                                    </p>
                                )
                            } )}
                        </div>
                        <div className='description'>
                            {AboutData.about[0].description.map((d)=>{
                                return(
                                    <p key={AboutData.about[0].description.indexOf(d, 0)}>
                                        {d}
                                    </p>
                                )
                            } )}
                        </div>
                        <div className='contact'>
                            {AboutData.about[0].contact.map((d)=>{
                                return(
                                    <p key={AboutData.about[0].contact.indexOf(d, 0)}>
                                        {d + ' '}
                                    </p>
                                )
                            } )}
                            <div className='mail'>
                                {AboutData.about[0].contactMail.map((d)=>{
                                    return(
                                        <p key={AboutData.about[0].contactMail.indexOf(d, 0)}>
                                            {/*<ButtonMailto label = {d} mailto="mailto:luca-imesch@hotmail.ch"></ButtonMailto>*/}
                                            <a href = 'mailto:luca-imesch@hotmail.ch'>{d}</a>
                                        </p>
                                    )
                                } )}
                            </div>
                        </div>
                        <div className='links'>
                            {AboutData.about[0].links.map((l)=>{
                                return(
                                    <p key={AboutData.about[0].links.indexOf(l, 0)}>
                                        <a key={AboutData.about[0].links.indexOf(l, 0)} href={l.href} target="_blank">
                                            {' '}
                                            {FaIcon(l.label)}
                                            {'     '}
                                        </a>
                                    </p>
                                )
                            } )}
                        </div>
                    </div>

                    {/*<div className="vl"></div>*/}

                    <div className='columnCV cv'>
                        <a key="resume" href={Pdf} target="_blank" className='header'>
                            {`Resume `}
                            <FontAwesomeIcon icon={faUpRightFromSquare} style={{scale: "0.85"}} />
                        </a>
                        <p className='category'>Experience</p> 
                        {AboutData.about[0].cv[0].Experience.map((exp)=>{
                            return(
                                <p key={AboutData.about[0].cv[0].Experience.indexOf(exp, 0)} className='cvEntry'>
                                    <div className='position'>
                                        {exp.Position}
                                    </div>
                                    <div className='company'>
                                        <a key={AboutData.about[0].cv[0].Experience.indexOf(exp, 0)} href={exp.href} target="_blank">
                                            {exp.Company}
                                        </a>
                                    </div>
                                    <div className='durtation'>
                                        {exp.Duration}
                                    </div>
                                </p>
                            )
                        } )}

                        <p className='category'>Education</p> 
                        {AboutData.about[0].cv[0].Education.map((edu)=>{
                            return(
                                <p key={AboutData.about[0].cv[0].Education.indexOf(edu, 0)} className='cvEntry'>
                                    <div className='position'>
                                        {edu.Degree}
                                    </div>
                                    <div className='company'>
                                        <a key={AboutData.about[0].cv[0].Education.indexOf(edu, 0)} href={edu.href} target="_blank">
                                            {edu.Institution}
                                        </a>
                                    </div>
                                    <div className='durtation'>
                                        {edu.Duration}
                                    </div>
                                </p>
                            )
                        } )}
                        
                        {AboutData.about[0].cv[0].IncludeSkills == "y" &&
                                        
                        <div>
                        <p className='category'>Languages</p> 
                        {AboutData.about[0].cv[0].Languages.map((lang)=>{
                            return(
                                <p key={AboutData.about[0].cv[0].Languages.indexOf(lang, 0)} className='skill'>
                                    {lang.Language}
                                    <AdvancedImage cldImg={myCld.image(`${projectPath}/Scoring/${lang.Score}.png`)} alt="1" className="score" />
                                </p>
                            )
                        } )}

                        <p className='category'>Skills</p> 
                        {AboutData.about[0].cv[0].Skills.map((skills)=>{
                            return(
                                <p key={AboutData.about[0].cv[0].Skills.indexOf(skills, 0)} className='skill'>
                                    {skills.Skill}
                                    <AdvancedImage cldImg={myCld.image(`${projectPath}/Scoring/${skills.Score}.png`)} alt="1" className="score" />
                                </p>
                            )
                        } )}

                        <p className='category'>Programming Languages</p> 
                        {AboutData.about[0].cv[0].ProgrammingLanguages.map((lang)=>{
                            return(
                                <p key={AboutData.about[0].cv[0].ProgrammingLanguages.indexOf(lang, 0)} className='skill'>
                                    {lang.Language}
                                    <AdvancedImage cldImg={myCld.image(`${projectPath}/Scoring/${lang.Score}.png`)} alt="1" className="score" />
                                </p>
                            )
                        } )}

                        <p className='category'>Programs</p> 
                        {AboutData.about[0].cv[0].Programs.map((prog)=>{
                            return(
                                <p key={AboutData.about[0].cv[0].Programs.indexOf(prog, 0)} className='skill'>
                                    {prog.Program}
                                    <AdvancedImage cldImg={myCld.image(`${projectPath}/Scoring/${prog.Score}.png`)} alt="1" className="score" />
                                </p>
                            )
                        } )}
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}