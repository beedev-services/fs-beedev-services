import React from 'react'

const Home = () => {
    return (
        <>
        <h1>Let our Hive make a difference!!</h1>
        <div className='home-imgs'>
            {/* <img src='https://images.craftsnherbs.com/beedev/webdev.png' alt='BeeDev Header' id='heading' /> */}
            <img src="https://images.craftsnherbs.com/beedev/webdev.png" usemap="#image-map" id='heading' alt='' />

            <map name="image-map">
                <area alt="services" href="/Services" coords="216,35,172,107,216,185,307,185,350,111,303,34" shape="poly" className='webdev' />
                <area alt="develop" href="#develop" coords="356,115,314,189,357,264,443,267,489,189,446,116" shape="poly" className='webdev' />
                <area alt="maintain" href="#maintain" coords="496,34,453,107,497,184,584,185,628,110,585,34" shape="poly" className='webdev' />
                <area alt="repair" href="#repair" coords="634,115,592,190,636,265,725,267,766,190,724,115" shape="poly" className='webdev' />
            </map>
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