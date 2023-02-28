import React, { Component, useState, useRef } from 'react';
import '../index.css';
import AboutData from '../Data/about.json';

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div id={'About'} key={'About'} ref={'About'}>
                <div className='about'>
                    <div className='aboutme'>
                        <div className='description'>
                        {AboutData.about[0].description.map((d)=>{
                            return(
                                <p key={AboutData.about[0].description.indexOf(d, 0)}>
                                    {d}
                                </p>
                            )
                        } )}
                        </div>
                        <div className='contact'>
                        {AboutData.about[0].description.map((d)=>{
                                return(
                                    <p key={AboutData.about[0].description.indexOf(d, 0)}>
                                        {d}
                                    </p>
                                )
                            } )}
                        </div>
                        <div className='links'>
                        {AboutData.about[0].description.map((d)=>{
                                return(
                                    <p key={AboutData.about[0].description.indexOf(d, 0)}>
                                        {d}
                                    </p>
                                )
                            } )}
                    </div>
                    </div>

                    
                    <div className='cv'>
                    {AboutData.about[0].description.map((d)=>{
                            return(
                                <p key={AboutData.about[0].description.indexOf(d, 0)}>
                                    {d}
                                </p>
                            )
                        } )}
                    </div>
                </div>
            </div>
        )
    }
}