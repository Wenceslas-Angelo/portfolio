import React from 'react';
import error404 from '../../assets/images/undraw_page_not_found_re_e9o6.svg';

function Error() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <img src={error404} alt="error-404" className="w-[90%] md:w-[60%]" />
    </div>
  );
}

export default Error;
