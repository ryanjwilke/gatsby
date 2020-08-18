import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ size, label, ...props }) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'medium',
  onClick: undefined,
};
