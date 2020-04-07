import React from 'react';
import logo from '../../assets/images/logo.png';
import styles from './Logo.scss';

const Logo = () => (
  <img src={logo} alt="Logo" className={styles.logo} />
);

export default Logo;
