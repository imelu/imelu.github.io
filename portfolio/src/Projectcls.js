import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import YoutubeEmbed from "./YoutubeEmbed";
import uuidv4 from 'uuid'

class Project extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    render(){
        return (
            <div>
                
                <div className="project">
                    <div className="main-image">
                        <YoutubeEmbed embedId={this.props.videourl} />
                    </div>
                    <div className="sub-image">
                        <img src={this.props.sideImage1} alt="pipapo" />
                        <img src={this.props.sideImage2} alt="pipapo" />
                        <img src={this.props.sideImage3} alt="pipapo" />
                        <img src={this.props.sideImage4} alt="pipapo" />
                    </div>
                    <div className="project-title">
                        {this.props.title}
                    </div>
                    <div className="description">
                        <p>
                            {this.props.text}
                        </p>
                    </div>
                    <div className="project"></div>
                </div>
                <div ref={this.myRef} />
            </div>
        );
    }
}

export default Project;