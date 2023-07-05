import React from 'react';
import styles from './AdvCard.module.scss';
import { IAdvCard } from '../../models/types';
import { Link } from 'react-scroll';
interface AdvCardProps {
    item: IAdvCard;
}

// - [x] Ссылка (обычная и подчеркнутая пунктиром) при наведении должны менять цвет на #6d8601
const AdvCard: React.FC<AdvCardProps> = ({ item }) => {
    console.log(item.href);

    return (
        <div className={styles.element}>
            <img className={styles.img} src={item.img} alt={item.alt} />
            {item.href ? (
                <Link spy={true} smooth={true} duration={1000} key={item.title} to={item.href} className={styles.link}>
                    {item.title}
                </Link>
            ) : (
                <div className={styles.description}>{item.title}</div>
            )}
        </div>
    );
};

export default AdvCard;
