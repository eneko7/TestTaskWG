import React from 'react';
import propTypes from 'prop-types';
import styles from './Input.scss';

const Import = ({
  type,
  name,
  placeholder,
  value,
  checked,
  onChangeHendler,
  enterPress,
  disabled,
}) => (
  <>
    {type === 'checkbox' ? (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        checked={checked}
        className={styles.input}
        onChange={event => onChangeHendler(event)}
        onKeyDown={enterPress}
        disabled={disabled}
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={styles.input}
        onChange={event => onChangeHendler(event)}
        onKeyDown={enterPress}
      />
    )}

  </>
);

Import.defaultProps = {
  enterPress: () => (''),
  placeholder: '',
  value: '',
  checked: false,
  disabled: false,
};

Import.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string,
  checked: propTypes.bool,
  onChangeHendler: propTypes.func.isRequired,
  enterPress: propTypes.func,
  disabled: propTypes.bool,
};

export default Import;
