"use client";
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <header className="pt-16 pb-16 px-4 flex justify-between">
        <Link href="/">
          <h1 className="text-base font-semibold text-white">ap</h1>
        </Link>
        <nav className="flex gap-4">
          <Link href="/posts" className="text-white text-base font-semibold">
            Writing
          </Link>
          <Link className="text-white text-base font-semibold" href="/#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="px-4">
        <section className="pb-16">
          <h1 className="font-semibold text-4xl mb-4 text-white">
          <span style={{ marginRight: '0.3em' }}>Hi, I'm</span>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Sedanah',
        2000,
        ' a developer',
        1000,
        ' a designer',
        1000,
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}

    /> <br />
            <span className="text-white/60">
              Passionate about crafting digital experiences
            </span>
          </h1>
          <p className="text-white/70 text-base leading-6">
            Hey, I'm Hadiah, but go by Sedanah. I'm a student at Northeastern University majoring in Computer Science and Business with a concentration in Finance. Each past adventure fuels my passion and pushes me closer to creating impactful connections in the digital realm   
            </p>
            </section>
            <section className="pt-10 pb-16">
        <h2 className="font-semibold text-base mb-4 text-white/90">Projects</h2>

        {/* //div for projects  */}
  

<div class= "grid gap-4 gap-y-6 grid-cols-3 grid-rows-2"> 

<button class="bg-[#334155] opacity-45 hover:bg-[#14b8a6] text-white font-bold items-center rounded w-40 h-40">
  Portfolio
</button>

<button class="bg-[#334155] opacity-45 hover:bg-[#14b8a6] text-white font-bold  items-center  rounded w-40 h-40">
  AI model
</button>

<button class="bg-[#334155] opacity-45  hover:bg-[#14b8a6] text-white font-bold items-center rounded w-40 h-40">
  Photo Editor
</button>

<button class="bg-[#334155] opacity-45 hover:bg-[#14b8a6] text-wrap text-align: justify break-words text-white font-bold  items-center rounded w-40 h-40">
  Password Generator
</button>

<button class="bg-[#334155] opacity-45  hover:bg-[#14b8a6] text-white font-bold  items-center  rounded w-40 h-40">
  AI model
</button>

<button class="bg-[#334155] opacity-45   hover:bg-[#14b8a6] text-white font-bold items-center rounded w-40 h-40">
  Photo Editor
</button>




</div>














      
        </section>
    </main>

       </div>
     )
     };
