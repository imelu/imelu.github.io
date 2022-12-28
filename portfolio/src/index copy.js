import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import YoutubeEmbed from "./YoutubeEmbed";
import uuidv4 from 'uuid'
import Project from './Project.js'
import ProjectList from './ProjectList';

class Navigation extends React.Component {
    
    handleClick(){
        console.log("pressed", 5);
    }

    render(){
        //const project = null;

        //<ProjectManager/>
        return(
            <div>
                <div className="sideBar"> 
                    <button className='hover-button'
                        onClick={this.handleClick()}
                    >
                        <div className='hover-button--on'>Home</div>
                    </button>
                    <button className='hover-button'>
                        <div className='hover-button--on'>Project1</div>
                    </button>
                    <button className='hover-button'>
                        <div className='hover-button--on'>Project2</div>
                    </button>
                </div>
                <Projects />
            </div>
        );
    }
}

function Projects(){
    const [projects] = useState([{
        videourl : "NKnUlTGhVBo",
        title : "Button Harbor",
        text : "The goal of the Project was to simulate the first few minutes of gameplay of a first person game. The Project was made in collaboration with Dana Senn and Yoshi Zigerli. All 3D Models were made in Blender, which were then imported into Unity, where we put everything together to record the final video. My part consisted of modelling the clock tower, interior rooms and the port, as well as the post processing and lighting in unity including the animation of the camera which recorded the video.",
        sideImage1 : './Images/21.png',
        sideImage2 : './Images/7.png',
        sideImage3 : './Images/15.png',
        sideImage4 : './Images/14.png'
    }]) 

    return(
        <ProjectList projects={projects}  />
    )
}


class ProjectManager extends React.Component {

    renderProject(){
        return(
            <div>
                {<Project
                    videourl = "NKnUlTGhVBo"
                    title = "Button Harbor"
                    text = "The goal of the Project was to simulate the first few minutes of gameplay of a first person game. The Project was made in collaboration with Dana Senn and Yoshi Zigerli. All 3D Models were made in Blender, which were then imported into Unity, where we put everything together to record the final video. My part consisted of modelling the clock tower, interior rooms and the port, as well as the post processing and lighting in unity including the animation of the camera which recorded the video."
                    sideImage1 = {require('./Images/21.png')}
                    sideImage2 = {require('./Images/7.png')}
                    sideImage3 = {require('./Images/15.png')}
                    sideImage4 = {require('./Images/14.png')}      
                />}
                {<Project
                    videourl = "NKnUlTGhVBo"
                    title = "Amarillo Harbor"
                    text = "The goal of the Project was to simulate the first few minutes of gameplay of a first person game. The Project was made in collaboration with Dana Senn and Yoshi Zigerli. All 3D Models were made in Blender, which were then imported into Unity, where we put everything together to record the final video. My part consisted of modelling the clock tower, interior rooms and the port, as well as the post processing and lighting in unity including the animation of the camera which recorded the video."
                    sideImage1 = {require('./Images/21.png')}
                    sideImage2 = {require('./Images/7.png')}
                    sideImage3 = {require('./Images/15.png')}
                    sideImage4 = {require('./Images/14.png')}      
                />}
                {<Project
                    videourl = "NKnUlTGhVBo"
                    title = "PIPAPO Harbor"
                    text = "The goal of the Project was to simulate the first few minutes of gameplay of a first person game. The Project was made in collaboration with Dana Senn and Yoshi Zigerli. All 3D Models were made in Blender, which were then imported into Unity, where we put everything together to record the final video. My part consisted of modelling the clock tower, interior rooms and the port, as well as the post processing and lighting in unity including the animation of the camera which recorded the video."
                    sideImage1 = {require('./Images/21.png')}
                    sideImage2 = {require('./Images/7.png')}
                    sideImage3 = {require('./Images/15.png')}
                    sideImage4 = {require('./Images/14.png')}      
                />}
            </div>
            
        )
    }

    render(){
        return(
            <div>
                {this.renderProject(1)}
            </div>
        )
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Navigation/>
);
