import React from 'react'

const Home = () => {
    return (
        <>
        <h1>Let our Hive make a difference!!</h1>
        <div className='home-imgs'>
            <div className='webdev'></div>
            <div className='overlay' ></div>
            {/* <img src="https://images.craftsnherbs.com/beedev/webdev.png" usemap="#image-map" id='heading' alt='' /> */}
            {/* <img src='https://images.craftsnherbs.com/beedev/flyingbee.gif' alt='gif' id='overlay' /> */}
            {/* <map name="image-map">
                <area alt="services" href="/Services" coords="216,35,172,107,216,185,307,185,350,111,303,34" shape="poly" className='services' />
                <area alt="develop" href="#develop" coords="356,115,314,189,357,264,443,267,489,189,446,116" shape="poly" className='webdev' />
                <area alt="maintain" href="#maintain" coords="496,34,453,107,497,184,584,185,628,110,585,34" shape="poly" className='webdev' />
                <area alt="repair" href="#repair" coords="634,115,592,190,636,265,725,267,766,190,724,115" shape="poly" className='webdev' />
            </map> */}
            <img src='https://images.craftsnherbs.com/beedev/beeline.png' alt='beeline' id='beeline' />
            <div className='questions'>
                <div className='question-head'>
                    <img src='https://images.craftsnherbs.com/beedev/bee-icon.jpg' alt='bee' id='bee' />
                    <h2>BeeDev Services has solutions!</h2>
                </div>
                <p>
                    In nature a Bee Hive is the work of a colony of bees.  Thats BeeDev Services works.  I want to work WITH YOU.  I take that hive mentality personally.  I have the skills and the time to create websites, but you have ideas and know about your business.  Together we can create, build, update, and even fix your website.
                </p>
                <div className='question-main'>
                    <div id='develop'>
                        <h3>Are you tired of Pre-Built, stiff, impersonal websites?</h3>
                        <p>Templates are boring, stiff, and don't always get your point across.  Custom built templates are different.  Working smarter not harder is key.  Once we decide on a theme the rest is easy.</p>
                        <h3>Do you need a central place to keep all your company tool links and policies?</h3>
                        <p>Making sure that your employees can get to and find everything that they need to do their jobs is important.  I can create a website for you that is for your employees only.  Where there is a central place for them to find all the links they need to do their jobs, or where HR can have all their onboarding policies.</p>
                    </div>
                    <div id='maintain'>
                        <h3>Need help making sure that your website is running as fast as it can?  I can help with that!</h3>
                        <p>No website can be built and be left alone.  It is going to need to be updated every so often. Your services change, your pricing changes, maybe you hired on new team members and want to add them to your site.  Sometimes you just need to do an over haul.</p>
                        <p>That is where I come in.  I have packages where I will periodically check in and make sure everything is running smooth and no updates are needed.</p>
                    </div>
                    <div id='repair'>
                        <h3>Website not working right?</h3>
                        <p>I can take a look at your website and see what I can do.  Maybe it needs an overhaul, or maybe it just needs some things updated.  I will do what I can to get you back up and running</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home