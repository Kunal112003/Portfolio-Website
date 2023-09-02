import './index.scss';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import QrifficLogo from '../../assets/images/qriffic_logo.png';
import QrifficVideo from '../../assets/images/qriffic video.mp4';
import Loader from 'react-loaders';
import AIModelImage1 from '../../assets/images/connect4-code-image.png';
import AIModelImage2 from '../../assets/images/map_dijkstra.png';
import AIModelImage3 from '../../assets/images/running_time.png';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [activeTab, setActiveTab] = useState(0); // State to manage the active project tab

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  // Define your project tabs and their content here
  const projectTabs = [
    {
      title: 'Projects',
      content: (
        <div className="projects">
          {/* Content for Projects tab */}
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="text-zone2">
            {/* Content for Projects tab */}
          </div>
        </div>
      ),
    },
    {
      title: 'QRiffic',
      content: (
        <div className="project1">
          {/* Content for QRiffic tab */}
          <h3>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Q', 'R', 'i', 'f', 'f', 'i', 'c']}
              idx={15}
            />
          </h3>
          <img
            src={QrifficLogo}
            style={{ width: '15%', marginLeft: '60%', marginTop: '1%' }}
          />
          <div className="project1-text">
            {/* Content for QRiffic tab */}
          </div>
          <div className="project1-feat">
            {/* Content for QRiffic tab */}
          </div>
          <div className="project1-video">
            {/* Content for QRiffic tab */}
            <video
              src={QrifficVideo}
              style={{ marginLeft: '20%', height: '30%', width: '18%' }}
            ></video>
          </div>
        </div>
      ),
    },
    {
      title: 'AI Models',
      content: (
        <div className="project2">
          {/* Content for AI Models tab */}
          <h4>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'E', 'A', 'R', 'C', 'H', ' ', '&', ' ', 'P', 'L', 'A', 'N', 'N', 'I', 'N', 'G', ' ', 'A', 'I', ' ', 'M', 'O', 'D', 'E', 'L', 'S']}
              idx={15}
            />
          </h4>
          <div className="project2-intro">
            {/* Content for AI Models tab */}
          </div>
          <div className="AIModelImage1">
            {/* Content for AI Models tab */}
          </div>
          <div className="project2-feat">
            {/* Content for AI Models tab */}
          </div>
          <div className="AIModelImage2">
            {/* Content for AI Models tab */}
          </div>
          <div className="AIModelImage3">
            {/* Content for AI Models tab */}
          </div>
        </div>
      ),
    },
    {
      title: 'Valorant Bot',
      content: (
        <div className="project3">
          {/* Content for Valorant Bot tab */}
          <h11>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['V', 'A', 'L', 'O', 'R', 'A', 'N', 'T', ' ', 'B', 'O', 'T']}
              idx={15}
            />
          </h11>
          <div className="project3-intro">
            {/* Content for Valorant Bot tab */}
          </div>
          <div className="project3-feat">
            {/* Content for Valorant Bot tab */}
          </div>
        </div>
      ),
    },
    {
      title: 'Portfolio Website',
      content: (
        <div className="website">
          {/* Content for Portfolio Website tab */}
          <h14>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O', ' ', 'W', 'E', 'B', 'S', 'I', 'T', 'E']}
              idx={15}
            />
          </h14>
          <div className="website-intro">
            {/* Content for Portfolio Website tab */}
          </div>
        </div>
      ),
    },
    {
      title: 'Expense Manager App',
      content: (
        <div className="project4">
          {/* Content for Expense Manager App tab */}
          <h16>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'X', 'P', 'E', 'N', 'S', 'E', ' ', 'M', 'A', 'N', 'A', 'G', 'E', 'R', ' ', 'A', 'P', 'P']}
              idx={15}
            />
          </h16>
          <h17>
            {/* Content for Expense Manager App tab */}
          </h17>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Loader type="ball-zig-zag-deflect" />

      <div className="tab-navigation">
        {projectTabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)} // Set the active tab on click
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="tab-content">
        {projectTabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
