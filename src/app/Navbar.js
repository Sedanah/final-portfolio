import React from 'react';
import { AlignJustify, X } from 'lucide-react';
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';


const navLinks = [
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Writing",
      path: "/writing",
    },
    {
      title: "Resume",
      path: "/Resume.pdf",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav> 
            {/* <div className="mobile-menu block md:hidden">
                <button onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white text-slate-200"> 
                    {navbarOpen ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
                </button>
            </div> */}

           <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <AlignJustify className="h-5 w-5 z-50" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <X className="h-5 w-5 z-50" />
            </button>
        )}
        </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;