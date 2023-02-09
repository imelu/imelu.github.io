import React, { Component, useState, useRef } from 'react';
import '../index.css';

export default class ProjectButton extends Component {
    constructor(props) {
        super(props);
    }

    handleclick = (tag, event) => {
        event.preventDefault();
        this.props.addFilter(tag);
    }

    render() {
        return(
            <div>
                <a href={`#${this.props.project.folderName}`}>
                    <button className='hover-button'>
                        <div className='hover-button--on' >{this.props.project.name}</div>
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