// import React from 'react';
import styles from './Footer.module.scss';
import config from '../../config/index.json';

const Footer = () => {
    const { footerSection } = config;
    // нужно реализовать

    return (
        <>
            <div className={styles.element}>
                <div className={styles.title}>{footerSection.footerText}</div>

                <div className={styles.phone}>
                    <p>{footerSection.footerPhone}</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
