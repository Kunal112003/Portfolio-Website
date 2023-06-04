import { Link, NavLink } from 'react-router-dom';
import './index.scss'
// import LogoS from '../../assets/images/logo-s.png';
import LogoK from '../../assets/images/logo-k.jpg';
import LogoSubtitle from '../../assets/images/logo_sub_kunal.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPortrait, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src = {LogoK} alt='logo' />
            <img className ="sub-logo" src= {LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname="active" className= "about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname="active" className= "projects-link" to="/projects">
                <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname="active" className= "resume-link" to="/resume">
                <FontAwesomeIcon icon={faPortrait} color="#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname="active" className = "contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href = 'https://www.linkedin.com/in/kunal-rao-0956b9262/'>
                    <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e"/>
                </a>
            </li>
        </ul>

        <ul>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href = 'https://github.com/Kunal112003'>
                    <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;