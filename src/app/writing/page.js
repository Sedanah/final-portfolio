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
  detailLink, // Use this prop for the custom link
}) => {
  const dateString = "January 2024";

  // Conditionally render the content inside a Link if detailLink is provided
  const cardContent = (
    <div className="transition ease-in-out hover:-translate-y-1 flex px-4 sm:px-5 py-8 flex-col gap-2 justify-between bg-[#112240] hover:bg-[#083344] text-white rounded">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-bold text-white/90">{projectName}</h3>
        <span className="text-sm text-white/70">{dateString}</span>
      </div>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );

  return detailLink ? (
    <Link href={detailLink} passHref>
      <div target="_blank" rel="noopener noreferrer">
        {cardContent}
      </div>
    </Link>
  ) : (
    cardContent
  );
};


       
     


const projects = [

  {
    projectName: "Bionic Hand",
    description: "A comprehensive research thesis on the development of a bionic hand that can be controlled by the user's brain signals.",
    detailLink: "/Abstract.HM.pdf", // This project has a specific link
  },

  {
    projectName: "Breast Cancer Detection",
    description:
      "My research on the development of a system to enhance the accuracy and efficiency of breast cancer detection and classification. ",
  
  },
  
  {
    projectName: "DeFi Savings Platform",
    description:
      "Documentation and research on the development of a decentralized finance (DeFi) platform that allows users to earn interest on their cryptocurrency holdings.",
   
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
          <Link href="/projects" className="text-base font-semibold text-white hover:text-[#64ffda]">
            Projects
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
          Research
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 rounded">
  {projects.map((project, index) => (
    <ProjectCard key={index} {...project} />
  ))}
</div>

      </section>
      </main>
    </div>
    
  );
}
