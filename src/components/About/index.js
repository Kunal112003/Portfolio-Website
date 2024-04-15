import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.css';
import { useState, useEffect } from 'react';
import { faCss3, faGit, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import kunalPic from './kunalpic.jpg'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <div className="container about-page">
            <div className="about-header">
                <div className="about-avatar">
                    <img src={kunalPic} alt="Kunal Rao" />
                </div>
                <div className="about-links">
                    <a href="https://github.com/yourusername">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
                </div>
            </div>
            <div className='about-section'>
            <div className="about-content">
                <h2>About Me</h2>
                <p>Greetings! I'm Kunal Rao, a passionate and dedicated software engineer with a knack for solving complex problems and creating innovative solutions. Currently pursuing a Bachelor of Science in Computer Science at the University of Alberta, I'm deeply immersed in the world of technology, constantly exploring new avenues to expand my skills and make meaningful contributions to the field.</p>

                <h3>Background</h3>
                <p>My journey into the realm of computer science began with a profound curiosity about how technology shapes our world. Through my academic pursuits and hands-on experiences, I've delved into various domains, from data structures and algorithms to machine learning and software engineering. This diverse background has equipped me with a versatile skill set and a deep understanding of foundational principles, enabling me to tackle challenges with confidence and creativity.</p>

                <h3>Professional Experience</h3>
                <p>As a software engineer at S.P.E.A.R (Space Exploration Alberta Robotics), I've had the privilege of working on cutting-edge projects that push the boundaries of exploration and innovation. From spearheading the development of Mars rover software to enhancing autonomy through advanced sensor integration and computer vision, I've been at the forefront of pioneering technologies that redefine what's possible in space exploration.</p>

                <h3>Projects and Contributions</h3>
                <p>In addition to my professional endeavors, I'm passionate about leveraging my skills to make a positive impact on society. One notable project is Shelter For Women, where I led the Agile development of an intervention plan system to support women in need. By implementing personalized features and real-time communication tools, we were able to significantly enhance the support network and empower individuals to achieve their goals.</p>

                <h3>Technical Expertise</h3>
                <p>My proficiency spans across a wide array of languages, frameworks, and developer tools. Whether it's crafting AI models for game-solving, designing Android applications with seamless user experiences, or architecting robust backend systems, I'm well-versed in leveraging the right tools and technologies to bring ideas to life.</p>


                <h3>Get in Touch</h3>
                <p>If you're interested in collaborating on exciting projects, discussing ideas, or simply sharing experiences, I'd love to connect! Feel free to reach out via email or connect with me on LinkedIn. Let's embark on a journey of exploration and innovation together!</p>
            </div>

            </div>
        
        </div>
    );
}

export default About;
