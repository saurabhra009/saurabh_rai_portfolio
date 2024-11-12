import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPhp, faReact, faAws, faDocker, faLaravel, faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faNetworkWired, faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const skillsData = [
        { skill: "Java", icon: faJava },
        { skill: "ReactJS", icon: faReact },
        { skill: "Java Spring Boot", icon: faJava },
        { skill: "HTML", icon: faHtml5 },
        { skill: "CSS", icon: faCss3Alt },
        { skill: "JavaScript", icon: faJsSquare }, // Using the same Java icon for Spring Boot
        { skill: "PHP", icon: faPhp },
        { skill: "AWS", icon: faAws },
        { skill: "SQL", icon: faDatabase },
        { skill: "Laravel", icon: faLaravel },
        { skill: "Docker", icon: faDocker },
        { skill: "Linux", icon: faServer },
        { skill: "Networking", icon: faNetworkWired },
        { skill: "Data Structures & Algorithms", icon: faCode }, // Custom icon
        { skill: "Machine Learning", icon: faCode }, // Custom icon
        { skill: "Microservices", icon: faServer }, // Custom icon
        { skill: "NoSQL Databases", icon: faDatabase },
        { skill: "CI/CD", icon: faCode },
        { skill: "System Design", icon: faServer },
    ];

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                {skillsData.map((item, index) => (
                    <div className="skill-card" key={index}>
                        <FontAwesomeIcon icon={item.icon} className="skill-icon" />
                        <p>{item.skill}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
