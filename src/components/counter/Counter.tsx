import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../../utils/utils';

import styles from './Counter.module.scss';

export const Counter = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    }, [timeLeft]);

    return (
        <div className={styles.counter}>
            <h2>До конца акции Counter</h2>
            <div className={styles.counterItem}>
                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                <span> Дней</span>
            </div>

            <div className={styles.counterItem}>
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span> Часов</span>
            </div>

            <div className={styles.counterItem}>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span> Минут</span>
            </div>

            <div className={styles.counterItem}>
                <span className="value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="label"> Секунд</span>
            </div>
        </div>
    );
};
