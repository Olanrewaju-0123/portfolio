// Simple script to help organize project images
// Run this in your browser console or use as reference

const projectTemplate = {
  name: "Your Project Name",
  description: "Brief description of your project",
  image: "images/projects/your-project.jpg",
  liveUrl: "https://your-live-demo.com",
  githubUrl: "https://github.com/yourusername/project-repo",
  technologies: ["React", "Node.js", "MongoDB", "Express"],
};

// Example projects structure
const exampleProjects = [
  {
    name: "Solar Power Store App",
    description:
      "An e-commerce website leveraging React.js, TypeScript, and Sequelize ORM, connecting buyers and sellers in a seamless online shopping experience with real-time features.",
    image: "images/projects/solar-store-app.jpg",
    liveUrl: "https://solar-spark-store.vercel.app/",
    githubUrl: "https://github.com/Olanrewaju-0123/solar-spark-store",
    technologies: [
      "React.js",
      "TypeScript",
      "Sequelize ORM",
      "Tailwind CSS",
      "Docker",
      "PostgreSQL",
      "Paystack",
    ],
  },
  {
    name: "Task Management App",
    description:
      "A collaborative task management application built with React and Node.js, featuring real-time updates and team collaboration tools.",
    image: "images/projects/task-manager.jpg",
    liveUrl: "https://your-task-manager.vercel.app/",
    githubUrl: "https://github.com/yourusername/task-manager",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    name: "REST API Platform",
    description:
      "A high-performance REST API built with Golang and Sequelize ORM, featuring authentication, rate limiting, and comprehensive documentation with microservices architecture.",
    image: "images/projects/api-platform.jpg",
    liveUrl: "https://your-api-docs.com/",
    githubUrl: "https://github.com/yourusername/api-platform",
    technologies: ["Golang", "Sequelize ORM", "PostgreSQL", "JWT", "Docker"],
  },
];

// Function to generate HTML for a project
function generateProjectHTML(project) {
  return `
<div class="project-card">
  <div class="project-image">
    <img src="${project.image}" alt="${project.name}" />
    <div class="project-overlay">
      <a href="${
        project.liveUrl
      }" class="project-link" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-external-link-alt"></i>
      </a>
      <a href="${
        project.githubUrl
      }" class="project-github" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
  <div class="project-content">
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <div class="project-tech">
      ${project.technologies
        .map((tech) => `<span class="tech-tag">${tech}</span>`)
        .join("")}
    </div>
  </div>
</div>`;
}

// Usage example:
// console.log(generateProjectHTML(exampleProjects[0]));

console.log("Project setup script loaded!");
console.log(
  "Use generateProjectHTML(projectObject) to create HTML for any project"
);
