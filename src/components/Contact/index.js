import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
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
            Hit me up through the links below—let's make some magic happen!
          </p>
          <div className="contact-info">
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/muhammedpatel007/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
            </p>
            <p>
              Discord: <a href="https://discord.com/users/pa1n_.007" target="_blank" rel="noopener noreferrer">Let's chat and geek out!</a>
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
