import React from 'react';
import styles from './SearchComponent.scss';

const SearchComponent = () => (
  <main className={styles.mainContet}>
    <h1>Search</h1>
    <div className={styles.wrapperSearch}>
      <span className={styles.findIcon} />
      <input type="search" className={styles.searchInput} />
      <button type="button" className={styles.button}>Найти</button>
    </div>
    <div className={`${styles.wrapperSearch} ${styles.wrapperSearchVariant}`}>
      <span className={styles.findIcon} />
      <input type="search" className={styles.searchInput} />
      <button type="button" className={styles.button}>Go</button>
    </div>
  </main>
);

export default SearchComponent;
