// import React from 'react';
import styles from './LeftBanner.module.scss';
import config from '../../../config/index.json';

const LeftBanner = () => {
  const { navigation } = config;
  // нужно реализовать


  return (
    <div className={styles.element}>
      <div className={styles.title}>{navigation.header1}</div>
      <div className={styles.pageTitle}>{navigation.header2}</div>
    </div>
  );
};

export default LeftBanner;