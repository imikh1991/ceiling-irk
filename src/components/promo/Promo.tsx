// import React from 'react';
import styles from './Promo.module.scss';
import config from '../../config/index.json';

const Promo = () => {
    const { promo } = config;
    // нужно реализовать

    return (
        <>
            <div className={styles.element}>
                <div className={styles.title}>{promo.text}</div>
                <p>{promo.textSmall}</p>
                <div>
                    <p>{promo.textPromoBlock}</p>
                </div>
            </div>
        </>
    );
};

export default Promo;
