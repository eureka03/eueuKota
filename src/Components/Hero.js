import React from 'react';
import {motion} from 'motion/react';
import Kota1 from '../Assets/Kota1.jpg';
import './Hero.css';
export default function Hero(){
    return(
        <>
            <section id="hero" className="hero-section">
                <div className="hero-content">
                    <motion.div 
                        className="hero-text"
                        initial={{x:-100, opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1}}>
                        <h1>Bold Flavors, Big Kotas</h1>
                        <p>Satisfy your hunger with the most loaded and legendary kotas in town</p>
                        <motion.a
                            href='/About'
                            className="hero-btn"
                            whileHover={{scale:1.05}}
                            whileTap={{scale:0.95}}>
                            Learn More
                        </motion.a>
                    </motion.div>
                    <motion.img
                        src={Kota1}
                        alt="Kota"
                        className="hero-image"
                        initial ={{x:100,opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1}}>
                    </motion.img>
                    
                </div>
            </section>
        
        </>
    )
}