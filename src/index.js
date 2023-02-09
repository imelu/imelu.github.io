import React, { useState, useRef, Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {v4 as uuid} from 'uuid'
import ProjectList from './Components/ProjectList';
import Modal from './Components/Modal'
import ProjectButton from './Components/ProjectButton';
import Filters from './Components/Filters';

import ProjectData from './Data/projects.json';
import { computeHeadingLevel } from '@testing-library/react';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            filteredTags: []
        }
    }

    onAddFilter = (tag) => {
        if(this.state.filteredTags.includes(tag)) return;
        this.setState(state => {
            const list = state.filteredTags.push(tag)

            return {
                list,
                value: '',
            };
        })
    }

    onRemoveFilter = (tag) => {
        var index = this.state.filteredTags.indexOf(tag);
        
        this.setState(state => {
            const list = state.filteredTags.splice(index, 1);
    
            return {
                list,
                value: '',
            };            
        })
    }

    render(){
        return(
            <>
                <Navigation addFilter={(tag) => this.onAddFilter(tag)} tags={this.state.filteredTags} removeFilter={(tag) => this.onRemoveFilter(tag)}/>
                <Projects tags={this.state.filteredTags} />
            </>
        )
    }
}

class Navigation extends React.Component {
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

class Projects extends React.Component {
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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
