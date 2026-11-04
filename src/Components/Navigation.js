import React, { Component } from 'react';
import ProjectButton from './ProjectButton';
import Filters from './Filters';
import '../index.css';
import ProjectData from '../Data/projects.json';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
        this.menuButton = React.createRef();
        this.sidebar = React.createRef();
    }

    componentDidMount() {
        this.mobileQuery = window.matchMedia('(max-width: 999px)');
        this.mobileQuery.addEventListener('change', this.handleScreenChange);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.menuOpen !== this.state.menuOpen) {
            if (this.state.menuOpen) this.lockPage();
            else this.unlockPage();
        }
    }

    componentWillUnmount() {
        this.mobileQuery.removeEventListener('change', this.handleScreenChange);
        document.removeEventListener('keydown', this.handleKeyDown);
        this.unlockPage();
    }

    lockPage = () => {
        const body = document.body.style;
        this.pagePosition = {
            scrollY: window.scrollY,
            body: Object.fromEntries(['position', 'top', 'left', 'right', 'width'].map(key => [key, body[key]])),
            overflow: document.documentElement.style.overflow
        };
        // Fixed positioning also prevents background scrolling on iOS.
        Object.assign(body, {
            position: 'fixed', top: `-${this.pagePosition.scrollY}px`,
            left: '0', right: '0', width: 'auto'
        });
        document.documentElement.style.overflow = 'hidden';
    };

    unlockPage = () => {
        if (!this.pagePosition) return;
        const { scrollY, body, overflow } = this.pagePosition;
        const html = document.documentElement.style;
        const previousBehavior = html.scrollBehavior;
        Object.assign(document.body.style, body);
        html.overflow = overflow;
        html.scrollBehavior = 'auto';
        window.scrollTo(0, scrollY);
        html.scrollBehavior = previousBehavior;
        this.pagePosition = null;
    };

    closeMenu = (afterClose) => {
        this.setState({ menuOpen: false }, () => {
            this.menuButton.current.focus({ preventScroll: true });
            if (afterClose) afterClose();
        });
    };

    handleScreenChange = (event) => {
        if (!event.matches && this.state.menuOpen) this.closeMenu();
    };

    handleKeyDown = (event) => {
        if (!this.state.menuOpen) return;
        if (event.key === 'Escape') {
            event.preventDefault();
            this.closeMenu();
        }
        if (event.key === 'Tab') {
            const controls = [this.menuButton.current, ...this.sidebar.current.querySelectorAll('button, a[href]')]
                .filter(element => !(element.tagName === 'A' && element.querySelector('button')));
            const index = controls.indexOf(document.activeElement);
            if (index === -1 || (event.shiftKey && index === 0) || (!event.shiftKey && index === controls.length - 1)) {
                event.preventDefault();
                controls[event.shiftKey ? controls.length - 1 : 0].focus({ preventScroll: true });
            }
        }
    };

    handleNavigationClick = (event) => {
        // Tags prevent their link's default action; filtering keeps the menu open.
        if (!this.state.menuOpen || event.defaultPrevented) return;
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        event.preventDefault();
        const hash = link.getAttribute('href');
        this.closeMenu(() => {
            window.location.hash = hash;
            const project = document.getElementById(hash.slice(1));
            if (project) project.scrollIntoView();
        });
    };

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
            <>
            <button
                ref={this.menuButton}
                className={`mobile-menu-toggle${this.state.menuOpen ? ' mobile-menu-toggle--open' : ''}`}
                type="button"
                aria-label={this.state.menuOpen ? 'Close project menu' : 'Open project menu'}
                aria-expanded={this.state.menuOpen}
                aria-controls="project-navigation"
                onClick={() => this.state.menuOpen ? this.closeMenu() : this.setState({ menuOpen: true })}
            >
                <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
            </button>
            {this.state.menuOpen && <button className="mobile-menu-backdrop" type="button" tabIndex={-1} aria-label="Close project menu" onClick={() => this.closeMenu()} />}
            <div
                id="project-navigation"
                ref={this.sidebar}
                className={`navigation${this.state.menuOpen ? ' navigation--open' : ''}`}
                onClick={this.handleNavigationClick}
            >
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
                            <div key={p.folderName}>
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
            </>
        );
    }
}
