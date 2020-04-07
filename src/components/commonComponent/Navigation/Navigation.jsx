import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <div className={styles.navigation_item}>
      <NavLink exact to="/" activeClassName={styles.selected} className={styles.navlink} label="Main">Main</NavLink>
    </div>
    <div className={styles.navigation_item}>
      <NavLink exact to="/task1" activeClassName={styles.selected} className={styles.navlink} label="Search">Search</NavLink>
    </div>
    <div className={styles.navigation_item}>
      <NavLink exact to="/task2" activeClassName={styles.selected} className={styles.navlink} label="Adaptive List">Adaptive List</NavLink>
    </div>
    <div className={styles.navigation_item}>
      <NavLink exact to="/task3" activeClassName={styles.selected} className={styles.navlink} label="Layout of article">Layout of article</NavLink>
    </div>
    <div className={styles.navigation_item}>
      <NavLink exact to="/task4" activeClassName={styles.selected} className={styles.navlink} label="Item widget">Item widget</NavLink>
    </div>
  </nav>
);

export default Navigation;
