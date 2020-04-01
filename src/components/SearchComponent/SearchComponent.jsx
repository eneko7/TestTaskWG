import React from 'react';
import styles from './SearchComponent.scss';

const SearchComponent = () => (
  <main className={styles.mainContet}>
    <h1>Search</h1>
    <div className={styles.wrapperSearch}>
      <span className={styles.findIcon} />
      <input type="sarch" className={styles.searchInput} />
      <button type="button" className={styles.button}>Найти</button>
    </div>
  </main>
);

export default SearchComponent;
