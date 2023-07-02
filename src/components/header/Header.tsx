import { useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import config from '../../config/index.json';
import CircleType from 'circletype';

const Header = () => {
    const { navigation } = config;
    const letters = ['•', 'Н', 'а', 'т', 'я', 'ж', 'н', 'ы', 'е', ' ', 'п', 'о', 'т', 'о', 'л', 'к', 'и', '•'];
    const h1Ref = useRef(null);

    useEffect(() => {
        const circleType = new CircleType(h1Ref.current);
        circleType.radius(1800);
    }, []);

    const renderLetters = () => {
        return letters.map((letter, index) => (
            <span className={`char${index + 1}`} key={index}>
                {letter}
            </span>
        ));
    };

    return (
        <div className={styles.element}>
            <h1 className={styles.badge} ref={h1Ref}>
                {renderLetters()}
            </h1>
            <h2>{navigation.header2}</h2>
        </div>
    );
};

export default Header;
