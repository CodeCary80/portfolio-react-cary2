import React from "react";

const About = () => {
    return(
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-container">
                    <div className="about-image">
                        <img src="/avatar.png" alt="Cary Zhu" />
                    </div>
                    <div className="about-content">
                        <p className="about-text">
                        Hello! I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly websites. 
                        </p>
                    </div>    
                </div>
            </div>
        </section>
    );
};

export default About;