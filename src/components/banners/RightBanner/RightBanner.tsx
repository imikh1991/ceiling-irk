// import React from 'react';
import styles from './RightBanner.module.scss';
import config from '../../../config/index.json';

const RightBanner = () => {
    const { bannerRight } = config;
    // нужно реализовать

    return (
        <>
            <div className={styles.element}>
                <h1>{bannerRight.head}</h1>
                <p>{bannerRight.phone}</p>
                <p>{bannerRight.text}</p>
            </div>
        </>
    );
};

export default RightBanner;
