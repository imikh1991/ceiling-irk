// import React, { useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// local styles
import styles from './Feedback.module.scss';
import config from '../../../config/index.json';

const Feedback = () => {
    const { feedbackSlides } = config;

    return (
        <div className={styles.feedback} id="feedback">
            <h2 className={styles.title}>{feedbackSlides.title}</h2>
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
                // onSlideChange={() => console.log('Feedback -> slide change')}
                //onSwiper={(swiper) => console.log(swiper)}
            >
                {feedbackSlides.items.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.element}>
                            <p className={styles.title}>{slide.title}</p>
                            <p>{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Feedback;
