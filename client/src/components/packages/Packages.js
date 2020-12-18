import React from 'react'

import External from './External'
import Internal from './Internal'
import AddOns from './AddOns'

const Packages = () => {


    return (
        <>
        <h4>Public Facing Websites</h4>
        <p>What the public can see</p>
        <External />
        <hr></hr>
        <h4>Internal Websites</h4>
        <p>What Employees and Employers can see</p>
        <Internal />
        <hr></hr>
        <h4>Add-Ons</h4>
        <p>Items that can be added to packages or as a standalone</p>
        <AddOns />
        </>
    )
}
export default Packages