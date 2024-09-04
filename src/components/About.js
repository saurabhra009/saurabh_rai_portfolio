import React from 'react';
import './About.css';
import profilePhoto from '../images/Saurabh_Profile.jpeg'; // Ensure the correct path to your photo
import { ReactTyped } from 'react-typed'; // Use named import for ReactTyped

const About = () => {
    return (
        <section id="about" className="about-me-section">
            {/* Hero Section Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    Hello, I'm Saurabh Rai
                </h1>
                <h2 className="hero-subtitle">
                    <ReactTyped
                        strings={[
                            'Full Stack Developer',
                            'ReactJs Developer',
                            'Software Engineer',
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </h2>
                <p className="hero-description">
                    I am a passionate developer with experience in building dynamic web applications and software solutions.
                </p>
                {/* Download Resume Button */}
                <a href="/Saurabh_Rai_Resume.pdf" download className="cta-button">
                    Download My Resume
                </a>
            </div>

            {/* About Me Section Content */}
            <div className="about-me-container">
                <div className="about-me-photo">
                    <img src={profilePhoto} alt="Saurabh Rai" className="profile-photo" />
                </div>
                <div className="about-me-content">
                    <p>
                        I am Saurabh Rai, a dedicated and passionate software engineer with a strong background in computer science and engineering. I hold a Master's degree in Computer Science from the New Jersey Institute of Technology and a Bachelor's degree in Information Technology from the University of Mumbai.
                    </p>
                    <p>
                        My technical expertise spans various domains, including Java, Python, ReactJs, AWS, SQL, Docker, Node.js, and Linux. Throughout my professional journey, I have gained valuable experience in developing scalable and efficient software solutions.
                    </p>
                    <p>
                        I thrive in challenging environments that push me to innovate and grow. My goal is to leverage my skills and knowledge to develop cutting-edge solutions that make a difference.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
