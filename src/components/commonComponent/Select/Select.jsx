import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.scss';

const Select = ({
  onChangeHendler, value, name, data,
}) => {
  const options = [];
  Object.keys(data).forEach((el) => options.push(<option key={el} value={el}>{data[el]}</option>));
  return (
    <select
      name={name}
      onChange={(event) => onChangeHendler(event)}
      value={value}
      className={styles.selectFilter}
      defaultChecked={value}
    >
      {options}
    </select>
  );
};

Select.propTypes = {
  onChangeHendler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Select;
