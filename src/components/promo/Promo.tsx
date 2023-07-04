// import React from 'react';
import styles from './Promo.module.scss';
import config from '../../config/index.json';
import { Counter } from '../counter/Counter';

const Promo = () => {
    const { promo } = config;
    // нужно реализовать

    return (
        <>
            <div className={styles.element}>
                <div className={styles.title}>
                    {promo.text}
                    <p>{promo.textSmall}</p>
                    <p>{promo.textPromoBlock}</p>
                </div>
                <Counter />
            </div>
        </>
    );
};

export default Promo;
