import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex mt-5  md:px-20 py-10 justify-center md:justify-between items-center bg-night flex-wrap">
      <div className="text-xl md:text-3xl text-lightSlate">
        <Link className="mx-2">Github</Link>
        <Link className="mx-2">LinkedIn</Link>
      </div>
      <div className="text-xl md:text-3xl text-lightSlate">
        @:wenceslasangelo@gmail.com
      </div>
    </footer>
  );
}

export default Footer;
