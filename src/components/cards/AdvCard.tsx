import React, { useState } from 'react';
import styles from './AdvCard.module.scss';
import { IAdvCard } from '../../models/types';
import { Link } from 'react-scroll';

interface AdvCardProps {
    item: IAdvCard;
}

const AdvCard: React.FC<AdvCardProps> = ({ item }) => {
    const [isFocused, setIsFocused] = useState(false);
    // обработаем события
    /* 
     onSetActive={handleSetActive}
      onSetInactive={handleSetInactive}
    */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSetActive = () => {
        setIsFocused(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSetInactive = () => {
        setIsFocused(false);
    };

    return (
        <>
            <div className={styles.element}>
                <img className={styles.img} src={item.img} alt={item.alt} />
                {item.href ? (
                    <Link
                        className={styles.link}
                        key={item.title}
                        to={item.href}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        delay={100}
                        onMouseEnter={handleSetActive}
                        onMouseLeave={handleSetInactive}
                    >
                        {item.title}
                    </Link>
                ) : (
                    <div className={styles.title}>{item.title}</div>
                )}
            </div>
            {isFocused && item.description && <div className={styles.description}>{item.description}</div>}
        </>
    );
};

export default AdvCard;
