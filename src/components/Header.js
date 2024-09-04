import React from 'react';
import './Header.css';
import profileImage from '../images/code_1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCopy, faBriefcase, faProjectDiagram, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="side-nav">
            <div className="profile-section">
                <img src={profileImage} alt="Profile" className="profile-img" />
            </div>
            <nav className="nav-menu">
                <ul>
                    <li>
                        <a href="#home">
                            <FontAwesomeIcon icon={faHome} className="nav-icon" /> <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <FontAwesomeIcon icon={faUser} className="nav-icon" /> <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            <FontAwesomeIcon icon={faCopy} className="nav-icon" /> <span>Technical Skills</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience">
                            <FontAwesomeIcon icon={faBriefcase} className="nav-icon" /> <span>Work Experience</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" /> <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#education">
                            <FontAwesomeIcon icon={faGraduationCap} className="nav-icon" /> <span>Education</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" /> <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <footer className="nav-footer">
                <p>© 2024 Saurabh Rai. All rights reserved.</p>
                <p>This template is customized with love by <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">Saurabh Rai</a></p>
            </footer>
        </div>
    );
};

export default Header;
