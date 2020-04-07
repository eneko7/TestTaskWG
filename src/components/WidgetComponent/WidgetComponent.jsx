/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectedItems from './SelectedItems';
import Button from '../commonComponent/Button';
import ModalWindow from '../commonComponent/ModalWindow';
import ModalContent from './ModalContent';
import styles from './WidgetComponent.scss';

class WidgetComponent extends Component {
  state = {
    openWidtget: false,
    selectedItems: this.props.selectedItems || [],
  };

  toggleWidget = () => {
    this.setState({
      openWidtget: !this.state.openWidtget,
    });
  };

  resetWidget = () => {
    this.setState({
      openWidtget: false,
      selectedItems: [],
    });
  };

  saveWidgetData = () => {
    this.setState({
      openWidtget: false,
    });
    this.props.saveWidgetAction();
  };

  removeElement = (elem) => {
    const { selectedItems } = this.state;
    const items = selectedItems;
    items.splice(items.indexOf(elem), 1);
    this.props.setSelectedItemsAction(items);
    this.setState({
      selectedItems: items,
    });
  };

  removeElementFromWidget = (elem) => {
    const { selectedItems } = this.state;
    const items = selectedItems;
    items.splice(items.indexOf(elem), 1);
    this.setState({
      selectedItems: items,
    });
  };

  render() {
    const { openWidtget, selectedItems } = this.state;
    return (
      <main className={styles.mainContent}>
        <h1>Widget</h1>
        {!openWidtget && (
        <section className={styles.wraperWidget}>
          <h2>Выбор элементов</h2>
          {selectedItems.length > 0 ? (
            <span>
              {selectedItems.length !== 1 ? `На данный момент у вас выбрано ${selectedItems.length} элемента:` : 'На данный момент у вас выбран 1 элемент:'}
            </span>
          ) : (<span>На данный момент у вас не выбрано ни одного элемента.</span>)}
          <SelectedItems
            items={selectedItems}
            remove={(elems) => this.removeElement(elems)}
          />
          <Button
            text="Изменить мой выбор"
            action={() => this.toggleWidget()}
            classProp="button"
          />
        </section>
        )}
        <ModalWindow
          open={openWidtget}
          resetAction={() => this.resetWidget()}
          saveAction={() => this.saveWidgetData()}
        >
          <ModalContent
            selectedItems={selectedItems}
            remove={(elems) => this.removeElementFromWidget(elems)}
          />
        </ModalWindow>
      </main>
    );
  }
}

WidgetComponent.propTypes = {
  setSelectedItemsAction: PropTypes.func.isRequired,
  saveWidgetAction: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WidgetComponent;
