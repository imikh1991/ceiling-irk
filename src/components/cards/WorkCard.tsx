import React from 'react';
import styles from './WorkCard.module.scss';
import { WorkItem } from '../../models/types';

interface WorkCardProps {
    item: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ item }) => {
    return (
        <div className={styles.element}>
            {item.id && <div className={styles.id}>{item.id}</div>}
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
            <img className={styles.img} src={item.img} alt={item.alt} />
        </div>
    );
};

export default WorkCard;
