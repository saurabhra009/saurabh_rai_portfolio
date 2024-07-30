import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h2>Work Experience</h2>
            <div className="job">
                <h3>23hourbids - Software Engineer</h3>
                <p>Feb 2024 – Present</p>
                <ul>
                    <li>Lead the complete lifecycle of website development using PHP Laravel Framework, improving user experience by 40% through performance optimizations and responsive design.</li>
                    <li>Solely manage the website’s continuous integration and deployment processes, increasing website efficiency by 40%.</li>
                    <li>Initiate and delivered 5+ new features within a 1-month period, boosting site functionality and user engagement by 25%.</li>
                    <li>Oversee the website’s hosting and maintenance, ensuring 99.9% uptime and enhancing site security by implementing advanced security protocols, resulting in a 50% reduction in vulnerability risks.</li>
                </ul>
            </div>
            <div className="job">
                <h3>Tata Consultancy Services - Software Engineer</h3>
                <p>Aug 2020 - Jul 2022</p>
                <ul>
                    <li>Collaborated with a team of 4 for the development of the customer service website for CIBC Bank, utilizing Java and JSP for the backend infrastructure and ReactJs for frontend.</li>
                    <li>Led the seamless migration of customer data to the cloud, leveraging AWS CloudFormation for resource management and AWS RDS for robust database solutions.</li>
                    <li>Implemented and tested new features, including serverless computing frameworks, to enhance website functionality.</li>
                    <li>Successfully reduced project delivery time by 25% through the adoption of an agile development methodology, continuous integration/continuous deployment (CI/CD) practices, and automated unit testing within AWS environments.</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
