import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ to, text }) {
  return (
    <div className="my-10 font-[Burtons] text-lightSlate">
      <Link
        to={to}
        className="bg-navy  transition border px-5 py-2 text-2xl border-greenPrimary hover:bg-greenSecondary"
      >
        {text}
      </Link>
    </div>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
