/* eslint-disable no-lonely-if */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SortLine from './SortLine';
import ElementsList from './ElementsList';
import SelectedItems from '../SelectedItems';
import styles from './ModalContent.scss';

class ModalContent extends Component {
  state = {
    searchValue: '',
    filterValue: 'all',
    selectedElemets: this.props.selectedItems,
  };

  setSearchValue = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  setFilterValue = (value) => {
    this.setState({
      filterValue: value,
    });
  };

  setSelectedValues = (elems) => {
    this.setState({
      selectedElemets: elems,
    });
  }


  onChangeHendler = (event) => {
    const { selectedElemets } = this.state;
    const selElem = selectedElemets;
    switch (event.target.name) {
      case 'search':
        this.setSearchValue(event.target.value);
        break;
      case 'filter':
        this.setFilterValue(event.target.value);
        break;
      case 'chooseItem':
        if (event.target.checked && !selectedElemets.includes(event.target.placeholder)) {
          selElem.push(event.target.placeholder);
          this.setSelectedValues(selElem);
        } else {
          if (selElem.indexOf(event.target.placeholder) !== -1) {
            selElem.splice(selElem.indexOf(event.target.placeholder), 1);
            this.setSelectedValues(selElem);
          }
        }
        break;
      default:
        break;
    }
  };

  render() {
    const {
      searchValue, filterValue, selectedElemets,
    } = this.state;
    const { remove } = this.props;
    return (
      <div className={styles.modalContent}>
        <SortLine
          onChange={event => this.onChangeHendler(event)}
          searchValue={searchValue}
          filterValue={filterValue}
        />
        <ElementsList
          selectedItems={selectedElemets}
          searchValue={searchValue}
          filterValue={filterValue}
          onChange={event => this.onChangeHendler(event)}
          listBlocked={selectedElemets.length === 3}
        />
        {selectedElemets.length > 0
          ? <p className={styles.text}>Выбранные элементы на данный момент:</p>
          : <p className={styles.text}>Ещё ни один элемент не выбран</p>
        }
        <SelectedItems
          items={selectedElemets}
          remove={remove}
        />
      </div>
    );
  }
}

ModalContent.defaultProps = {
  selectedItems: [],
};

ModalContent.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.string),
  remove: PropTypes.func.isRequired,
};

export default ModalContent;
