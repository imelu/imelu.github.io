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
            <div>
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
                            <div>
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
        );
    }
}