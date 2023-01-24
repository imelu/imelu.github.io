import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {v4 as uuid} from 'uuid'
import ProjectList from './ProjectList';


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
                    <a href='#0'>
                        <button className='hover-button'>
                            <div className='hover-button--on'>Home</div>
                        </button>
                    </a>
                    <a href='#1'>
                        <button className='hover-button'>
                            <div className='hover-button--on'>Amarillo Harbor</div>
                        </button>
                    </a>
                    <a href='#2'>
                        <button className='hover-button'>
                            <div className='hover-button--on'>OVERDOG</div>
                        </button>
                    </a>
                </div>
            </div>
        );
    }
}

function Projects(){
    const [projects] = useState([{
        id : 1,
        videourl : "NKnUlTGhVBo",
        title : "Amarillo Harbor",
        text : "The goal of the Project was to simulate the first few minutes of gameplay of a first person game. The Project was made in collaboration with Dana Senn and Yoshi Zigerli. All 3D Models were made in Blender, which were then imported into Unity, where we put everything together to record the final video. My part consisted of modelling the clock tower, interior rooms and the port, as well as the post processing and lighting in unity including the animation of the camera which recorded the video.",
        projectName : "AmarilloHarbor"
    },
    {
        id : 2,
        videourl : "ZvsHC4BV-0g",
        title : "OVERDOG",
        text : "The goal of the Project was to simulate the first few minutes of gameplay of a first person game. The Project was made in collaboration with Dana Senn and Yoshi Zigerli. All 3D Models were made in Blender, which were then imported into Unity, where we put everything together to record the final video. My part consisted of modelling the clock tower, interior rooms and the port, as well as the post processing and lighting in unity including the animation of the camera which recorded the video.",
        projectName : "Overdog"
    }
]) 

    return(
        <ProjectList projects={projects}  />
    )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
