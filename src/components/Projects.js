import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import watch from "../images/watch.jpg";
import IEEE from "../images/IEEE.jpg";
import furniture from "../images/Furniture.jpg";
import hostel from "../images/Hostel.jpg";
import summarize from "../images/summarize.jpg";

const Projects = () => {
  const projectData = [
    {
      title: "Automatic Text Summarization",
      description:
        "Research paper published in IEEE Xplore. The proposed system helps its users to reduce their surfing time and gives a summary prepared from multiple website links & documents or extracts keywords from a particular website or a document.",
      image: IEEE,
      link: "https://ieeexplore.ieee.org/document/9155852", // Actual project link
    },
    {
      title: "Summarize it!",
      description:
        "Produced a model that extracted data from multiple websites and providing a summary as well as keyword extraction from those websites using text rank algorithm which has an accuracy of 98%.",
      image: summarize,
      link: "https://ieeexplore.ieee.org/document/9155852",
    },
    // {
    //     title: "Hostel Management System",
    //     description: "Developed full working website for students searching for hostel rooms which provided facilities to book a hostel room near to desired school or place within 1 day of registration.",
    //     image: hostel,
    //     link: "#",
    // },
    // {
    //     title: "Online Furniture Store",
    //     description: "Implemented a B2B model which include user-friendly features such as product recommendations, quick checkout, and real-time order tracking to enhance customer satisfaction that increased sales by 15%.",
    //     image: furniture,
    //     link: "#",
    // },
    {
      title: "Watch Marketplace",
      description:
        "Conceptualized and executed a dynamic C2C watch resale platform, streamlining the process for sellers while providing a curated marketplace for buyers. Spearheaded a user-centric approach, resulting in a 30% increase in seller retention and a 25% growth in buyer engagement, solidifying market presence and driving revenue.",
      image: watch,
      link: "https://www.youtube.com/watch?v=OIsMwoOp4BQ",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title === "Automatic Text Summarization"
                  ? "View Paper"
                  : "View Project"}{" "}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
