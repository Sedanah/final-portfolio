"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { Github, Heart, Share, BookMarked, Linkedin, Link2, Mail } from "lucide-react";
import { motion } from 'framer-motion';



export default function Home() {
    // // State to manage theme (defaulting to system preference or 'light')
    // const [theme, setTheme] = useState(() => {
    //   return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    // });
  
    // // Toggle theme and store preference
    // const toggleTheme = () => {
    //   const newTheme = theme === 'light' ? 'dark' : 'light';
    //   setTheme(newTheme);
    //   localStorage.setItem('theme', newTheme);
    // };
  
    // // Apply the theme class to the body
    // useEffect(() => {
    //   document.body.className = theme;
    // }, [theme]);
  
    return (

    <div className="max-w-xl mx-auto ">
    {/* // <button onClick={toggleTheme}>Toggle Theme</button> */}
      <header className="flex justify-between px-4 pt-16 pb-16">
        <Link href="https://www.linkedin.com/in/hadiahmashhour/">
          <h1 className="text-base font-semibold text-white">
            {" "}
            <Linkedin />
          </h1>
        </Link>
        <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
     transition={{ duration: .5 }}
     className="transition ease-in-out"
   >

   {/* //make a responsive side navbar when the screen is small */}

<nav className="flex gap-4">
        <Link href="/projects" className="text-base font-semibold text-white hover:text-[#64ffda]">
            Projects
          </Link>
          <Link href="/writing" className="text-base font-semibold text-white hover:text-[#64ffda]">
            Writing
          </Link>
          <Link
            href="/Resume.pdf"
            className="text-base font-semibold text-white hover:text-[#64ffda]">
            Resume
            </Link>
          <Link className="text-base font-semibold text-white  hover:text-[#64ffda]" href="mailto:mashhour.h@northeastern.edu">
            <Mail/>  
          </Link>
        </nav>


        </motion.div> 
      </header> 


      <motion.div
    initial={{ opacity: 0, y: -20}}
    animate={{ opacity: 1, y: 0 }}
     transition={{ duration: .7 }}
     className="transition ease-in-out"
   >
      <main className="px-4">
        <section className="pb-10">
          <h1 className="mb-4 text-4xl font-semibold text-white">
            <span style={{ marginRight: "0.3em" }}>Hi, I am</span>
            <span className="text-[#64ffda]">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially l
                  "Sedanah",
                  2000,
                  " a developer",
                  1000,
                  " a designer",
                  1000,
                ]}
                wrapper="span"
                speed={25}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />{" "}
              <br />
            </span>
         
            <span className="text-white/60">
              Passionate about crafting digital experiences
            </span>
            
          </h1>
     
          <p className="text-base leading-6 text-white/70">
            Hey, I am Hadiah! (but go by Sedanah). I am a student at
            Northeastern University majoring in Computer Science and Business
            with a concentration in Finance. Each past adventure fuels my
            passion and pushes me closer to creating impactful connections in
            the digital realm.
          </p>
          
        </section>
        <motion.div
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1}}
  className="transition ease-in-out"
>
        <section className="pb-6 ">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-base font-semibold text-[#64ffda]">Projects</h2>
    <Link href="/projects">
      <div className="  text-sm text-[#64ffda] font-semibold bg-[#0A1930] hover:bg-[#164e63] transition duration-300 ease-in-out py-3 px-2 rounded animate-bounce">
        View more projects
      </div> 
    </Link>
  </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* //experience section */}

          <section className="py-8">
            <h2 className="mb-4 text-base font-semibold text-[#64ffda]">
              Experience
            </h2>
            <ExperienceSection />

            <section className="py-8" id="contact">
              <h2 className="mb-4 text-base font-semibold text-white/90">
                Contact
              </h2>

              <div className="flex">
                <div className="grid gap-4 grid-cols-content">
                  <span className="text-white/50">Email</span>
                  <span className="text-white/50">LinkedIn</span>
                  <span className="text-white/50">Github</span>
                </div>

                <div className="grid gap-4 ml-8 grid-cols-content">
                  <Link href="/">
                    {" "}
                    <span className="text-white/50">
                      {" "}
                      mashhour.h@northeastern.edu
                    </span>{" "}
                  </Link>
                  <Link href="https://www.linkedin.com/in/hadiahmashhour/">
                    {" "}
                    <span className="text-white/50">
                      {" "}
                      in/hadiahmashhour
                    </span>{" "}
                  </Link>
                  <Link href=" https://github.com/Sedanah">
                    {" "}
                    <span className="text-white/50"> git/Sedanah</span>{" "}
                  </Link>{" "}
                </div>
              </div>
            </section>
          </section>
        </section>
{/* 
//make a footer for the page that stays at the bottom of the page that says "Made with ❤️ by Sedanah" */}

        <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
            
  transition={{ duration: 1}}
  className="transition ease-in-out"
>

<div className="border-t border-white/10"></div>
<footer className="flex justify-center items-center py-8 text-white/70">
  Made with <span className="px-1"><Heart/></span> by Sedanah
</footer>




        </motion.div>
        </motion.div>

      </main>
      </motion.div>
    </div>
  );
}

const projects = [
  
  {
    projectName: "NomadNet",
    description:
      "Leading the development of a travel planning platform designed to connect and faciliate collaborative itinerary creation. Deploying a CI/CD pipeline for efficient development, testing, and deployment processes.",
    techStack: "React, TailwindCSS, MongoDB",
    githubLink: "",
  },

  {
    projectName: "DeFi Savings Platform",
    description:
      "Building a platform that enables users to earn interest on their cryptocurrency holdings through a decentralized savings account. Ensures transparency, security, and without the need for intermediaries like banks.",
    techStack: "Solidity, Ethereum, Web3.js, Metamask",
    githubLink: "",
  },
  {
    projectName: "Bionic Hand",
    description:
      "Integrating software creating an affordable bionic hand for underprivelged children. Contributing expertise in research, literature review, product design, prototyping, and coding. ",
    techStack: "Python, SolidWorks, Arduino",
    liveLink: "/Abstract.HM.pdf",
  },

  {
    projectName: "Redshift",
    description:
      "Working on the avionics division specializing in developing PCBs and software for flight control boards (FCBs) and data acquisition boards, enhancing control and data recording during rocket launches. Improving FCB and ground station software.",
    techStack: "Flutter, C, C#, Arduino",
    liveLink: "https://www.aerospacenu.com/redshift",
  },

  
];


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
              <Github className="w-6 h-6 text-[#64ffda]" />
            </a>
          </div>
        )}
        {liveLink && (
  <div className="flex items-center">
    <a href={liveLink} target="_blank" rel="noopener noreferrer">
      {liveLink === "/Abstract.HM.pdf" ? (
        <div className="relative">
          
        </div>
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

export const ExperienceCard = ({ date, company, role, description, index }) => {
  return (
    <div className="grid items-start grid-cols-2">
      <span className="text-white/50 ">{date}</span>
      <div className="flex flex-col">
        <span className="text-[#64ffda]">{company}</span>
        <span className="text-sm text-white/40"> {role}</span>
        <p className="mt-2 text-white/70 ">{description}</p>
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="space-y-10">
      <ExperienceCard {...experiences[0]} />
      {showAll &&
        experiences.slice(1).map((experience, index) => (
          <ExperienceCard {...experience} key={index} index={index} />
        ))}
      <div className="flex justify-center mt-8 ">
        <button
          onClick={toggleShowAll}
          className="text-[#64ffda]  bg-[#112240] border-solid border-2 border-[#64ffda] rounded animate-pulse px-4 py-4"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};
const experiences = [

{
  date: " 2024",
  company: "Amazon",
  role: "Incoming SDE intern",

},

{
  date: "July 2024 - Dec 2024",
  company: "Verizon",
  role: "Incoming Software Engineer Co-op",
},

  {
    date: "Jan 2024 - Present",
    company: "Oasis",
    hyperlink: "https://oasisneu.com/",
    role: " Team Lead",
    description:
      "Leading a team of four in the development of a cross-platform mobile application utilizing various frameworks. ",
  },

  {
    date: "Jan 2024 - Present",
    company: "NU Blockchain",
    role: " Software Engineer",
    description:
      "Developing a decentralized application (dApp) to facilitate the exchange of digital assets and NFTs. ",
  },
  {
    date: "Jan 2024 - Present",
    company: "NU Sci",
    role: " Software Engineer",
    description:
      "Involved in full-stack web development divided in 5 phases of a custom guided project.",
  },

  {
    date: "Jan 2024 - Present",

    company: "Give a Hand",

    role: "Software Developer",

    description:
    "Developing software to create an affordable bionic prosthetic hand. Contributing to the product design, research, and prototyping phases. "},

  {
    date: "Dec 2023 - Present",
    company: "AeroSpaceNU",
    role: "Software Developer",
    description:
      "Working in the avionics division to develop PCBs and software for flight control and data aquisition boards (FCBs) dedicated to enhancing control and data recording capabilities for rocket launches. ",
  },

  {
    date: "July 2023 - Dec 2023",
    company: "BWSC",
    role: "Security Engineer + IT Programmer Co-op",
    description:
      "Worked with Azure Cloud infrastructure and Barracuda CloudGen firewalls to improve security measures. Specialized in threat detection, anomaly detection, and behavior analysis.",
  },
  {
    date: "May 2022 - June 2022",
    company: "Harvard University",
    role: "SWE & Data Science intern",
    description:
      "Utilized R and Python to analyze extensive datasets, boosting data processing efficiency by 75% and maintaining data integrity; created a highly acclaimed user-friendly data visualization dashboard",
  },
 
  
];
