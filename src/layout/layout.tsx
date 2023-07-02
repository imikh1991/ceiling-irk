// import React from 'react';
import HeaderImg from './headerImg/HeaderImg';
import Promo from '../components/promo/Promo';
import Work from '../components/work/Work';
// import styles from './Layout.module.scss';
// рендер на страницу
// набираем элементы из папки components

const Layout = () => (
    <>
        <main>
            <HeaderImg />
            <Promo />
            <Work />
        </main>
    </>
);

export default Layout;
