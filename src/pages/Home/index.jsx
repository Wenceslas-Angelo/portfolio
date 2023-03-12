import React from 'react';
import { Link } from 'react-router-dom';
import coder from '../../assets/images/coding.svg';

function Home() {
  return (
    <div className="flex justify-center items-center pl-[20px] min-h-[90vh]">
      <div>
        <h1 className="text-[40px] tracking-[5px] md:text-[50px] font-[600] text-white">
          Hi,
          <br />
          I am Wenceslas Angelo
          <br />
          Web Developer
        </h1>

        <h2 className="text-indigo-600 text-[30px] font-semibold py-[20px] tracking-[3px]">
          React junior developer
        </h2>

        <div className="my-[30px] ">
          <Link
            to="/contact"
            className="font-[Burtons] font-bold px-5 py-3 text-[20px] tracking-[3px] rounded-tl-xl rounded-br-xl text-white border-indigo-600 bg-indigo-600 hover:bg-[#181818] border-2 transition"
          >
            CONTACT ME
          </Link>
        </div>
      </div>

      <div className="hidden md:block w-[50%]">
        <img src={coder} alt="coding" className="w-full" />
      </div>
    </div>
  );
}

export default Home;
