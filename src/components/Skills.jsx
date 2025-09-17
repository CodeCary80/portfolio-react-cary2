import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, faCss3Alt, faJs, faReact, 
    faVuejs, faBootstrap, faNodeJs, 
    faGitAlt, faGithub, faPhp
} from '@fortawesome/free-brands-svg-icons';
import { 
    faServer, 
    faDatabase, 
    faTerminal, 
    faCode, 
    faMobile 
} from '@fortawesome/free-solid-svg-icons';


const SKILL_ICONS = {
    'HTML5': faHtml5,
    'CSS3': faCss3Alt,
    'JavaScript': faJs,
    'TypeScript': faCode,
    'React': faReact,
    'Angular JS': faVuejs,
    'Bootstrap': faBootstrap,
    'Tailwind CSS': faCode,
    'Node.js': faNodeJs,
    'Express': faServer,
    'MongoDB': faDatabase,
    'MySQL': faDatabase,
    'PHP': faPhp,
    'Laravel': faCode,
    'Git': faGitAlt,
    'GitHub': faGithub,
    'Command Line': faTerminal,
    'REST APIs': faCode,
    'ASP.NET': faMobile
};

const Skills = ({ skills }) => {
    // Categorize skills
    const categorizeSkills = (allSkills) => {
        const categories = {
            'LANGUAGES': [],
            'FRONTEND': [],
            'BACKEND': [],
            'TOOLS & OTHERS': []
        };

        allSkills.forEach(skill => {
            switch(skill.category) {
                case 'Frontend':
                    categories['FRONTEND'].push(skill);
                    break;
                case 'Backend':
                    categories['BACKEND'].push(skill);
                    break;
                case 'Database':
                    categories['BACKEND'].push(skill);
                    break;
                case 'Tools':
                    categories['TOOLS & OTHERS'].push(skill);
                    break;
                default:
                    categories['LANGUAGES'].push(skill);
            }
        });

        return categories;
    };

    const categorizedSkills = categorizeSkills(skills);

    const SkillCategory = ({ title, skillList }) => (
        <div className="skills-category">
            <h3>{title}</h3>
            <div className="skill-list">
                {skillList.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <FontAwesomeIcon 
                            icon={SKILL_ICONS[skill.name] || faCode} 
                            className={`skill-icon ${skill.name.toLowerCase().replace(/\s+/g, '')}`} 
                        />
                        <div className="skill-name">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-container">
                    {Object.entries(categorizedSkills).map(([category, skills]) => 
                        skills.length > 0 && (
                            <SkillCategory 
                                key={category} 
                                title={category} 
                                skillList={skills} 
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;