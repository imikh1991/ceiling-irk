// import React from 'react';
import styles from './LeftBanner.module.scss';
import config from '../../../config/index.json';

const LeftBanner = () => {
  const { bannerLeft } = config;
  // нужно реализовать


  return (
    <>
    <div className={styles.element}>
    <img className={styles.img} src={bannerLeft.img} alt={bannerLeft.alt}></img>
    <div className={styles.title}>{bannerLeft.text}</div>
    </div>
    </>
    
  );
};

export default LeftBanner;