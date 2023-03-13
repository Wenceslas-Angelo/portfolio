import React from 'react';
import { FaHome, FaUser, FaEye, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  {
    id: 'Home',
    to: '/',
    icon: <FaHome fontSize={30} />,
  },
  {
    id: 'About',
    to: '/about',
    icon: <FaUser fontSize={30} />,
  },
  {
    id: 'Works',
    to: '/works',
    icon: <FaEye fontSize={30} />,
  },
  {
    id: 'Contact',
    to: '/contact',
    icon: <FaEnvelope fontSize={30} />,
  },
];

export default navLinks;
