import React, { Component, useState, useRef } from 'react';
import './index.css';
import Project from './Project.js'

export default class ProjectList extends Component{
    render(){
        return(
            this.props.projects.map(project => {
                return <Project 
                id={project.folderName} 
                key={project.folderName} 
                project={project} 
                onClickedImg = {(item, index) => this.props.onClickedImg(item, index)}/>
            } )
        )
    }
}