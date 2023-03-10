import React from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from '../../data/links';
import { FaGithub } from 'react-icons/fa';

function SideBar() {
  return (
    <div className="bg-black z-10 fixed bottom-0 w-full md:w-[50px] h-[50px] md:h-full ">
      <nav className="absolute w-full grid md:grid-rows-4 md:top-[10%] md:h-[40%]">
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.id}
            to={navLink.to}
            className={({ isActive }) =>
              isActive
                ? 'px-3 py-3 text-indigo-600 bg-[#181818]'
                : 'text-gray-400 transition px-3 py-3 hover:bg-[#181818] hover:text-indigo-600 mx-auto'
            }
            activeclassname="active"
          >
            {navLink.icon}
          </NavLink>
        ))}
      </nav>

      <ul className="hidden md:absolute md:bottom-10 md:w-full md:flex md:justify-around md:items-center">
        <li className="text-gray-400  hover:text-indigo-600 hover:bg-[#181818] px-3 py-3 transition">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Wenceslas-Angelo"
          >
            <FaGithub fontSize={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
