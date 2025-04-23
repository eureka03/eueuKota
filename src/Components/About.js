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
        <h2>About EuEuKota</h2>
        <p>We serve the juiciest,cheesiest, mouth-watering Kotas in town! Fresh ingredients, bold flavors - 
             all made with love.</p>
        
        </motion.section>
    )
}