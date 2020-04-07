/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectedItem from '../SelectedItem';
import styles from './SelectedItems.scss';

class SelectedItems extends Component {
  state = {
    selectedItems: this.props.items,
  };

  render() {
    const { selectedItems } = this.state;
    const { remove } = this.props;
    const selected = selectedItems.map((el) => (
      <SelectedItem
        data={el}
        key={el}
        remove={remove}
      />
    ));
    return <div className={styles.selectedItemsWrapper}>{selected}</div>;
  }
}

SelectedItems.propTypes = {
  remove: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectedItems;
