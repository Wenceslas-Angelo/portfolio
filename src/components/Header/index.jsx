import React, { useState } from 'react';
import { FaHamburger, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import navLinks from '../../data/links';

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="bg-navy transition z-10 fixed w-full px-5 py-3 shadow-md shadow-gray-700 flex justify-between items-center">
      <div className="text-lightSlate font-bold text-[30px] font-[Aurore]">
        <Link to="/">Wenceslas A.</Link>
      </div>

      <nav
        className={`sm:hidden z-9 transition absolute top-16 ${
          showNav ? 'left-0' : 'left-[100%]'
        }  bg-night/80 h-[100vh] w-full`}
      >
        <ul className="transition absolute right-0 bg-night h-full w-[50%] flex flex-col">
          {navLinks.map((link) => (
            <li key={link.id} className="mx-2 py-5 text-center">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b border-greenPrimary text-lg font-semibold px-3 py-2 text-greenPrimary transition'
                    : 'text-lightSlate text-lg font-semibold px-3 py-2 hover:text-greenPrimary transition'
                }
              >
                {link.id}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="text-[30px] text-lightSlate cursor-pointer sm:hidden"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <FaTimes color="red" /> : <FaHamburger />}
      </div>

      <nav className="hidden sm:block">
        <ul className="flex justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.id} className="mx-2">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b border-greenPrimary text-lg font-semibold px-3 py-2 text-greenPrimary transition'
                    : 'text-lightSlate text-lg font-semibold px-3 py-2 hover:text-greenPrimary transition'
                }
              >
                {link.id}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
