import React, { useState } from 'react'

import Packages from './packages/Packages'

const Services = () => {

    return (
        <>
        <h1>The divisions of BeeDev Services</h1>
        <div className='classroom'>
            <h3>BeeDev Classroom</h3>
            <hr></hr>
            <p>A sub-division of BeeDev Services dedicated to teaching the art of Web Development</p>
            <h4>Still Under Construction</h4>
            <a href='https://classroom.beedev-services.com' target='_blank' rel='noreferrer'>BeeDev Classroom Website</a>
        </div>
        <div className='Themes'>
            <h3>BeeDev Themes</h3>
            <hr></hr>
            <p>A sub-division of pre-built themes available, including Wordpress Themese</p>
            <h4>Still Under Construction</h4>
            <a href='https://themes.beedev-services.com' target='_blank' rel='noreferrer'>BeeDev Themes Website</a>
        </div>
        <div className='cfa'>
            <h3>Open Columbia County, PA</h3>
            <hr></hr>
            <p>A Code for America Brigade</p>
            <p>This is a local network of volunteers who are putting technology to work at the benefit of our community</p>
            <a href='#' target='_blank' rel='noreferrer'>Open Columbia County PA Website</a>
        </div>
        <div className='services'>
            <h3>BeeDev Services - The main Division</h3>
            <hr></hr>
            <p>Packages and other services for your business or other needs</p>
            {/* <Packages /> */}
        </div>
        </>
    )
}

export default Services