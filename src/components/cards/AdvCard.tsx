import React from 'react';
import styles from './AdvCard.module.scss';
import { IAdvCard } from '../../models/types';
import { Link } from 'react-scroll';

interface AdvCardProps {
    item: IAdvCard;
}

const AdvCard: React.FC<AdvCardProps> = ({ item }) => {
    return (
        <div className={styles.element}>
            <img className={styles.img} src={item.img} alt={item.alt} />
            <Link spy={true} smooth={true} duration={1000} key={item.title} to={item.href} className={styles.link}>
                {item.title}
            </Link>
        </div>
    );
};

export default AdvCard;
