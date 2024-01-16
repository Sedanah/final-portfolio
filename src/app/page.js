"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { Github, Share, Music4, Linkedin } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import FadeIn from 'react-fade-in';



export default function Home() {
  return (
  
    <div className="max-w-xl mx-auto ">
    <FadeIn> 
      <header className="flex justify-between px-4 pt-16 pb-16">
      
        <Link href="www.linkedin.com/in/hadiahmashhour">
          <h1 className="text-base font-semibold text-white"> <Linkedin /></h1>
        </Link>
        <nav className="flex gap-4">
          <Link
            href="/resume.pdf"
            className="text-base font-semibold text-white"
          >
            Resume
          </Link>
          <Link className="text-base font-semibold text-white" href="/#contact">
            Contact
          </Link>
        </nav>
        
      </header>
      </FadeIn>
     
      <main className="px-4">
        <section className="pb-10">
    <FadeIn delay={300}>
          <h1 className="mb-4 text-4xl font-semibold text-white">
            <span style={{ marginRight: "0.3em" }}>Hi, I am</span>
<span className="text-[#64ffda]">
            <TypeAnimation 
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Sedanah",
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
            Hey, I am Hadiah! (but go by Sedanah). I am a student at Northeastern
            University majoring in Computer Science and Business with a
            concentration in Finance. Each past adventure fuels my passion and
            pushes me closer to creating impactful connections in the digital
            realm.
          </p>
          </FadeIn>
        </section>
        
        <section className="pb-6 ">
        <FadeIn delay={500}>
          <h2 className="mb-4 text-base font-semibold text-[#64ffda]">
            Projects
          </h2>


          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index}
              {...project} />
            ))}
          </div>
</FadeIn>
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
      </main>
    </div>
    
  );
}

const projects = [
  {
    projectName: "Portfolio",
    description: "A personal website with React and TailwindCSS, incorporating server-side rendering (SSR) and markdown components (MDX) to showcase personal projects and posts effectively",
    techStack: "React, Next.js, TailwindCSS",
    githubLink: "www.github.com",
    liveLink: "",
  },
  {
    projectName: "AI model",
    description: "Coming soon. ",
    techStack: "React, Next.js, TailwindCSS",
    githubLink: "www.github.com",
    liveLink: "",
  },
  {
    projectName: "Tutoring for Kids",
    description: "An inclusive educational platform offering free tutoring to disadvantaged children ",
    techStack: "React, Next.js, TailwindCSS",
    githubLink: "www.github.com",
    liveLink: "",
  },
  {
    projectName: "Stock Prediction",
    description: "Developed an advanced stock prediction web application leveraging machine learning models and real-time data analysis to empower investors with accurate insights ",
    techStack: "Python",
    githubLink: "www.github.com",
    liveLink: "",
  },
  {
    projectName: "Photo Editor",
    description: "Designed using the MVC design pattern, a photo editor that allows users to edit photos using a variety of tools.",
    techStack: "Java, Swing, MVC",
    githubLink: "www.github.com",
    liveLink: "",
  },
  {
    projectName: "Password Generator",
    description: "A password generator that generates a password based on user input using the XKCD method.",
    techStack: "Java",
    githubLink: "www.github.com",
    liveLink: "",
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
    <div className="transition ease-in-out hover:-translate-y-1 flex px-5 py-8 flex-col gap-2 justify-between bg-[#202a377a] hover:bg-[#14342d] text-white rounded">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-bold  text-white/90">{projectName}</h3>
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
              <Share className="w-6 h-6" />
            </a>
          </div>
        )}
      </div>
      <p className="text-white/70 text-sm">{description}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span key={index} className="text-[#64ffda]">{tech}</span>
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
    <div className="space-y-6">
      <ExperienceCard {...experiences[0]} />
      {showAll &&
        experiences
          .slice(1)
          .map((experience, index) => (
            <ExperienceCard {...experience} key={index} index={index} />
          ))}
      <button onClick={toggleShowAll} className="text-[#64ffda] animate-bounce">
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
    
  );
};

const experiences = [
  {
    date: "July 2023 - Dec. 2023",
    company: "BWSC",
    role: "Security Engineer + IT Programmer Co-op",
    description:
"Applied engineering design methodologies to resolve complex issues, driving $4,000,000 quarterly savings; enhanced system security by 89% through Bash, Python automation scripts, and bolstered cloud infrastructure security with Barracuda firewalls while optimizing operations via AirWatch for peak performance."  },
  {
    date: "May 2022 - June 2022",
    company: "Harvard University",
    role: "Bio-statistical Data Scientist",
    description:
"Utilized R and Python to analyze extensive datasets, boosting data processing efficiency by 75% and maintaining data integrity; created a highly acclaimed user-friendly data visualization dashboard that garnered a 95% satisfaction rating from project stakeholders" },
  {
    date: "April 2021 - Sep 2021",
    company: "YKK",
    role: "Software engineer intern",
    description:
"Revamped the Automated Inventory Management System (AIMS) for streamlined stock tracking, error reduction, and implemented a user-friendly UI redesign, resulting in a 20% decrease in training time while prioritizing bug fixes, testing, and comprehensive documentation."  },
  {
    date: "May 2020 - July 2020",
    company: "MIST Atlanta",
    role: "Front-End Development",
    description:
"Transformed MIST Atlanta's website with sophisticated front-end development, achieving a 60% traffic surge and a 45% boost in user engagement; utilized leading-edge design techniques, improving user experience, aesthetics, and addressing user queries, elevating the organization's online presence significantly."  },
];
