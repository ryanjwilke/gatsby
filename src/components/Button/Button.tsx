import React from 'react';
import PropTypes from 'prop-types';
import './Button.sass';

export const Button = ({ label, ...props }) => {
  return (
    <button type="button" class="button" role="button" {...props}>
      {props.children}
    </button>
  )
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};
