import React from 'react';
import Logo from '../Logo';
import Navigation from '../commonComponent/Navigation/Navigation';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Navigation />
  </header>
);

export default Header;
