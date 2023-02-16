import React, { useState, useRef, Component } from 'react';
import '../index.css';
import ProjectData from '../Data/projects.json';
import ProjectList from './ProjectList';
import Modal from './Modal'


export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedImg: null,
            currentIndex: null
        }
    }

    onClickedImg = (item, index) => {
        this.setState({currentIndex: index});
        this.setState({clickedImg: item});
    };

    onDismissedImg = () => {
        this.setState({currentIndex: null});
        this.setState({clickedImg: null});
    }

    onPrevImg = () => {
        if(this.state.currentIndex > 1){
            this.setState({currentIndex: this.state.currentIndex - 1});
        } 
        else
        {
            this.setState({currentIndex: 4});
        }
    }

    onNextImg = () => {
        if(this.state.currentIndex < 4){
            this.setState({currentIndex: this.state.currentIndex + 1});
        } 
        else
        {
            this.setState({currentIndex: 1});
        }
    }

    render(){
        return(
            <div>
                <ProjectList 
                    projects={ProjectData.projects} 
                    collaborators={ProjectData.collaborators} 
                    onClickedImg = {(item, index) => this.onClickedImg(item, index)}
                    tags={this.props.tags}
                />
                {this.state.clickedImg != null && <Modal 
                    clickedImg={this.state.clickedImg} 
                    currentIndex={this.state.currentIndex}
                    onDismissedImg={() => this.onDismissedImg()}
                    prevImg={() => this.onPrevImg()}
                    nextImg={() => this.onNextImg()}
                />}
            </div>
        )
    }
}