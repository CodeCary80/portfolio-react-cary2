import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="projects section projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-tech">
                                    {project.technologies && project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-links">
                                    {project.links && (
                                        <>
                                            {project.links.demo && (
                                                <a 
                                                    href={project.links.demo} 
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faGlobe} /> Live Demo
                                                </a>
                                            )}
                                            {project.links.github && (
                                                <a 
                                                    href={project.links.github} 
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faGithub} /> Source Code
                                                </a>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="project-preview">
                                <img 
                                    src={project.image || '/api/placeholder/600/400'} 
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