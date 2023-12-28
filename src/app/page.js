"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <header className="flex justify-between px-4 pt-16 pb-16">
        <Link href="/">
          <h1 className="text-base font-semibold text-white">*DARK MODE*</h1>
        </Link>
        <nav className="flex gap-4">
          <Link href="https://emerald-kalina-14.tiiny.site" className="text-base font-semibold text-white">
            Resume
          </Link>
          <Link className="text-base font-semibold text-white" href="/#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="px-4">
        <section className="pb-16">
          <h1 className="mb-4 text-4xl font-semibold text-white">
            <span style={{ marginRight: "0.3em" }}>Hi, I'm</span>
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
            <span className="text-white/60">
              Passionate about crafting digital experiences
            </span>
          </h1>
          <p className="text-base leading-6 text-white/70">
            Hey, I'm Hadiah, but go by Sedanah. I'm a student at Northeastern
            University majoring in Computer Science and Business with a
            concentration in Finance. Each past adventure fuels my passion and
            pushes me closer to creating impactful connections in the digital
            realm
          </p>
        </section>
        <section className="pt-10 pb-16">
          <h2 className="mb-4 text-base font-semibold text-white/90">
            Projects
          </h2>

          {/* //div for projects  */}

          <div class="grid gap-4 gap-y-6 grid-cols-3 grid-rows-2">
            <button class="bg-[#334155] opacity-45 hover:bg-[#14b8a6] text-white font-bold items-center rounded w-40 h-40">
              Portfolio
            </button>

            <button class="bg-[#334155] opacity-45 hover:bg-[#14b8a6] text-white font-bold  items-center  rounded w-40 h-40">
              AI model
            </button>

            <button class="bg-[#334155] opacity-45  hover:bg-[#14b8a6] text-white font-bold items-center rounded w-40 h-40">
              Tutoring for Kids
            </button>

            <button class="bg-[#334155] opacity-45 hover:bg-[#14b8a6] text-wrap text-align: justify break-words text-white font-bold  items-center rounded w-40 h-40">
              Finance Quant Projection
            </button>

            <button class="bg-[#334155] opacity-45  hover:bg-[#14b8a6] text-white font-bold  items-center  rounded w-40 h-40">
              Photo Editor
            </button>

            <button class="bg-[#334155] opacity-45   hover:bg-[#14b8a6] text-white font-bold items-center rounded w-40 h-40">
              XWCD Password Generator
            </button>
          </div>

          {/* //experience section */}

          <section className="py-8">
            <h2 className="mb-4 text-base font-semibold text-white/90">
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
                 <Link href="/" > <span className="text-white/50"> mashhour.h@northeastern.edu
       </span> </Link>

                  <Link href="https://www.linkedin.com/in/hadiahmashhour/" > <span className="text-white/50"> in/hadiahmashhour
       </span> </Link>

       <Link href=" https://github.com/Sedanah" > <span className="text-white/50"> git/Sedanah
       </span> </Link>                </div>
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export const ExperienceCard = ({ date, company, role, description, index }) => {
  return (
    <div className="grid items-start grid-cols-2">
      <span className="text-white/50 ">{date}</span>
      <div className="flex flex-col">
        <span className="text-white">{company}</span>
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
      <button onClick={toggleShowAll} className="text-white/50 animate-pulse animate-bounce">
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
      "Developed advanced automation scripts utilizing Bash and Python, optimizing device re-imaging processes and improving overall system security and network integrity by 89%",
  },
  {
    date: "May 2022 - June. 2022",
    company: "Harvard University",
    role: "Software engineer intern",
    description:
      "Leveraged R and Python to process and analyze vast data sets, improving data processing efficiency by 75% and ensuring data integrity throughout the analysis process",
  },
  {
    date: "May 2022 - June. 2022",
    company: "YKK",
    role: "Software engineer intern",
    description:
      "Collaborated on a UI redesign for better user-friendliness, reducing training time by 20%. Focused on bug fixes, testing, and documentation",
  },
  {
    date: "May 2022 - June. 2022",
    company: "MIST Atlanta",
    role: "Front-End Development",
    description:
      "Revitalized MIST Atlanta’s website through advanced front-end development, resulting in a 60% surge in website traffic and a 45% increase in user engagement",
  },
];
