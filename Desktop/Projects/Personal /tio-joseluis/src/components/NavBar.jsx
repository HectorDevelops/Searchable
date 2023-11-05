import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import whiteDove from "../assets/white-dove-1.png";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Informacion",
    },
    {
      id: 2,
      link: "Galeria",
    },
    {
      id: 3,
      link: "Tumba",
    },
    {
      id: 4,
      link: "Historias",
    },
  ];

  return (
    <div className="flex justify-between items-center w-screen h-20 px-4 text-shark bg-neutral-800 fixed z-50 shadow top-0 left-0">
      <div className="w-64">
        <a href="#" className="object-contain flex items-center ">
          <h1 className="text-5xl font-anton hover:scale-105 hover:text-green text-red-700 hover:text-white cursor-pointer">
            El Caballo
          </h1>
          <img src={whiteDove} className="h-28 absolute left-36 opacity-40" />
        </a>
      </div>
      <ul className="hidden md:flex text-white ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-xl font-bold hover:scale-105 "
          >
            <Link
              to={link}
              smooth={true}
              offset={-200}
              duration={800}
              className="text-white"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center  items-center absolute top-0 left-0 w-full h-screen">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
