"use client";
import Link from "next/link";
import { useState } from "react";
import { Github, BookMarked, Share, Linkedin , Home, ArrowBigLeft} from "lucide-react";
import { motion } from "framer-motion";

export const ProjectCard = ({
  projectName,
  description,
  techStack,
  githubLink,
  liveLink,
}) => {
  const stack = techStack.split(", ");
  return (
  
    <div className="transition ease-in-out hover:-translate-y-1 flex px-4 sm:px-5 py-8 flex-col gap-2 justify-between bg-[#112240] hover:bg-[#083344] text-white rounded">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-bold text-white/90">{projectName}</h3>
        {githubLink && (
          <div className="flex items-center">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
          </div>
        )}
        {liveLink && (
          <div className="flex items-center">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              {liveLink === "/Abstract.HM.pdf" ? (
                <BookMarked className="w-6 h-6" />
              ) : (
                <Share className="w-6 h-6" />
              )}
            </a>
          </div>
        )}
      </div>
      <p className="text-sm text-white/70">{description}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span key={index} className="text-[#64ffda]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const projects = [

  {
    projectName: "Breast Cancer Detection",
    description:
      "Developing an AI-based system to enhance the accuracy and efficiency of breast cancer detection and classification. By leveraging advanced machine learning algorithms, particularly deep learning, the system will analyze medical images or patient data to distinguish between benign and malignant breast tumors.",
    techStack: "Python, TensorFlow, Keras",
    githubLink: "",
  },
  {
    projectName: "NomadNet",
    description:
      "Leading the development of a travel planning platform designed to connect like-minded travelers, facilitating shared experiences and collaborative itinerary creation. Implementing key features including a sophisticated matching algorithm to connect users with similar travel plans. Deploying a CI/CD pipeline for efficient development, testing, and deployment processes.",
    techStack: "React, TailwindCSS, MongoDB",
    githubLink: "",
  },

  {
    projectName: "DeFi Savings Platform",
    description:
      "Building a platform that enables users to earn interest on their cryptocurrency holdings through a decentralized savings account. Unlike traditional savings accounts, this DeFi application operates on blockchain technology, ensuring transparency, security, and without the need for intermediaries like banks.",
    techStack: "Solidity, Ethereum, Web3.js, Metamask",
    githubLink: "",
  },
  {
    projectName: "Bionic Hand",
    description:
      "Assisting in the software integration for a pioneering project creating an affordable bionic hand for underprivelged children. Contributing expertise in research, literature review, product design, prototyping, and coding. ",
    techStack: "Python, SolidWorks, Arduino",
    liveLink: "/Abstract.HM.pdf",
  },

  {
    projectName: "Redshift",
    description:
      "Working on the avionics division specializing in developing PCBs and software for flight control boards (FCBs) and data acquisition boards, enhancing control and data recording during rocket launches. Using various software tools to continually add new features and improvements to the FCB and ground station software.",
    techStack: "Flutter, C, C#, Arduino",
    liveLink: "https://www.aerospacenu.com/redshift",
  },

  {
    projectName: "Portfolio",
    description:
      "Built this personal website with React and TailwindCSS, incorporating server-side rendering (SSR) and markdown components (MDX) to showcase personal projects and posts effectively.",
    techStack: "React, Next.js, TailwindCSS",
    githubLink: "https://github.com/Sedanah/final-portfolio",
    liveLink: "",
  },
  {
    projectName: "NU Sci",
    description:
      "Conducting comprehensive user research to identify usability pain points, leading to the implementation of a more intuitive navigation system and responsive design, ensuring seamless access across various devices and screen sizes. ",
    techStack: "React, Next.js, TailwindCSS",
    githubLink: "",
    liveLink: "",
  },
  {
    projectName: "Tutoring for Kids",
    description:
      "An inclusive educational platform offering free tutoring to disadvantaged children.",
    techStack: "React, Next.js, TailwindCSS",
    githubLink: "",
    liveLink: "",
  },
  {
    projectName: "Stock Prediction",
    description:
      "Developed an advanced stock prediction web application leveraging machine learning models and real-time data analysis to empower investors with accurate insights.",
    techStack: "Python",
    githubLink: "",
    liveLink: "",
  },
  {
    projectName: "Photo Editor",
    description:
      "Designed using the MVC design pattern, a photo editor that allows users to edit photos using a variety of tools.",
    techStack: "Java, Swing, MVC",
    githubLink: "",
    liveLink: "",
  },
  {
    projectName: "PassGen",
    description:
      "A password generator that generates a secure password based on user input using the XKCD method.",
    techStack: "Java",
    githubLink: "https://github.com/Sedanah/XKCD-Password-Generator",
    liveLink: "",
  },

];

export default function Page() {
  return (
    <div className="max-w-xl mx-auto">
      <header className="flex justify-between px-4 pt-16 pb-16">
        <Link href="/page">
           <div className="text-base font-semibold text-white">


           <Link href="/#page">

            <Home />
            </Link>

           </div>
          
        </Link>
        <motion.div
    initial={{ opacity: 0, y: -20}}
    animate={{ opacity: 1, y: 0 }}
     transition={{ duration: .5 }}
     className="transition ease-in-out"
   >
        <nav className="flex gap-4">
        <Link href = "/writing" className = "text-base font-semibold text-white hover:text-[#64ffda]">
        Writing
        </Link>
          <Link href="/resume.pdf" className="text-base font-semibold text-white hover:text-[#64ffda]">
            Resume
          </Link>
          <Link href="/#contact" className="text-base font-semibold text-white hover:text-[#64ffda]">
            Contact
          </Link>
        </nav>
        </motion.div>
      </header>
      <main className="px-4">
      <section className="pb-6">
      
        <h2 className="mb-4 text-xl font-semibold text-[#64ffda]">
          Projects
        </h2>
        <h3 className="mb-4 text-lg font-semibold text-[#64ffda]">
          2024
          </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
      </section>
      </main>
    </div>
    
  );
}
