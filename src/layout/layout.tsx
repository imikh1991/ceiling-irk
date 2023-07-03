// import React from 'react';
import HeaderImg from './headerImg/HeaderImg';
import Promo from '../components/promo/Promo';
import Work from '../components/work/Work';
import MainSection from './mainSection/MainSection';
import styles from './Layout.module.scss';
// рендер на страницу
// набираем элементы из папки components

const Layout = () => (
    <>
        <main className={styles.main}>
            <HeaderImg />
            <Promo />
            <Work />
            <MainSection />
        </main>
    </>
);

export default Layout;
