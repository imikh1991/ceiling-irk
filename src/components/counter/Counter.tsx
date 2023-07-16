//import React from 'react';
// import { calculateTimeLeft } from '../../utils/utils';
import FlipCountdown from '@rumess/react-flip-countdown';
import styles from './Counter.module.scss';

export const Counter = () => {
    // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // span вычислялся по значению
    // <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
    //   <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
    return (
        <div className={styles.countDown}>
            <FlipCountdown
                hideYear
                hideMonth
                theme="light"
                // hideHour
                // hideMinute
                // hideSecond
                size="small"
                endAt={'2023-10-12 01:26:58'} // Date/Time
            />
        </div>
    );
};
