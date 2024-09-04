import React from 'react';
import './Education.css';
import njitLogo from '../images/njit.jpg'; // Make sure to replace with the correct path to the NJIT image
import mumbaiLogo from '../images/mumbai.jpg'; // Make sure to replace with the correct path to the University of Mumbai image

const Education = () => {
    const educationData = [
        {
            school: "New Jersey Institute of Technology",
            degree: "Master of Science in Computer Science",
            gpa: "GPA: 3.7/4",
            duration: "Aug 2022 – May 2024",
            image: njitLogo
        },
        {
            school: "University of Mumbai",
            degree: "Bachelor of Engineering in Information Technology",
            gpa: "GPA: 8.41/10",
            duration: "Aug 2016 – Oct 2020",
            image: mumbaiLogo
        }
    ];

    return (
        <section id="education" className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
                {educationData.map((edu, index) => (
                    <div className="education-card" key={index}>
                        <div className="education-image">
                            <img src={edu.image} alt={edu.school} />
                        </div>
                        <div className="education-content">
                            <h3>{edu.school}</h3>
                            <p>{edu.degree}</p>
                            <p>{edu.gpa}</p>
                            <p>{edu.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
