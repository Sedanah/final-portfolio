// "use client";
// import Link from "next/link";
// import { TypeAnimation } from "react-type-animation";
// import { useState } from "react";
// import { Github, Share, Music4, Linkedin} from "lucide-react";



// export default function Home() {
//     return (
  
//         <div className="max-w-xl mx-auto ">
  
//           <header className="flex justify-between px-4 pt-16 pb-16">
//             <Link href="https://www.linkedin.com/in/hadiahmashhour/">
//               <h1 className="text-base font-semibold text-white">
//                 {" "}
//                 <Linkedin />
//               </h1>
//             </Link>
//             <nav className="flex gap-4">
//               <Link
//                 href="/resume.pdf"
//                 className="text-base font-semibold text-white"
//               >
//                 Resume
//               </Link>
//               <Link
//                 className="text-base font-semibold text-white"
//                 href="/#contact"
//               >
//                 Contact
//               </Link>
//             </nav>
//           </header>

//           <section className="pb-6 ">

// <h2 className="mb-4 text-base font-semibold text-[#64ffda]">
//   Projects
// </h2>

// <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
//   {projects.map((project, index) => (
//     <ProjectCard key={index} {...project} />
//   ))}
// </div>

// <section className="py-8" id="contact">
//               <h2 className="mb-4 text-base font-semibold text-white/90">
//                 Contact
//               </h2>

//               <div className="flex">
//                 <div className="grid gap-4 grid-cols-content">
//                   <span className="text-white/50">Email</span>
//                   <span className="text-white/50">LinkedIn</span>
//                   <span className="text-white/50">Github</span>
//                 </div>

//                 <div className="grid gap-4 ml-8 grid-cols-content">
//                   <Link href="/">
//                     {" "}
//                     <span className="text-white/50">
//                       {" "}
//                       mashhour.h@northeastern.edu
//                     </span>{" "}
//                   </Link>
//                   <Link href="https://www.linkedin.com/in/hadiahmashhour/">
//                     {" "}
//                     <span className="text-white/50">
//                       {" "}
//                       in/hadiahmashhour
//                     </span>{" "}
//                   </Link>
//                   <Link href=" https://github.com/Sedanah">
//                     {" "}
//                     <span className="text-white/50"> git/Sedanah</span>{" "}
//                   </Link>{" "}
//                 </div>
//               </div>
//             </section>
//           </section>
       
 

//     </div>
//   );
// }

// const projects = [


//   {
//     projectName: "NomadNet",
//     description: "Leading the development of a travel planning platform designed to connect like-minded travelers, facilitating shared experiences and collaborative itinerary creation. Implementing key features including a sophisticated matching algorithm to connect users with similar travel plans. Deploying a CI/CD pipeline for efficient development, testing, and deployment processes, reducing time-to-market and enabling rapid iteration based on user feedback.",
//     techStack: "React, TailwindCSS, MongoDB",
//     githubLink: "",
//   },

//   {
//     projectName: "DeFi Savings Platform",
//     description: "Building a platform that enables users to earn interest on their cryptocurrency holdings through a decentralized savings account. Unlike traditional savings accounts, this DeFi application operates on blockchain technology, ensuring transparency, security, and without the need for intermediaries like banks.",
//     techStack: "Solidity, Ethereum, Web3.js, Metamask",
//     githubLink: "",
//   }
// ,
//   {
//     projectName: "Bionic Hand",
//     description: "Assisting in the software integration for a pioneering project creating an affordable bionic hand for underprivelged children. Contributing expertise in research, literature review, product design, prototyping, and coding, showcasing a comprehensive skill set in driving innovative solutions. ",
//     techStack: "Python, SolidWorks, Arduino",
//     liveLink: "https://www.giveahandclub.org/projects-7",

    
//   },

//   {
//     projectName: "Redshift",
//     description:
//       "Working on the avionics division specializing in developing electronics, PCBs, and software for flight control boards (FCBs) and data acquisition boards, enhancing control and data recording during rocket launches. Using various software tools to continually add new features and improvements to the FCB and ground station software.",
//     techStack: "Flutter, C, C#, Arduino",
//     liveLink: "https://www.aerospacenu.com/redshift",
//   },

//   {
//     projectName: "Portfolio",
//     description:
//       "Built this personal website with React and TailwindCSS, incorporating server-side rendering (SSR) and markdown components (MDX) to showcase personal projects and posts effectively.",
//     techStack: "React, Next.js, TailwindCSS",
//     githubLink: "https://github.com/Sedanah/final-portfolio",
//     liveLink: "",
//   },
//   {
//     projectName: "NU Sci",
//     description: "Conducting comprehensive user research to identify usability pain points, leading to the implementation of a more intuitive navigation system and responsive design, ensuring seamless access across various devices and screen sizes. ",
//     techStack: "React, Next.js, TailwindCSS",
//     githubLink: "",
//     liveLink: "https://nuscimagazine.com/",
//   },
//   {
//     projectName: "Tutoring for Kids",
//     description:
//       "An inclusive educational platform offering free tutoring to disadvantaged children.",
//     techStack: "React, Next.js, TailwindCSS",
//     githubLink: "www.github.com",
//     liveLink: "",
//   },
//   {
//     projectName: "Stock Prediction",
//     description:
//       "Developed an advanced stock prediction web application leveraging machine learning models and real-time data analysis to empower investors with accurate insights.",
//     techStack: "Python",
//     githubLink: "www.github.com",
//     liveLink: "",
//   },
//   {
//     projectName: "Photo Editor",
//     description:
//       "Designed using the MVC design pattern, a photo editor that allows users to edit photos using a variety of tools.",
//     techStack: "Java, Swing, MVC",
//     githubLink: "www.github.com",
//     liveLink: "",
//   },
//   {
//     projectName: "PassGen",
//     description:
//       "A password generator that generates a secure password based on user input using the XKCD method.",
//     techStack: "Java",
//     githubLink: "https://github.com/Sedanah/XKCD-Password-Generator",
//     liveLink: "",
//   },
// ];

// export const ProjectCard = ({
//   projectName,
//   description,
//   techStack,
//   githubLink,
//   liveLink,
// }) => {
//   const stack = techStack.split(", ");

//   return (
//     <div className="transition ease-in-out hover:-translate-y-1 flex px-5 py-8 flex-col gap-2 justify-between bg-[#202a377a] hover:bg-[#14342d] text-white rounded">
//       <div className="flex flex-row items-center justify-between">
//         <h3 className="text-xl font-bold  text-white/90">{projectName}</h3>
//         {githubLink && (
//           <div className="flex items-center">
//             <a href={githubLink} target="_blank" rel="noopener noreferrer">
//               <Github className="w-6 h-6" />
//             </a>
//           </div>
//         )}
//         {liveLink && (
//           <div className="flex items-center">
//             <a href={liveLink} target="_blank" rel="noopener noreferrer">
//               <Share className="w-6 h-6" />
//             </a>
//           </div>
//         )}
//       </div>
//       <p className="text-white/70 text-sm">{description}</p>
//       <div className="flex flex-row flex-wrap gap-2">
//         {stack.map((tech, index) => (
//           <span key={index} className="text-[#64ffda]">
//             {tech}
//           </span>
//         ))}
//       </div>
//     </div>
//     // RAWR
//   );
// };

// export default function Projects() {
//   return (
//     <div className="projects-page-container">
//       <h1>All Projects</h1>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// }
