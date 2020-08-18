import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ label, ...props }) => {
  return (
    <button type="button" class="button" {...props}>
      test: {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};
