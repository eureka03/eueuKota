import React from 'react';
import {motion} from 'motion/react';
import './About.css';

export default function About(){
    return(
        <motion.section
            id='about'
            className="about-section"
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1}}>
        <div className="about-content">
            <h2>About <span>EuEuKota</span></h2>
            <p>EuEuKota is not just a food business - it's a taste revolution. Fouded with passion for bold flavours and kasi
                culture, we serve the freshest, most fire kotas in town.
            </p>
            <p>
                Every bite is made with love, spice and a whole lot of vibe. Whether you're a beef lover, a cheese fan, or just hungry
                , we've got something hot waiting for you.
            </p>
            <p>
                Born in the heart of the community. Built by hustle. Powered by flavour.
            </p>
        </div>
        </motion.section>
    )
}