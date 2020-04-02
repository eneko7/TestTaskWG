/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import styles from './AdaptiveListComponent.scss';

const AdaptiveListComponent = () => (
  <main className={styles.mainContent}>
    <h1>Adaptive list</h1>
    <div className={styles.listWrapper}>
      <input type="radio" name="game" id="worldOfTanks" className={styles.inputRadio} />
      <label className={styles.labelRadio} htmlFor="worldOfTanks">World Of Tanks</label>
      <input type="radio" name="game" id="worldOfWarplanes" className={styles.inputRadio} defaultChecked />
      <label className={styles.labelRadio} htmlFor="worldOfWarplanes">World Of Warplanes</label>
      <input type="radio" name="game" id="worldOfWarships" className={styles.inputRadio} />
      <label className={styles.labelRadio} htmlFor="worldOfWarships">World Of Warships</label>
    </div>
    <div className={styles.select}>
      <span className={styles.menuIcon}>&#9776;</span>
      <select name="selectGame" id="selectGame">
        <option value="worldOfTanks">World Of Tanks</option>
        <option value="worldOfWarplanes">World Of Warplanes</option>
        <option value="worldOfWarships">World Of Warships</option>
      </select>
    </div>
  </main>
);

export default AdaptiveListComponent;
