import React, { useState, useRef, Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Components/Navigation'
import Projects from './Components/Projects'
import About from './Components/About';


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
                {/*<About/>*/}
                <Projects tags={this.state.filteredTags} />
            </>
        )
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
