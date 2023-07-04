// import React from 'react';
import styles from './RightBanner.module.scss';
import config from '../../../config/index.json';

const RightBanner = () => {
    const { bannerRight } = config;
    // нужно реализовать

    return (
        <>
            <div className={styles.element}>
                <div className={styles.group}>
                    <h2 className={styles.title}>{bannerRight.head}</h2>
                    <p className={styles.phone}>{bannerRight.phone}</p>
                    <p className={styles.text}>{bannerRight.text}</p>
                </div>
            </div>
        </>
    );
};

export default RightBanner;
