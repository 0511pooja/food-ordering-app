import React from 'react';
import aboutimage from '../burger/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>Upcoming Event</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Perferendis, nihil. Quia sint reiciendis facere voluptas.</p>
                     <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            
        </div>
    )
}

export default About
