// import React from 'react';
import styles from './MainSection.module.scss';
// import config from '../../config/index.json';
import Adv from '../../components/adv/Adv';
import Form from '../../components/forms/Form';
import Calc from '../../components/calc/Calc';
import Feedback from '../../components/slides/feedback/Feedback';
const MainSection = () => {
    // const { navigation } = config;
    // нужно реализовать

    return (
        <section className={styles.wrapper}>
            <Adv />
            <Form />
            <Calc />
            <Feedback />
        </section>
    );
};

export default MainSection;
