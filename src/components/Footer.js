import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Saurabh Manoj Rai</p>
            <ul className="footer-links">
                <li>
                    <a href="mailto:smr9@njit.edu" className="footer-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/saurabh-rai-34757a179/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
