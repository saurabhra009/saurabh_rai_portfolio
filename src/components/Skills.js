import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faReact, faAws, faDocker, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faNetworkWired, faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const skillsData = [
        { skill: "Java", icon: faJava },
        { skill: "Python", icon: faPython },
        { skill: "ReactJs", icon: faReact },
        { skill: "AWS", icon: faAws },
        { skill: "SQL", icon: faDatabase },
        { skill: "Docker", icon: faDocker },
        { skill: "Node.js", icon: faNodeJs },
        { skill: "Linux", icon: faServer },
        { skill: "Networking", icon: faNetworkWired },
        { skill: "Data Structures & Algorithms", icon: faCode }, // Custom icon
        { skill: "Machine Learning", icon: faPython }, // Custom icon
        { skill: "Microservices", icon: faPython }, // Custom icon
        // Additional Skills
        { skill: "NoSQL Databases", icon: faDatabase }, // Reusing faDatabase for NoSQL
        { skill: "CI/CD", icon: faCode }, // Reusing faCode for CI/CD
        { skill: "System Design", icon: faServer }, // Reusing faServer for System Design
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
