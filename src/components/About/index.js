import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import {  faCss3, faGit,  faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About =() => {


    const [letterClass,setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    },[])
    
    return(
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray = {['A','b','o','u','t',' ','M','e']}>
                            idx ={15}
                        </AnimatedLetters>
                    </h1>

                    <p>
                    

                    Hello and welcome to my portfolio website!

                    I'm a highly motivated Year 3 Computer Science student currently seeking an internship in software development. With a solid foundation in computer science principles and a passion for technology, I am eager to apply my skills and knowledge to contribute to a dynamic team and gain practical experience in the field.

                    Here are some key points about me:

                    <ul>
                    <li>Proficient in SQL, Python, C, Java, JavaScript, and MySQL.</li>
                    <li>Experienced in Full Stack Mobile and Web Development and Database Development.</li>
                    <li>Strong understanding of computer science principles.</li>
                    <li>Eager to learn, grow, and make a meaningful impact in a professional environment.</li>
                    </ul>

                    I believe in continuous learning and keeping up with the latest industry trends and advancements. I am always eager to expand my skillset and stay updated with emerging technologies to ensure that I can deliver innovative solutions.
                    <br/>
                    What sets me apart is my enthusiasm for teamwork and collaboration. I enjoy working in diverse environments where I can learn from others and contribute my own ideas. 
                    I am a proactive learner and adapt quickly to new challenges, which allows me to thrive in fast-paced and ever-changing situations.
                    <br/>
                    I am actively seeking an internship opportunity where I can learn, grow, and make a meaningful impact in a professional environment. I am excited to contribute to a team that shares my passion for technology and embraces creativity and innovation.
                    <br/>
                    Thank you for visiting my portfolio. Please explore my projects and feel free to reach out to me for any collaboration or internship opportunities. I look forward to connecting with you!

                    

                    </p>

                </div>

                <div className = 'stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color= "#EFD81D" />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faJava} color= "#F06529" />
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color= "#28A4D9" />
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color= "#5ED4F4" />
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D" />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faGit} color= "#EC4E28" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <Loader type = "ball-zig-zag-deflect">

            </Loader>
        
        </>
    )
}

export default About
