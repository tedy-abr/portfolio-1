import rainydaysImg from "../assets/rainydays.jpg";

export const projects = [
  {
    id: "css-frameworks",
    title: "CSS Frameworks",
    slug: "css-frameworks",
    category: "CSS",
    shortDescription:
      "A responsive e-commerce front-end built to demonstrate proficiency with CSS frameworks.",
    fullDescription:
      "Detailed description of the CSS Frameworks project will go here. It involves building a responsive e-commerce storefront.",
    thumbnail: rainydaysImg,
    image: rainydaysImg,
    imageCaption: "Homepage screenshot of the CSS Frameworks project",
    liveUrl: "#",
    githubUrl: "#",
    techStack: ["HTML", "Tailwind"],
    improvements: [
      "Added responsive navigation",
      "Improved accessibility contrast",
    ],
    challenges: "Handling complex grid layouts across breakpoints.",
    whatILearned: "How to effectively structure utility classes vs custom CSS.",
  },
  {
    id: "js-frameworks",
    title: "JavaScript Frameworks",
    slug: "js-frameworks",
    category: "JavaScript",
    shortDescription:
      "An API-driven application exploring modern JavaScript framework features and state management.",
    fullDescription:
      "Detailed explanation of the JavaScript Frameworks project, API integration, and routing.",
    thumbnail: rainydaysImg,
    image: rainydaysImg,
    imageCaption: "Dashboard view of the JavaScript project",
    liveUrl: "#",
    githubUrl: "#",
    techStack: ["React", "Vite"],
    improvements: ["Optimized API calls", "Added error boundaries"],
    challenges: "Managing global state without over-rendering.",
    whatILearned: "The React lifecycle and hook dependencies.",
  },
  {
    id: "semester-project-2",
    title: "Semester Project 2",
    slug: "semester-project-2",
    category: "Fullstack",
    shortDescription:
      "The final semester project combining front-end frameworks with external API integrations.",
    fullDescription:
      "A comprehensive breakdown of Semester Project 2, including auth, CRUD, and deployment.",
    thumbnail: rainydaysImg,
    image: rainydaysImg,
    imageCaption: "Main interface of Semester Project 2",
    liveUrl: "#",
    githubUrl: "#",
    techStack: ["React", "TailwindCSS", "REST API"],
    improvements: [
      "Enhanced mobile layout",
      "Fixed keyboard navigation issues",
    ],
    challenges: "Handling authentication tokens securely.",
    whatILearned: "End-to-end application architecture.",
  },
];
