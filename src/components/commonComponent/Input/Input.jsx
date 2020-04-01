import React from 'react';
import propTypes from 'prop-types';
// import styles from './Input.scss';

const Import = ({
  type,
  name,
  placeholder,
  value,
  onChangeHendler,
  enterPress,
}) => (
  <label htmlFor={name}>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHendler}
      onKeyDown={enterPress}
    />
  </label>
);

Import.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChangeHendler: propTypes.func.isRequired,
  enterPress: propTypes.func.isRequired,
};

export default Import;
