import React, { Component, useState, useRef } from 'react';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';

const myCld = new Cloudinary({
    cloud: {
        cloudName: "dehtondds",
    },
});

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        if(e.target.classList.contains("dismiss")){
            this.props.onDismissedImg();
        }
    }

    render(){
        return(
            <div className="overlay dismiss" onClick={this.handleClick}>
                <AdvancedImage cldImg={myCld.image(`${this.props.clickedImg}${this.props.currentIndex}.png`)} alt="bigPicture" />
                <span className='dismiss' onClick={this.handleClick}>X</span>

                <div onClick={() => this.props.prevImg()} className="overlay-arrows_left">
                    <div>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </div>
                    </div>
                    <div onClick={() => this.props.nextImg()} className="overlay-arrows_right">
                    <div>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </div>
                </div>
            </div>
            )
    }   
}