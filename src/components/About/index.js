import React, { useEffect, useState } from 'react'
import {
  faLinux,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faFontAwesomeFlag,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p align="LEFT">
          Hey, I’m Muhammed Patel, a passionate Computer Science student and 
          cybersecurity enthusiast on a mission to make the digital world safer. 
          I thrive on challenges—whether it’s competing in CTF tournaments or 
          leveling up my skills on TryHackMe, where I’m ranked in the top 3%.
          </p>
          <p align="LEFT"> 
          Naturally curious and constantly driven to learn, I’m always diving 
          into new technologies and solving complex security puzzles. 
          Cybersecurity isn't just my career path—it's my obsession, and 
          I'm always looking for ways to push the boundaries.
          </p>
          <p align="LEFT">
          In a nutshell: I’m tech-obsessed, 
          a problem-solver at heart, and perpetually 
          evolving in the world of cybersecurity.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faFontAwesomeFlag} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About