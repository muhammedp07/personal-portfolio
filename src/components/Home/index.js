import LogoTitle from '../../assets/images/logo-m.png'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders' 
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['u', 'h', 'a', 'm', 'm', 'e', 'd']
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't']

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>  
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>m</span> 
                <img src={LogoTitle} alt="Hacker" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={26} />
                </h1>
                <h2>CyberSecurity Enthusiast / Ethical Hacker / Software Developer / Web Developer</h2>
                <a href= "/MuhammedP_Resume.pdf" 
                className='flat-button' 
                target="_blank" 
                rel="noopener noreferrer">
                LAUNCH MY RESUME
                </a>
                
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home