/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Fragment, useState } from 'react';
import styles from './AdaptiveListComponent.scss';
import { games as list } from '../../utils/utils';

const AdaptiveListComponent = () => {
  const [selectedValue, setValue] = useState('worldOfWarplanes');
  const [openSelect, setSelectOpen] = useState(false);

  const chooseRadio = (event) => {
    setValue(event.target.id);
  };

  const chooseItem = (event) => {
    setValue(event.target.getAttribute('data-item'));
    setSelectOpen(false);
  };

  const listOfItems = []; const selectOfItems = [];

  Object.keys(list).forEach((el) => {
    listOfItems.push(
      <Fragment key={`${el}list`}>
        <input
          type="radio"
          name="item"
          id={el}
          value={list[el]}
          className={styles.inputRadio}
          checked={selectedValue === el}
          onChange={chooseRadio.bind(this)}
        />
        <label className={styles.labelRadio} htmlFor={el}>{list[el]}</label>
      </Fragment>,
    );
    selectOfItems.push(
      <Fragment key={`${el}select`}>
        <span data-item={el} className={styles.option}>{list[el]}</span>
      </Fragment>,
    );
  });

  return (
    <main className={styles.mainContent}>
      <h1>Adaptive list</h1>
      <div className={styles.listWrapper}>
        {listOfItems}
      </div>
      <div className={styles.selectWrapper}>
        {!openSelect && (
        <div onClick={() => setSelectOpen(!openSelect)}>
          <span className={styles.menuIcon}>&#9776;</span>
          <button
            type="button"
            className={styles.select}
          >
            {list[selectedValue]}
          </button>
        </div>
        )}
        {openSelect && (
          <div className={styles.optionsWrapper} onClick={chooseItem.bind(this)}>
            {selectOfItems}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdaptiveListComponent;
