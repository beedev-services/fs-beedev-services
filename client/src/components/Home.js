import React from 'react'

const Home = () => {
    return (
        <>
        <h1>Let our Hive make a difference!!</h1>
        <div className='home-imgs'>
            <img src='https://images.craftsnherbs.com/beedev/webdev.png' alt='BeeDev Header' id='heading' />
            <img src='https://images.craftsnherbs.com/beedev/beeline.png' alt='beeline' id='beeline' />
            <div className='questions'>
                <div className='question-head'>
                    <img src='https://images.craftsnherbs.com/beedev/bee-icon.jpg' alt='bee' id='bee' />
                    {/* <img src='https://images.craftsnherbs.com/beedev/2.png' alt='questions' id='questions' /> */}
                    <h2>BeeDev Services has Solutions!</h2>
                </div>
                <p>
                    In nature a Bee Hive is the work of a colony of bees.  Thats BeeDev Services works.  We want to work WITH YOU.  We take that hive mentality personally.  We have the skills and the time to create websites, but you have ideas and know about your business.  Together we can create, build, update, and even fix your website.
                </p>
            </div>
        </div>
        </>
    )
}

export default Home