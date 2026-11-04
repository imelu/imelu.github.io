import React, { useState, useRef, Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Components/Navigation'
import Projects from './Components/Projects'
import About from './Components/About';
import PortfolioErrorBoundary from './Components/PortfolioErrorBoundary';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            filteredTags: []
        }
    }

    onAddFilter = (tag) => {
        this.setState(state => ({
            filteredTags: state.filteredTags.includes(tag)
                ? state.filteredTags
                : [...state.filteredTags, tag]
        }));
    }

    onRemoveFilter = (tag) => {
        this.setState(state => ({
            filteredTags: state.filteredTags.filter(value => value !== tag)
        }));
    }

    render(){
        return(
            <>
                <Navigation addFilter={(tag) => this.onAddFilter(tag)} tags={this.state.filteredTags} removeFilter={(tag) => this.onRemoveFilter(tag)}/>
                {<About/>}
                <Projects tags={this.state.filteredTags} />
            </>
        )
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <PortfolioErrorBoundary><App /></PortfolioErrorBoundary>
);
