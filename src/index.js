import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {v4 as uuid} from 'uuid'
import ProjectList from './ProjectList';

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
                            <div className='hover-button--on'>Home</div>
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

function Projects(){
    return(
        <ProjectList projects={ProjectData.projects}  />
        
    )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
