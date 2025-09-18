import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = ({ projects }) => {
    // Map exact project titles to their corresponding image files
    const PROJECT_IMAGES = {
        'Second Hand Record Web': '/record.png',
        'Movie Archipelago': '/movie.png',
        'Itinerary Management System': '/itinerary.png',
        'Art Explorer CMS': '/art_explorer.png',
        'Radio Jigsaw Project': '/case_files.png'
    };

    // Get the correct image path for a project
    const getProjectImage = (project) => {
        // First check if we have an img property from the backend
        if (project.img) {
            // Use the img path from backend (should be /img/filename.png)
            return project.img;
        }
        
        // If no img property, try to match by title
        if (PROJECT_IMAGES[project.title]) {
            return PROJECT_IMAGES[project.title];
        }
        
        // Default fallback
        return '/img/itinerary.png';
    };

    return (
        <section id="projects" className="projects section projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={project._id || index} className="project-card">
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-tech">
                                    {project.technologies && project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-links">
                                    {project.link && (
                                        <a 
                                            href={project.link} 
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faGithub} /> Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-preview">
                                <img 
                                    src={getProjectImage(project)} 
                                    alt={`${project.title} Preview`} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;