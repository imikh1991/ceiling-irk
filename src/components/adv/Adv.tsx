// import React from 'react';
import styles from './Adv.module.scss';
import config from '../../config/index.json';
import AdvCard from '../cards/AdvCard';

const Adv = () => {
    const { advantagesSection } = config;

    return (
        <div className={styles.element}>
            <div className={styles.title}>{advantagesSection.headerText}</div>
            <div className={styles.items}>
                {advantagesSection.items.map((item, index) => (
                    <AdvCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Adv;
