// import React from 'react';
import styles from './headerImg.module.scss';
import config from '../../config/index.json';

const HeaderImg = () => {
  const { navigation } = config;
  // нужно реализовать


  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{navigation.header1}</h1>
      <h2 className={styles.pageTitle}>{navigation.header2}</h2>
      <img className={styles.img} src={navigation.img} alt={navigation.alt}></img>
    </header>
  );
};

export default HeaderImg;
