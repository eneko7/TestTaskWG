/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Fragment, useState } from 'react';
import styles from './AdaptiveListComponent.scss';
import { games } from '../../utils/utils';

const AdaptiveListComponent = () => {
  const [selectedValue, setValue] = useState('worldOfWarplanes');
  const [openSelect, setSelectOpen] = useState(false);

  const chooseRadio = (event) => {
    setValue(event.target.id);
  };

  const chooseGame = (event) => {
    setValue(event.target.getAttribute('data-game'));
    setSelectOpen(false);
  };

  const listOfGames = []; const selectOfGames = [];

  Object.keys(games).forEach((el) => {
    listOfGames.push(
      <Fragment key={`${el}list`}>
        <input
          type="radio"
          name="game"
          id={el}
          value={games[el]}
          className={styles.inputRadio}
          checked={selectedValue === el}
          onChange={chooseRadio.bind(this)}
        />
        <label className={styles.labelRadio} htmlFor={el}>{games[el]}</label>
      </Fragment>,
    );
    selectOfGames.push(
      <Fragment key={`${el}select`}>
        <span data-game={el} className={styles.option}>{games[el]}</span>
      </Fragment>,
    );
  });

  return (
    <main className={styles.mainContent}>
      <h1>Adaptive list</h1>
      <div className={styles.listWrapper}>
        {listOfGames}
      </div>
      <div className={styles.selectWrapper}>
        <span className={styles.menuIcon}>&#9776;</span>
        <button
          type="button"
          className={styles.select}
          onClick={() => setSelectOpen(!openSelect)}
        >
          {games[selectedValue]}
        </button>
        {openSelect && (
          <div className={styles.optionsWrapper} onClick={chooseGame.bind(this)}>
            {selectOfGames}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdaptiveListComponent;
