import React, { useState } from 'react';
import './Journey.css';

const Journey = () => {
    const [activePoint, setActivePoint] = useState(null);

    const journeyData = [
        {
            year: "2000",
            title: "Childhood",
            description: "Born and raised in a small town, where I developed a passion for technology and computers.",
        },
        {
            year: "2010",
            title: "High School",
            description: "Excelled in science and mathematics, participated in various science fairs and competitions.",
        },
        {
            year: "2016",
            title: "University of Mumbai",
            description: "Pursued a Bachelor's degree in Information Technology, achieved a GPA of 8.41/10.",
        },
        {
            year: "2022",
            title: "New Jersey Institute of Technology",
            description: "Started a Master's degree in Computer Science, focusing on advanced algorithms and data structures.",
        },
        {
            year: "2024",
            title: "First Job at 23hourbids",
            description: "Joined 23hourbids as a Software Engineer, where I led the development of major projects and improved application performance.",
        },
        {
            year: "2024",
            title: "Present Day",
            description: "Continuing my journey in tech, always learning and exploring new frontiers in software development.",
        },
    ];

    const handlePointClick = (index) => {
        setActivePoint(activePoint === index ? null : index);
    };

    return (
        <section id="journey" className="journey-section">
            <h2 className="section-title">My Journey</h2>
            <div className="horizontal-timeline">
                {journeyData.map((journey, index) => (
                    <div key={index} className="timeline-item">
                        <div
                            className={`timeline-point ${activePoint === index ? 'active' : ''}`}
                            onClick={() => handlePointClick(index)}
                        >
                            <span className="timeline-year">{journey.year}</span>
                        </div>
                        {activePoint === index && (
                            <div className="timeline-content">
                                <h3>{journey.title}</h3>
                                <p>{journey.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Journey;
