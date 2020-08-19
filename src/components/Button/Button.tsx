import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './Button.sass';

export const Button = ({ ...props }) => {
  let btnClass = classNames({
    'btn': true,
    'btn-primary': props.type == 'primary',
    'btn-secondary': props.type == 'secondary',
    'btn-xs': props.size == 'xs',
    'btn-sm': props.size == 'sm',
    'btn-md': props.size == 'md',
    'btn-lg': props.size == 'lg',
  });

  return (
    <button type="button" class={btnClass} role="button" {...props}>
      {props.children}
    </button>
  )
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  size: 'md',
  onClick: undefined,
};
