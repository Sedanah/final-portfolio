import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <div className = "menu hidden md:block md:w-auto">

    <Link
      href={href}
      className="block py-2 pl-3 pr-4text-base  text-white hover:text-[#64ffda]  rounded md:p-0"
    >
      {title}
    </Link>
    </div>
  );
};

export default NavLink;