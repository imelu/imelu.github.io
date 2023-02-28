import React, { Component, useState, useRef } from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'


export default class Filters extends Component {
    constructor(props) {
        super(props);
    }

    handleclick = (tag, event) => {
        event.preventDefault();
        this.props.removeFilter(tag);
    }

    render() {
        return(
            <div>
                <div className='filters'>
                    <div className='tags'>
                        Filters: 
                        {this.props.tags.map((t)=>{
                            return(
                                <button onClick={(event) => this.handleclick(t, event)} className="filtertag" key={this.props.tags.indexOf(t, 0)}>
                                {`${t}`}
                                {/*<div className='clearIcon'>{` `}</div>*/}
                                {/*<FontAwesomeIcon className="clearIcon" icon={faBan} style={{scale: "0.85" , padingtop: "2"}} />*/}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}