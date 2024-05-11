import React from 'react';  
import Link from "next/link";
import { Mail } from "lucide-react";
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav> 
        <div className = "mobile-menu block md:hidden">
            {
                !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className = "flex items-center px-3 py-2 border rounded border-slate-200  hover:text-white text-slate-200"> 
                    <AlignJustify className = "h-5 w-5" />
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className = "flex items-center px-3 py-2 border rounded border-slate-200  hover:text-white text-slate-200"> 
                    <X className = "h-5 w-5" />
                    </button>
                )
            }
        </div>
        <div className = "menu hidden md:block md:w-auto">
        <div className = "flex flex-wrap items-center justify-between mx-auto gap-4"> 
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
</div>
            </div>  
        </nav>
        
    );

};

export default Navbar;