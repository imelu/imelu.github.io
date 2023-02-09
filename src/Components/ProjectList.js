import React, { Component, useState, useRef } from 'react';
import '../index.css';
import Project from './Project.js'

export default class ProjectList extends Component{
    constructor(props) {
        super(props);
    }
    
    containsTag = (project) => {
        var contains = false;
        project.tags.map(tag => {
            if(this.props.tags.includes(tag)){
                contains = true;
            }
        })
        if(this.props.tags.length === 0) contains = true;
        return contains;
    }
    
    render(){
        return(
            this.props.projects.map(project => {
                return (
                    <div key={project.folderName} >
                        {this.containsTag(project) && <Project 
                        id={project.folderName} 
                        key={project.folderName} 
                        project={project} 
                        collaborators={this.props.collaborators}
                        onClickedImg = {(item, index) => this.props.onClickedImg(item, index)}/>}
                    </div>
                )
            } )
        )
    }
}