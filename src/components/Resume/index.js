import './index.scss'
import React from 'react';
// import ResumeDocument from '../../assets/resume/Kunal Rao.pdf';
import ResumeImage from '../../assets/resume/resume.png';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';

const Resume = () => {
    const [letterClass,setLetterClass] = React.useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    },[])
    return(
        <div className="resume">
            <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray = {['R','e','s','u','m','e']}>
                            idx ={15}
                        </AnimatedLetters>
            </h1>


            
            {/* display document */}
            <div className="resume__document">
                <img src={ResumeImage} alt="resume" />
                {/* <a href={ResumeDocument} download="Kunal Rao Resume">Download</a> */}


                
            </div>
        </div>
    )
}

export default Resume;