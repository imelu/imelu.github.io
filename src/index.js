import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {v4 as uuid} from 'uuid'
import ProjectList from './ProjectList';
import Modal from './Components/Modal'

import ProjectData from './Data/projects.json';


function App() {
    return(
        <>
            <Navigation />
            <Projects />
        </>
    )
}

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div className="sideBar"> 
                    <a href='#Home'>
                        <button className='hover-button'>
                            <div className='hover-button--on'>Luca Imesch</div>
                        </button>
                    </a>

                    {ProjectData.projects.map((p)=>{
                        return(
                            <a key={ProjectData.projects.indexOf(p, 0)} href={`#${p.folderName}`}>
                                <button className='hover-button'>
                                    <div className='hover-button--on'>{p.name}</div>
                                </button>
                            </a>
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
        console.log(`${item}${index}.png`)
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
                <ProjectList projects={ProjectData.projects} onClickedImg = {(item, index) => this.onClickedImg(item, index)} />
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
