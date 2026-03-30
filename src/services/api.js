// Local data - no backend needed

const projectsData = [
  {
    _id: "1",
    title: "Smart Cook",
    technologies: ["React 18", "Anthropic Claude API", "JavaScript", "CSS3"],
    description: "An AI-powered recipe generator that suggests recipes based on ingredients you have on hand. Built with React and integrated with the Anthropic Claude API for instant, ingredient-based recipe suggestions.",
    link: "https://github.com/CodeCary80/Smart-Cook",
    demo: "https://smartcook801.netlify.app/",
    img: "smartcook.png"
  },
  {
    _id: "2",
    title: "Assembly: Rise",
    technologies: ["React 18", "JavaScript", "CSS3", "clsx", "react-confetti"],
    description: "A Hangman-style word game where players defend programming languages from Assembly. Features full game state management, per-language elimination logic, confetti on win, and screen reader accessibility support.",
    link: "https://github.com/CodeCary80/assembly-rise",
    demo: "https://assemblyrise.netlify.app/",
    img: "assembly.png"
  },
  {
    _id: "3",
    title: "Custom LMS Interface",
    technologies: ["WordPress", "PHP", "JavaScript", "TutorLMS", "MySQL"],
    description: "Developed a comprehensive course management interface for an educational platform featuring custom course card layouts, advanced search functionality, and streamlined navigation systems.",
    link: null,
    demo: null,
    img: "lms2.png"
  },
  {
    _id: "4",
    title: "Chillax Pack",
    technologies: ["React", "Laravel", "PostgreSQL", "PHP 8.2+", "Tailwind CSS"],
    description: "A full-stack evening plan generator for Toronto residents, matching user preferences including budget, group size, and energy level to personalized restaurant and activity recommendations.",
    link: "https://github.com/CodeCary80/obviousplan",
    demo: null,
    img: "chillax.png"
  },
  {
    _id: "5",
    title: "Itinerary Management System",
    technologies: ["ASP.NET Core", "C#", "MVC", "Entity Framework"],
    description: "A travel planning application built with ASP.NET Core, designed to help groups efficiently organize trips and manage shared expenses, destinations, and group activities.",
    link: null,
    demo: null,
    img: "itinerary.png"
  },
  {
    _id: "6",
    title: "Art Explorer CMS",
    technologies: ["PHP", "MySQL", "Bootstrap 5", "jQuery"],
    description: "A PHP-based Content Management System inspired by the National Gallery of Art Open Access Dataset, allowing users to explore and manage artworks and artists through a custom frontend and admin backend.",
    link: null,
    demo: null,
    img: "art_explorer.png"
  }
];

const skillsData = [
  { name: "JavaScript", category: "Language" },
  { name: "PHP", category: "Language" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
];

export const fetchSkills = async () => {
  return skillsData;
};

export const fetchProjects = async () => {
  return projectsData;
};