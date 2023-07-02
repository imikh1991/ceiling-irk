// import React from 'react';
import styles from './Work.module.scss';
import config from '../../config/index.json';
import WorkCard from '../cards/WorkCard';

const Work = () => {
    const { workSection } = config;

    return (
        <div className={styles.element}>
            <div className={styles.title}>{workSection.headerText}</div>
            <div>
                {workSection.items.map((item, index) => (
                    <WorkCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Work;
