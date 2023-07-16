// import React from 'react';
import styles from './headerImg.module.scss';
// import config from '../../config/index.json';
import LeftBanner from '../../components/banners/LeftBanner/LeftBanner';
import Slider from '../../components/slider/Slider';
import Header from '../../components/header/Header';
import RightBanner from '../../components/banners/RightBanner/RightBanner';
const HeaderImg = () => {
    // const { navigation } = config;
    // нужно реализовать

    return (
        <section className={styles.wrapper}>
            <Header />
            <div className={styles.group}>
                <LeftBanner />
                <Slider />
                <RightBanner />
            </div>
        </section>
    );
};

export default HeaderImg;
