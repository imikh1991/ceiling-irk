// import React from 'react';
import styles from './CenterSlider.module.scss';
import config from '../../../config/index.json';

const CenterSlider = () => {
  const { centerSlider } = config;
  // нужно реализовать

  return (
    <>
    <div className={styles.element}>
    <img className={styles.img} src={centerSlider.img} alt={centerSlider.alt}></img>
    </div>
    </>
  );
};

export default CenterSlider;