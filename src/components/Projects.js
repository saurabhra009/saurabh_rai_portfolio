import React from 'react';


const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>Automatic Text Summarization</h3>
                <p>Research paper published in IEEE Xplore. The proposed system helps its users to reduce their surfing time and gives a summary prepared from multiple website links & documents or extracts keywords from a particular website or a document.</p>
            </div>
            <div className="project">
                <h3>Summarize it!</h3>
                <p>Produced a model that extracted data from multiple websites and providing a summary as well as keyword extraction from those websites using text rank algorithm which has an accuracy of 98%.</p>
            </div>
            <div className="project">
                <h3>Hostel Management System</h3>
                <p>Developed full working website for students searching for hostel rooms which provided facilities to book a hostel room near to desired school or place within 1 day of registration.</p>
            </div>
            <div className="project">
                <h3>Online Furniture Store</h3>
                <p>Implemented a B2B model which include user-friendly features such as product recommendations, quick checkout, and real-time order tracking to enhance customer satisfaction that increased sales by 15%.</p>
            </div>
            <div className="project">
                <h3>Watch Marketplace</h3>
                <p>Conceptualized and executed a dynamic C2C watch resale platform, streamlining the process for sellers while providing a curated marketplace for buyers. Spearheaded a user-centric approach, resulting in a 30% increase in seller retention and a 25% growth in buyer engagement, solidifying market presence and driving revenue.</p>
            </div>
        </section>
    );
};

export default Projects;
