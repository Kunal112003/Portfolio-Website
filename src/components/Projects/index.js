import './index.scss'
import React from 'react';
import { useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import QrifficLogo from '../../assets/images/qriffic_logo.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import QrifficVideo from '../../assets/images/qriffic video.mp4'
import Loader from 'react-loaders';
import AIModelImage1 from '../../assets/images/connect4-code-image.png'
import AIModelImage2 from '../../assets/images/map_dijkstra.png'
import AIModelImage3 from '../../assets/images/running_time.png'
import { useState } from 'react';


const Projects = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate');

    // const [disableParallax, setDisableParallax] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);



    return(
        <div>
            <Loader type="ball-zig-zag-deflect" />

            {/* {!disableParallax && ( */}
            <Parallax pages={6}>

    
                <ParallaxLayer offset={0} className='centre'>
                    <div className="projects">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                                idx={15}
                            />
                        </h1>

                        <div className='text-zone2'>
                            <h2>Welcome to my projects showcase!</h2>
                            <p>
                                In this section, you will find a collection of my latest projects that highlight my skills and expertise in software development. Each project represents a unique challenge I have tackled and showcases my ability to deliver innovative solutions.
                            </p>
                            <p>
                                I have a strong passion software development and AI, and I am constantly pushing myself to stay updated with the latest technologies and industry trends. Through these projects, I have honed my skills in [list relevant skills or technologies], enabling me to create efficient, user-friendly, and visually appealing applications.
                            </p>
                            <p>
                                I believe in a collaborative and iterative approach to development, working closely with clients and stakeholders to understand their needs and deliver outstanding results. Whether it's developing a web application, designing a mobile app, or building a database-driven solution, I always strive for excellence and a seamless user experience.
                            </p>
                            <p>
                                Take a moment to explore the projects below, where each one represents a unique problem I have solved or a concept I have brought to life. Click on any project to dive deeper and discover the technologies used, challenges overcome, and the outcomes achieved.
                            </p>
                            <p>
                                I'm proud of the work I have accomplished, and I hope these projects demonstrate my dedication, creativity, and commitment to delivering high-quality solutions.
                            </p>
                            <p>
                                Thank you for visiting, and I hope you enjoy browsing through some of my projects below!
                            </p>
                        </div>
                            
                    </div>
                </ParallaxLayer>

                <ParallaxLayer 
                offset={1} 
                className='centre'
                speed={0.5}>
                    <div className='project1'>
                        <h3>
                        <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray = {['Q','R','i','f','f','i','c']}>
                                    idx ={15}
                        </AnimatedLetters>
                        </h3>
                     </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.25} speed={0.08} >
                    <img src={QrifficLogo} style={{ width: '15%', marginLeft: '60%', marginTop:'1%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset ={1.1} speed = {0.3}>
                    <div className = 'project1-text'>
                        <h5>
                        
                            QRiffic is an Android app that offers an immersive QR code scanning experience. Scan QR codes using your device's camera and reveal unique identicons representing virtual creatures called QRmons.
                            <br/>
                            
                                Collect and view your captured QRmons in your user profile. Discover other players' profiles and enjoy the social element of the app.
                            <br/>
                            
                                With gamification, Google Maps integration, Firebase Storage, and leaderboards, QRiffic delivers a thrilling QR code scanning experience.
                            <br/>
                        </h5>
                    </div>
                </ParallaxLayer>

                

                <ParallaxLayer offset={1.4} speed= {0.4}>
                    <div className='project1-feat'>


                        <p>
                            Here are some of the features of QRiffic:
                        </p>
                        <h6>
                            <ul>
                                <li>
                                QR Code Scanning: The app enables users to scan QR codes using their device's camera. These QR codes contain points that are determined using a hash function. Upon scanning, the app assigns the user points based on the QR code's hash and generates a unique and random identicon.
                                </li>

                                <li>
                                User Profiles and QRmons: Each user has a profile where they can view their captured QRmons. QRmons are virtual creatures associated with the scanned QR codes. The app records details such as where and how the QRmon was captured, adding a layer of gamification to the experience.
                                </li>

                                <li>
                                Search Users: The app enables users to find and view other players' profiles, discovering their captured QRmons and progress.
                                </li>

                                <li>
                                QRiffic offers an immersive QR code scanning experience, combining virtual creature collection, user profiles, maps integration with Google Maps API, Firebase Storage for data storage and management, and exciting leaderboards.
                                
                                </li>
                            </ul>
                        </h6>
                    </div>

                </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={0.4}>
                    <div className='project1-video'>

                        <video src = {QrifficVideo} style={{marginLeft :'20%',height:'30%',width:'18%'}}></video>

                    </div>
                </ParallaxLayer>



                <ParallaxLayer 
                offset={2.4} 
                className='centre'
                speed = {0.6}
                
                >
                    <div className='project2'>
                        <h4>
                        <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray = {['S','E','A','R','C','H',' ','&',' ','P','L','A','N','N','I','N','G',' ','A','I',' ','M','O','D','E','L','S']}>
                                    idx ={15}
                        </AnimatedLetters>
                        </h4>
                    </div>
                </ParallaxLayer>


                
                <ParallaxLayer offset={2.4} speed={0.5}>
                    <div className='project2-intro'>
                        <h8>
                        <ul>
                            <li>For the second project, "Search and planning AI models," I have developed sophisticated AI models using Python and Numpy. These models are specifically designed to tackle a wide range of games and quizzes. Powered by advanced algorithms and techniques, these AI models provide intelligent solutions to complex problems.</li>
                            <br/>
                            <li>Using search and planning algorithms, the models analyze the game or quiz environment, consider possible moves or actions, and make optimal decisions based on strategic planning. They demonstrate the capability to navigate through different scenarios, anticipate future outcomes, and maximize success rates.</li>
                        </ul>
                        </h8>

                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={0.7}>
                <div className='AIModelImage1'>
                    <img src={AIModelImage1} style={{ width: '30%', marginLeft: '60%', marginTop: '1%' }} />

                </div>
                </ParallaxLayer>



                <ParallaxLayer offset={2.6} speed={0.7}>
                    <div className='project2-feat'>
                        <h9>
                        Introducing a few of the examples from the "Search and planning AI models" project:
                        </h9>

                        <h10>
                        <ul>
                            <br/>
                            <br/>
                            <li>
                            Sudoku Solver: This AI model employs backtracking and optimization techniques to solve Sudoku puzzles. It efficiently explores different possibilities until it finds a valid solution.
                            </li>

                            <li>
                            Connect 4 AI: The AI model for Connect 4 implements game tree search algorithms, such as minimax with alpha-beta pruning, to make optimal moves and strategize gameplay. It analyzes potential moves to maximize chances of winning.
                            </li>

                            <li>
                            Path Finding AI: This AI model specializes in finding optimal paths in maze-like environments. It utilizes search algorithms like A*, Dijkstra's algorithm, or breadth-first search to navigate through the maze and identify the most efficient route.
                            </li>
                        
                        </ul>

                        These examples demonstrate the power of AI in solving specific problems and optimizing outcomes. By developing these AI models, I showcase my skills in algorithmic problem-solving and highlight the potential of AI techniques in various scenarios.
                        </h10>
                    </div>
                </ParallaxLayer>

                <div className='AIModelImage2'>
                <ParallaxLayer offset={3} speed={0.2}>
                    <img src={AIModelImage2} style={{ width: '18%', marginLeft: '10%', marginTop:'1%' }} />
                    
                </ParallaxLayer>
                </div>



                <div className='AIModelImage3'>
                <ParallaxLayer offset={3.2} speed={0.2}>
                    <img src={AIModelImage3} style={{ width: '20%', marginLeft: '29%' }} />
                
                </ParallaxLayer>

                </div>

                <ParallaxLayer offset={3.7} speed = {0.5}>
                    <div className='project3'>
                        <h11>
                        <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray = {['V','A','L','O','R','A','N','T',' ','B','O','T']}>
                                    idx ={15}
                        </AnimatedLetters>
                        </h11>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer offset={3.7} speed={0.3}>
                    <div className='project3-intro'>
                        <h12>
                        Introducing the "Valorant Bot" project, designed to enhance the gaming experience in the popular game Valorant. This Python-based bot utilizes Pillow for image processing and SQL for data management, offering a built-in leaderboard feature.
                        <br/>
                        <br/>
                        After each game, the Valorant bot employs AI technology to capture game results from the screen. It extracts relevant data such as kills, deaths, assists, and headshots using advanced image recognition techniques. This data is then used to calculate player rankings based on various criteria, including win/loss ratio and total kills.
                        </h12>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3.9} speed={0.4}>
                    <div className='project3-feat'>
                        <h13>
                        The leaderboard is stored in a database, allowing users to connect with their friends and compare their performance. This feature promotes healthy competition among players and provides a way to track progress over time. By analyzing and presenting player statistics, the Valorant bot adds an additional layer of engagement and motivation for players to improve their skills and achieve higher rankings.
                        <br/>
                        <br/>
                        With its integration of AI, image processing, and database management, the Valorant bot showcases the power of technology in enhancing gaming experiences and fostering a sense of community among players.
                        </h13>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={4.3} speed={0.5}>
                    <div className='website'>
                        <h14>
                        <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray = {['P','O','R','T','F','O','L','I','O',' ','W','E','B','S','I','T','E']}>
                                    idx ={15}
                        </AnimatedLetters>
                        </h14>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={4.3} speed={0.3}>
                    <div className='website-intro'>
                        <h15>

                        <ul>
                        <li>
                        I have developed a dynamic and visually appealing React-based web portfolio that showcases my skills, projects, and accomplishments. This web portfolio serves as a comprehensive showcase of my expertise in web development and demonstrates my proficiency in React, HTML, CSS, and JavaScript.
                        </li>
                        
                        <li>
                        The portfolio features a modern and user-friendly design, with smooth navigation and interactive elements. It provides a seamless browsing experience for visitors, allowing them to explore different sections and learn more about my background, experience, and technical abilities.
                        </li>

                        <li>
                        The portfolio showcases a curated selection of my projects, highlighting their key features, technologies used, and outcomes achieved. 
                        Additionally, the web portfolio incorporates sections for my skills, education, and work experience, providing a comprehensive overview of my professional background. It also includes a contact form, enabling visitors to easily get in touch with me for potential collaborations, job opportunities, or inquiries.
                        
                        </li>

                        <li>
                        With its sleek design, informative content, and seamless user experience, my React web portfolio effectively showcases my abilities and achievements in a visually appealing and engaging manner. It serves as a powerful tool to create a lasting impression and attract potential clients, employers, and collaborators.
                        </li>

                        </ul>
                        
                        </h15>

                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={5} speed={0.2}>
                    <div className='project4'>
                        <h16>
                        <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['E', 'X', 'P', 'E', 'N', 'S', 'E', '', 'M', 'A', 'N', 'A', 'G', 'E', 'R', ' ', 'A', 'P', 'P']}
                                idx={15}

        
                            />


                        </h16>

                        <h17>
                            <li>
                            I have developed an expense manager app that allows users to track their expenses and manage their finances. This app is built using React Native and Firebase, with a sleek and user-friendly design.
                                
                            </li>

                            <li>
                            The app features a simple and intuitive interface, with a dashboard that displays the user's current balance and a list of their transactions. Users can add new transactions and specify the type of transaction (income or expense), the amount, and the date. The app also allows users to view their transaction history and filter transactions by date.

                            </li>

                            <li>
                            The app utilizes Firebase to store user data, allowing users to access their transaction history from any device. It also incorporates authentication features, enabling users to securely log in and protect their data. The app is designed to be scalable, with the potential to add new features such as budgeting tools and data visualization.

                            </li>

                            <li>

                            With its sleek design and intuitive interface, the expense manager app provides a convenient way for users to track their expenses and manage their finances. It showcases my skills in React Native and Firebase and demonstrates my ability to develop user-friendly mobile applications.
                            </li>


                        </h17>
                    </div>
                </ParallaxLayer>


            </Parallax>
            {/* )} */}




            

        </div>
    )
}

export default Projects;