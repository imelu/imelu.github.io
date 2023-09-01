import React, { Component, useState, useRef } from 'react';
import '../index.css';
import AboutData from '../Data/about.json';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';

const myCld = new Cloudinary({
    cloud: {
        cloudName: "dehtondds",
    },
});

const projectPath = 'Portfolio/Images/';

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div id={'About'} key={'About'} ref={'About'}>
                <div className='about'>
                    <div className="column navPlaceholder"></div>
                    <div className='column aboutme'>
                        <AdvancedImage cldImg={myCld.image(`${projectPath}/About/Portrait.jpg`)} alt="1" className="portrait" />
                        <div className='description'>
                        {AboutData.about[0].description.map((d)=>{
                            return(
                                <p key={AboutData.about[0].description.indexOf(d, 0)}>
                                    {d}
                                </p>
                            )
                        } )}
                        </div>
                    </div>

                    <div className="vl"></div>

                    <div className='column cv'>
                        <p className='category'>Experience</p> 
                        {AboutData.about[0].cv[0].Experience.map((exp)=>{
                            return(
                                <p key={AboutData.about[0].cv[0].Experience.indexOf(exp, 0)} className='cvEntry'>
                                    <div className='position'>
                                        {exp.Position}
                                    </div>
                                    <div className='company'>
                                        {exp.Company}
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
                                        {edu.Institution}
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