import RetroGames from "../assets/RetroGames-HomePage.png";
import SocialHub from "../assets/SocialHub-HomePage.png";
import NidarBid from "../assets/semester-project-2-homepage.png";

export const projects = [
  {
    id: "js-frameworks",
    title: "JavaScript Frameworks",
    slug: "js-frameworks",
    category: "JavaScript",
    shortDescription:
      "A Next.js game discovery app where users can browse, search, sort, view details, and save favourite retro games.",
    fullDescription:
      "RetroGames is a responsive game discovery application built for the Noroff JavaScript Frameworks Course Assignment. The project was developed with Next.js, React, TypeScript, and Tailwind CSS, using the Noroff V2 API to fetch and display classic game data. The goal of the project was to create a clean and user-friendly application where users can browse retro games, search through the game list, sort results, view detailed information about each game, explore games by genre, and save favourite games for later. The favourites feature uses React Context and localStorage, which allows saved games to remain available even after the page is refreshed. The application uses the Next.js App Router to handle multiple pages, including the home page, game details pages, a genres page, and a favourites page. Dynamic routing is used for individual game pages, making the app feel structured and easy to navigate. Tailwind CSS was used to create a responsive layout that works across screen sizes, while React Hot Toast provides small feedback messages when users add or remove games from their favourites. As part of the Portfolio 2 improvement, I improved the user experience by replacing the original generic loading spinner with responsive skeleton loading states. A skeleton grid was added for the game list loading state, and a separate route-specific skeleton layout was created for individual game detail pages. This gives users a clearer visual preview of the page structure while the content is loading and makes the transition feel smoother. I also added small accessibility improvements by giving the search input and sort dropdown proper aria-labels. This makes the form controls easier to understand for screen reader users and improves the overall accessibility of the application. This project helped me gain more practical experience with React-based frameworks, TypeScript, routing, reusable components, client-side state management, API data fetching, and user experience improvements in a modern front-end application.",
    thumbnail: RetroGames,
    image: RetroGames,
    imageCaption: "Homepage screenshot of JavaScript Frameworks (RetroGames)",
    liveUrl: "https://retro-games-tawny.vercel.app/",
    githubUrl: "https://github.com/tedy-abr/retro-games",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    improvements: [
      "Skeleton loading states",
      "Route-specific loading UI",
      "Loading and accessibility",
    ],
  },
  {
    id: "css-frameworks",
    title: "CSS Frameworks",
    slug: "css-frameworks",
    category: "CSS",
    shortDescription:
      "A responsive social media app built with Tailwind CSS, where users can log in, post, search, like, and manage content.",
    fullDescription:
      "SocialHub is a responsive social media platform built for the Noroff CSS Frameworks / JavaScript 2 course project. The project was developed with HTML, vanilla JavaScript, Vite, Tailwind CSS, and the Noroff Social API. The goal of the project was to create a social media-style application where users can register, log in, view a global feed of posts, search through posts, create new posts, edit or delete their own content, react to posts, and manage their profile. The project uses JavaScript modules to separate functionality into reusable files, while Tailwind CSS is used to create a responsive and consistent interface across the different pages. The website includes several pages, such as a landing page, login page, registration page, feed page, profile page, create post page, edit post page, and single post page. This gives the project a realistic multi-page structure and shows how a front-end application can communicate with an external API. As part of the Portfolio 2 improvement, I focused on accessibility, semantic HTML, and mobile navigation. The main post component was refactored because the previous structure wrapped the entire post card in one clickable link while also containing other interactive elements such as like, edit, and delete buttons. This is invalid HTML and can create problems for keyboard users and screen readers. The improvement separated the clickable parts of the card from the buttons, making the post structure more semantic and accessible. I also improved the mobile navigation by fixing the hamburger menu button, which previously had no visible icon. An SVG hamburger icon and accessibility attributes were added so the menu is easier to see and use on smaller screens. This project helped me practise working with Tailwind CSS, responsive design, API communication, authentication flow, reusable JavaScript modules, and accessibility improvements in a front-end project.",
    thumbnail: SocialHub,
    image: SocialHub,
    imageCaption: "Home page screenshot of CSS Frameworks (SocialHub)",
    liveUrl: "https://teal-snickerdoodle-45cd7a.netlify.app/index.html",
    githubUrl: "https://github.com/tedy-abr/JavaScript2",
    techStack: ["HTML5", "Tailwind", "JavaScript", "Vite", "Noroff Social API"],
    improvements: [
      "Global footer component",
      "Reusable site footer",
      "Footer structure improvement",
    ],
  },
  {
    id: "semester-project-2",
    title: "Semester Project 2",
    slug: "semester-project-2",
    category: "Semester Project 2",
    shortDescription:
      "A responsive auction house app where users can browse listings, create auctions, place bids, and manage profiles.",
    fullDescription:
      "NidarBid is a responsive front-end auction house application built for the Noroff Semester Project 2 assignment. The project was developed with HTML5, vanilla JavaScript, Tailwind CSS, and Vite, using the Noroff Auction API to handle listings, user profiles, credits, and bidding functionality. The goal of the project was to create a modern auction platform where users can browse active listings, search and sort auction items, register and log in, create their own listings, view detailed auction pages, place bids, and manage their profile. The application also includes a credit system, allowing users to track their available credits when participating in auctions. The project is structured as a multi-page front-end application with pages for the homepage, listing details, registration, login, profile, edit profile, and create listing. JavaScript modules are used to organize the code, while Tailwind CSS provides a responsive and consistent design across mobile, tablet, and desktop screen sizes. As part of the Portfolio 2 improvement, I improved the layout and structure by adding a reusable global footer component. Before this improvement, the pages ended abruptly and the footer area was empty, which made the website feel unfinished. Instead of hardcoding the footer separately on every page, I created a reusable `Footer.js` component and injected it through `main.js`. This follows the DRY principle, meaning the footer content is maintained in one place and can be reused across the whole website. The footer also includes brand information, quick navigation links, account links, and a dynamic copyright year. This made the project feel more complete, more professional, and easier to maintain. This project helped me practise API integration, user authentication, bidding logic, responsive design, reusable JavaScript components, and project structure in a larger front-end application.",
    thumbnail: NidarBid,
    image: NidarBid,
    imageCaption: "Main interface of Semester Project 2",
    liveUrl: "https://nidarbid.netlify.app/",
    githubUrl: "https://github.com/tedy-abr/semester-project-2",
    techStack: ["HTML5", "Tailwind", "JavaScript", "Vite", "TailwindCSS"],
    improvements: [
      "Global footer component",
      "Footer layout improvement",
      "Footer component refactor",
    ],
  },
];
