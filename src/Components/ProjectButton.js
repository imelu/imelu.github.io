import React, { Component, useState, useRef } from 'react';
import '../index.css';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';

const myCld = new Cloudinary({
    cloud: {
        cloudName: "dehtondds",
    },
});

const projectPath = 'https://res.cloudinary.com/dehtondds/image/upload/v1/Portfolio/Images/';

export default class ProjectButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundUrl: './4.png'
        }
    }

    handleclick = (tag, event) => {
        event.preventDefault();
        this.props.addFilter(tag);
    }

    render() {
        return(
            <div>
                <a href={`#${this.props.project.folderName}`}>
                    <button className='hover-button' style={{'--hover--image': `url(${projectPath + this.props.project.folderName + '/banner.png'})`}}>
                        <div className='hover-button--on' >{this.props.project.name} </div>
                        <div className='tags'>
                            {this.props.project.tags.map((t)=>{
                                return(
                                    <div onClick={(event) => this.handleclick(t, event)} className="tag" key={this.props.project.tags.indexOf(t, 0)}>{`${t}`}</div>
                                )
                            })}
                        </div>
                    </button>
                </a>
            </div>
        )
    }
}