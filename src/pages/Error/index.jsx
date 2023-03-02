import React from 'react';
import error404 from '../../assets/images/undraw_page_not_found_re_e9o6.svg';
import './index.scss';

function Error() {
  return (
    <div className="error-page">
      <img src={error404} alt="error-404" />
    </div>
  );
}

export default Error;
