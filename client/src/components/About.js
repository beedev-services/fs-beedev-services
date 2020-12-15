import React from 'react'

const Owner = 'https://images.craftsnherbs.com/new-melissa.jpg'

const About = () => {
    return (
        <>
        <h1>About BeeDev Services</h1>
        <div className='about'>
            <h3>The Vision</h3>
            <p>Help small businesses succeed with unique, simple, and scalable ideas and solutions.</p>
            <p>At BeeDev Services the focus in on helping businesses and startu-ups get the tools they need to do what they do best.</p>
            <div className='about-owner'>
                <img src={Owner} alt='' id='owner' />
                <div className='owner-text'>
                    <h4>Melissa Longenberger</h4>
                    <p>Owner and Developer</p>
                    <a href='https://melissa-longenberger.com' target='_blank' rel='noreferrer'>Portfolio Website</a>
                </div>
            </div>
            <div className='about-content'>
                <p>After serving in the US Navy for 11 years, I wanted to use my knowledge of computers while still being a stay at hom Mother.  My family was spread across the the country, so watching my kids grow up was not something they could see.  So I started with a blogspot site to create a photo album of sorts so that my family could indeed watch them grow.</p>
                <p>Although the platform was good to get me going I quickly discovered that I didn't like how little control over the look I had.  So seeing and option to use HTML I quickly started to learn it and make it my own.</p>
                <p>It didn't take long to realize I rather enjoyed this and it was a form of art.  I couldn't draw, but I can crochet and create a website that had my touch to it.  Over 10 years have passed and my knowledge and love for coding has grown.  After building a website for a friend and seeing her face at the results I knew that this was somthing I needed to keep doing.</p>
            </div>
        </div>
        </>
    )
}

export default About