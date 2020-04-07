import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  action,
  text,
  classProp,
}) => (
  <button
    type="button"
    onClick={() => action()}
    className={styles[classProp]}
  >
    {text}
  </button>
);

Button.defaultProps = {
  classProp: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  classProp: PropTypes.string,
};

export default Button;
