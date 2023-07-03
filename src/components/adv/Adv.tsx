// import React from 'react';
import styles from './Adv.module.scss';
import config from '../../config/index.json';
import WorkCard from '../cards/WorkCard';

const Adv = () => {
    const { advantagesSection } = config;

    return (
        <div className={styles.element}>
            <div className={styles.title}>{advantagesSection.headerText}</div>

            {advantagesSection.items.map((item, index) => (
                <WorkCard key={index} item={item} />
            ))}
        </div>
    );
};

export default Adv;
