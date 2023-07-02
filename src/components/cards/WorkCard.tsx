import React from 'react';
import styles from './WorkCard.module.scss';
import { WorkItem } from '../../models/types';

interface WorkCardProps {
    item: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ item }) => {
    return (
        <div className={styles.element}>
            <div className={styles.title}>{item.id}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.title}>{item.description}</div>
            <div className={styles.title}>{item.alt}</div>
        </div>
    );
};

export default WorkCard;
