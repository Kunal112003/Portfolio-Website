import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoK from '../../assets/images/logo-k.jpg';
import LogoSubtitle from '../../assets/images/logo_sub_kunal.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPortrait, faProjectDiagram, faUser,faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={handleToggle}>
        <div className="toggle-button__line"></div>
      </div>

      <Link className="logo" to="/">
        <img src={LogoK} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Kunal" />
      </Link>

      <nav>
        <NavLink exact activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact activeClassName="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact activeClassName="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
        </NavLink>

        <NavLink exact activeClassName="active" className="resume-link" to="/resume">
          <FontAwesomeIcon icon={faPortrait} color="#4d4d4e" />
        </NavLink>

        <NavLink exact activeClassName="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink exact activeClassName="active" className="experience-link" to="/experience">
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        


        
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kunal-rao-0956b9262/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Kunal112003">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>

      
    </div>
  );
};

export default Sidebar;
