import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-info">
                <h1>Saurabh Manoj Rai</h1>
                <p>Software Engineer</p>
                <a href="https://www.linkedin.com/in/saurabh-rai-34757a179/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </header>
    );
};

export default Header;
