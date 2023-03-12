import React from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from '../../data/links';
import { FaGithub } from 'react-icons/fa';

function SideBar() {
  return (
    <div className="bg-black fixed bottom-0 w-full h-[80px] z-10 md:top-0 md:w-[80px] md:h-full">
      <nav className="w-full h-full grid grid-cols-4 md:grid-cols-1 md:h-[50%]">
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.id}
            to={navLink.to}
            className={({ isActive }) =>
              isActive
                ? 'text-indigo-600 bg-[#181818] flex justify-center items-center'
                : 'text-gray-400 transition hover:bg-[#181818] hover:text-indigo-600 flex justify-center items-center'
            }
            activeclassname="active"
          >
            {navLink.icon}
          </NavLink>
        ))}
      </nav>

      <ul className="absolute bottom-10 w-full hidden md:block">
        <li className="text-gray-400 hover:text-indigo-600 flex justify-center items-center">
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
