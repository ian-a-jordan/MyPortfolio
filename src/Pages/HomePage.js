import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Particle from '../Components/Particle';
import Cube from '../Components/Cube';


function HomePage(){
    return (
        
        
        
        <motion.div initial={{opacity: 0}} animate={{opacity:1 }} exit={{opacity: 0}}>
            <div>
            <Particle />
            </div>

            <div className="HomePage">
                <div style={{display: 'flex', justifyContent: 'center', marginBottom:'4%'}}>
                    <Cube />
                </div>
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, I am 
                        <span> Ian Jordan.</span>
                    </h1>
                    <p className="h-sub-text">
                        Welcome to my Web Development portfolio.
                    </p>
                    
                    <div className="icons">
                    <a href="https://github.com/ian-a-jordan" target="_blank" rel="noreferrer" className="icon-holder">
                        
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ian-jordan-aa6ab8207/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                        </a>
                        
                    </div>
                </header>
            </div>
        </motion.div>
    )
}

export default HomePage;
