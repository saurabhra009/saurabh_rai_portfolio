import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt, faTasks, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    const experiences = [
        {
            company: '23hourbids',
            role: 'Software Engineer',
            duration: 'Feb 2024 – Present',
            location: 'Remote, United States',
            responsibilities: [
                'Lead the complete lifecycle of website development using PHP Laravel Framework, improving user experience by 40% through performance optimizations and responsive design.',
                'Solely manage the website’s continuous integration and deployment processes, increasing website efficiency by 40%.',
                'Initiated and delivered 5+ new features within a 1-month period, boosting site functionality and user engagement by 25%.',
                'Oversaw the website’s hosting and maintenance, ensuring 99.9% uptime and enhancing site security by implementing advanced security protocols, resulting in a 50% reduction in vulnerability risks.'
            ]
        },
        {
            company: 'Tata Consultancy Services',
            role: 'Software Engineer',
            duration: 'Aug 2020 - Jul 2022',
            location: 'Mumbai, India',
            responsibilities: [
                'Collaborated with a team of 4 for the development of the customer service website for CIBC Bank, utilizing Java and JSP for the backend infrastructure and ReactJs for frontend.',
                'Led the seamless migration of customer data to the cloud, leveraging AWS CloudFormation for resource management and AWS RDS for robust database solutions.',
                'Implemented and tested new features, including serverless computing frameworks, to enhance website functionality.',
                'Successfully reduced project delivery time by 25% through the adoption of agile development methodology, CI/CD practices, and automated unit testing within AWS environments.'
            ]
        },
        {
            company: 'Tata Consultancy Services',
            role: 'Software Engineer Intern',
            duration: 'Jun 2019 - Aug 2019',
            location: 'Mumbai, India',
            responsibilities: [
                'Co-developedacross-platformmobileapplicationusingReactNative,ensuringseamlessperformanceacross.',
                'Optimized MongoDB for efficient data management and retrieval within the mobile application',
                'Integrated a highly effective chatbot, achieving an accuracy rate of 85%',
                'Led implementation of essential web services, completing mobile application within a tight 10-business-day deadline'
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <h2>Work Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-icon">
                            <FontAwesomeIcon icon={faUserTie} />
                        </div>
                        <div className="timeline-content">
                            <h3 className="company">
                                <FontAwesomeIcon icon={faBuilding} /> {exp.company}
                            </h3>
                            <p className="role">
                                <FontAwesomeIcon icon={faTasks} /> {exp.role}
                            </p>
                            <p className="duration">
                                <FontAwesomeIcon icon={faCalendarAlt} /> {exp.duration}
                            </p>
                            <p className="location">
                                <FontAwesomeIcon icon={faCalendarAlt} /> {exp.location}
                            </p>
                            {/* <ul className="responsibilities">
                                {exp.responsibilities.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;