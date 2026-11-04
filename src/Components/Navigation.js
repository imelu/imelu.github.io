import React, { Component, useState, useRef } from 'react';
import ProjectButton from './ProjectButton';
import Filters from './Filters';
import '../index.css';
import ProjectData from '../Data/projects.json';

export default class Navigation extends Component {
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
            <>
            <nav className="mobile-navigation" aria-label="Portfolio navigation">
                <a href="#About">Luca Imesch</a>
                <select aria-label="Jump to project" defaultValue="" onChange={(event) => {
                    if (event.target.value) window.location.hash = event.target.value;
                    event.target.value = '';
                }}>
                    <option value="" disabled>Jump to project</option>
                    {ProjectData.projects.filter(this.containsTag).map(project => (
                        <option key={project.folderName} value={project.folderName}>{project.name}</option>
                    ))}
                </select>
                <select aria-label="Filter projects" defaultValue="" onChange={(event) => {
                    this.props.addFilter(event.target.value);
                    event.target.value = '';
                }}>
                    <option value="" disabled>Filter projects</option>
                    {[...new Set(ProjectData.projects.flatMap(project => project.tags))].map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
                {this.props.tags.length > 0 && <Filters tags={this.props.tags} removeFilter={this.props.removeFilter} />}
            </nav>
            <div className="navigation">
                <a href='#About'>
                    <button className='about-button'>
                        <div className='about-button--on'>Luca Imesch</div>
                    </button>
                </a>
                <div className="sideBar Flipped"> 
                {this.props.tags.length > 0 && <Filters 
                tags={this.props.tags}
                removeFilter={(tag) => this.props.removeFilter(tag)}
                />}
                    {ProjectData.projects.map((p)=>{
                        return(
                            <div key={p.folderName}>
                                {this.containsTag(p) && <ProjectButton 
                                key={ProjectData.projects.indexOf(p, 0)} 
                                projects={ProjectData.projects} 
                                project={p}
                                addFilter = {(tag) => this.props.addFilter(tag)}
                                />}
                            </div>
                        )
                    })}
                </div>
            </div>
            </>
        );
    }
}
