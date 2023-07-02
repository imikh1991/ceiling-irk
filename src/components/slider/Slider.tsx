// import React, { useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// local styles
import styles from './Slider.module.scss';
import config from '../../config/index.json';

const Slider = () => {
    const { swiperSlides } = config;

    return (
        <Swiper
            className={styles.element}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // отладочная печать
            //onSlideChange={() => console.log('slide change')}
            //onSwiper={(swiper) => console.log(swiper)}
        >
            {swiperSlides.items.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.element}>
                        <img src={slide.img} alt={slide.alt} />
                        <p className={styles.title}>{slide.title}</p>
                        <p>{slide.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
