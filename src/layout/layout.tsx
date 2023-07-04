// import React from 'react';
import HeaderImg from './headerImg/HeaderImg';
import Promo from '../components/promo/Promo';
import Work from '../components/work/Work';
import MainSection from './mainSection/MainSection';
import styles from './Layout.module.scss';
import Footer from '../components/footer/Footer';
import LazyShow from '../components/lazy/Lazy';
// рендер на страницу
// набираем элементы из папки components

const Layout = () => (
    <>
        <main className={styles.main}>
            <LazyShow>
                <>
                    <HeaderImg />
                </>
            </LazyShow>

            <LazyShow>
                <>
                    <Promo />
                </>
            </LazyShow>

            <LazyShow>
                <>
                    <Work />
                </>
            </LazyShow>
            <LazyShow>
                <>
                    <MainSection />
                </>
            </LazyShow>
            <LazyShow>
                <>
                    <Footer />
                </>
            </LazyShow>
        </main>
    </>
);

export default Layout;
