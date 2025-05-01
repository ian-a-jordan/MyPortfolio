import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BirdsBackground from '../Components/BirdBackground';


function HomePage() {
  return (
    <div className="HomePage" style={{ position: 'relative', zIndex: 1 }}>

      <header className="hero" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="hero-text">
          Hi, I am
          <span> Ian Jordan.</span>
        </h1>
        <p className="h-sub-text">
          Welcome to my Web Development portfolio.
        </p>

        <div className="icons">
          <a
            href="https://github.com/ian-a-jordan"
            target="_blank"
            rel="noreferrer"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            href="https://www.linkedin.com/in/ian-jordan-aa6ab8207/"
            target="_blank"
            rel="noreferrer"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
