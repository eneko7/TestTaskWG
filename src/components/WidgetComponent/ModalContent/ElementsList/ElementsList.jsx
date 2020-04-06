/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../commonComponent/Input';
import { objectOfElements, filter } from '../../../../utils/utils';
import styles from './ElementsList.scss';

class ElementsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: this.props.selectedItems,
    };
  }

  render() {
    const {
      onChange, listBlocked, searchValue, filterValue,
    } = this.props;
    const { selectedItems } = this.state;
    const listChecked = objectOfElements();
    let searchedObj = {};
    Object.keys(listChecked).map(el => listChecked[el] = false);
    selectedItems.forEach(el => listChecked[el] = true);
    searchedObj = filter(listChecked, searchValue, filterValue);
    return (
      <div className={styles.elementsList}>
        {Object.keys(searchedObj).length !== 0 ? (
          Object.keys(searchedObj).map(el => (
            <div className={styles.element} key={el}>
              <Input
                type="checkbox"
                name="chooseItem"
                checked={listChecked[el]}
                onChangeHendler={onChange}
                placeholder={el}
                disabled={!listChecked[el] && listBlocked}
              />
              {el}
            </div>
          ))
        ) : (
          <span>По вашему запросу ничего не найдено!</span>
        )}
      </div>
    );
  }
}

ElementsList.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  listBlocked: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default ElementsList;
