import React from 'react'

import MiniNav from './nav/MiniNav'
import ServicesNav from './nav/ServicesNav'

import Classroom from './departments/Classroom'
import Themes from './departments/Themes'
import CFA from './departments/CodeForAmerica'
import Service from './departments/Services'

const Services = () => {

    return (
        <>
        <h1>The divisions of BeeDev Services</h1>
        <MiniNav />
        <ServicesNav />
        <div className='classroom' id='classroom'>
            <Classroom />
        </div>
        <div className='Themes' id='themes'>
            <Themes />
        </div>
        <div className='cfa' id='cfa'>
            <CFA />
        </div>
        <div className='services' id='services'>
            <Service />
        </div>
        </>
    )
}

export default Services