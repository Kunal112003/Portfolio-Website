// import LogoTitle from '../../assets/images/logo_sub_kunal.jpg'
import { Link } from 'react-router-dom'
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';

import Logo from './Logo'
import Loader from 'react-loaders';


const Home = () => {

    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['u','n','a','l',' ', 'R','a','o']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000);
    },[])

    return (
        <>

        
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>
                    H
                </span> 

                <span className={`${letterClass} _12`}>
                    i,
                </span>

                <br/> 
                <span className={`${letterClass} _13`}>
                    I
                </span>

                <span className={`${letterClass} _14`}>
                    'm&nbsp;
                </span>

                <span className={`${letterClass} _15`}>
                    K
                </span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} idx={20} />
                </h1>
                <h2>Full Stack Developer / Java, Python Expert </h2>
                <Link to="/contact" className = "flat-button">Contact Me</Link>
                
            </div>
            <Logo />
        </div>

        <Loader type="ball-zig-zag-deflect">

        </Loader>

        </>

    )
}

export default Home