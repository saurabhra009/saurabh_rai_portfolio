import React from 'react';
import './Resume.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2>Resume</h2>
            {/* Download Button */}
            <a href="/Saurabh_Rai_Resume.pdf" download className="download-button">
                <FontAwesomeIcon icon={faDownload} /> Download My Resume
            </a>
        </section>
    );
};

export default Resume;
