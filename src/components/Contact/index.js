import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {
    faLinkedin,
    faDiscord,
    faGithub,
    faCloudflare,
    faTwitter,
    faPinterest,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Contact = () => {
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
    <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p align='LEFT'>
            I Am always up for a tech adventure or a good chat about anything geeky. 
            Got a burning question or just want to swap memes? 
            Hit me up through the links below, let's make some magic happen!
          </p>
            <div className="contact-info" align="LEFT">

                <p style={{color: '#efd81d'}}>
                    <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px' }} />
                    LinkedIn: <a href="https://www.linkedin.com/in/muhammedpatel007/" target="_blank" rel="noopener noreferrer">
                    Let's connect professionally, no suits required!</a>
                </p>

                <p style={{color: '#efd81d'}}>
                    <FontAwesomeIcon icon={faDiscord} style={{ marginRight: '10px' }} />
                    Discord: <a href="https://discord.com/users/pa1n_.007" target="_blank" rel="noopener noreferrer">
                    Join me for tech talk or memes. Bring your best!</a>
                </p>

                <p style={{color: '#efd81d'}}>
                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px' }} />   
                    Github: <a href="https://github.com/muhammedp07" target="_blank" rel="noopener noreferrer">
                    Dive into my code jungle. Watch out for bugs!</a>
                </p>

                <p style={{color: '#efd81d'}}>
                    <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '10px' }} />
                    Twitter/X: <a href="https://x.com/p41n_0" target="_blank" rel="noopener noreferrer">
                    Follow for tech rants and the occasional bad pun!</a>
                </p>

                <p style={{color: '#efd81d'}}>
                    <FontAwesomeIcon icon={faCloudflare} style={{ marginRight: '10px' }} />
                    Tryhackme: <a href="https://tryhackme.com/p/P47N" target="_blank" rel="noopener noreferrer">
                    Check out my Arena. Cyber ninjas welcome!</a>
                </p> 

            </div>
        </div>
            <div className="stage-cube-cont">
                <div className="cubespinner"> 
                    <div className="face1">
                        <FontAwesomeIcon icon={faTwitter} color="#0700dd" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faGithub} color="#000000" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faLinkedin} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCloudflare} color="#6ae478" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faPinterest} color="#ef1d1d" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faDiscord} color="#be46e9" />
                    </div>
                </div>
            </div>
    </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
