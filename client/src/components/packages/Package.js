import React from 'react'

const Package = (props) => {
    const { packages } = props

    if(!packages || packages.length === 0) return <p>Packages are being added</p>
    return (
        <>
        {console.log('packages pulled on current page', packages)}
        {packages.map((pkg) => {
            return (
                <div className='packageCard' key={pkg.id}>
                    <h3>{pkg.package}</h3>
                    <h3>{pkg.packageName}</h3>
                    <div className='packageInfo'>
                        <p>{pkg.line01}</p>
                        <p>{pkg.line02}</p>
                        <p>{pkg.line03}</p>
                        <p>{pkg.line04}</p>
                    </div>
                    <p>** Typical turn around time - {pkg.time}</p>
                    
                    <p>${pkg.price}</p>
                    <p>** Payment Frequency - {pkg.pay_frequency}</p>
                </div>
            )
        })}
        </>
    )
}

export default Package