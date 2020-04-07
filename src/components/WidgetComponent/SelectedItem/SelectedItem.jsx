/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectedItem.scss';

const SelectedItem = ({ data, remove }) => (
  <div className={styles.selctedElement}>
    <span>{data}</span>
    <span
      onClick={() => remove(data)}
      className={styles.iconClose}
    >
      &times;
    </span>
  </div>
);

SelectedItem.propTypes = {
  data: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default SelectedItem;
