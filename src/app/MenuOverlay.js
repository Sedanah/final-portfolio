import React from 'react';
import Link from "next/link";
import { X, AlignJustify } from 'lucide-react';
import { on } from 'events';

const MenuOverlay = ({ links, onClose }) => {
    const [navbarClose, setNavbarClose] = React.useState(false);

    return (
        
                      

        <div className="fixed top-0 left-0 w-full h-full bg-[#0a192f] bg-opacity-90 flex items-center justify-center">
            <div className="flex flex-col items-center">
              
           
                <Link href="/projects" className="text-xl font-semibold  border-solid border px-3 py-2 border-[#64ffda] rounded text-[#64ffdbbf] mt-6">
                    Projects
                </Link>
               
                <Link href="/Resume.pdf" className="text-xl font-semibold   border-solid border px-3 py-2 border-[#64ffda] rounded text-[#64ffdbbf] mt-6">
                    Resume
                </Link>
                <Link href="/writing" className="text-xl font-semibold   border-solid border px-3 py-2 border-[#64ffda] rounded text-[#64ffdbbf] mt-6">
                    Writing
                </Link>
            </div>
        </div>
    );
};

export default MenuOverlay;

