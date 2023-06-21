import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Galeri.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../assets/foto/img1.jpg';
import slide_image_2 from '../../assets/foto/img2.jpg';
import slide_image_3 from '../../assets/foto/img3.jpg';
import slide_image_4 from '../../assets/foto/img4.jpg';
import slide_image_5 from '../../assets/foto/img5.jpg';
import slide_image_6 from '../../assets/foto/img6.jpg';
import slide_image_7 from '../../assets/foto/img7.jpg';
import right from '../../assets/foto/arrow_right.jpg';
import left from '../../assets/foto/left-arrow.jpg';



export default function Galeri() {
    return (
        <section>
        <div className="container">
            <div className="slide-container">
                <div className="card-wrapper">
                    <div className="title">
                        <h1>Galeri SDN 303 Malteng</h1>
                        <h3>Terdapat 6 kelas dengan 1 kelas darurat</h3>
                    </div>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container">
                        <SwiperSlide className='card'>
                            <div className="image-box">
                                <img src={slide_image_1} alt="slide_image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <div className="image-box">
                                <img src={slide_image_2} alt="slide_image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <div className="image-box">
                                <img src={slide_image_3} alt="slide_image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <div className="image-box">
                                <img src={slide_image_4} alt="slide_image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <div className="image-box">
                                <img src={slide_image_5} alt="slide_image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <div className="image-box">
                                <img src={slide_image_6} alt="slide_image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='card'>
                            <div className="image-box">
                                <img src={slide_image_7} alt="slide_image" />
                            </div>
                        </SwiperSlide>
                        <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon src="D:\Web\SDN303Malteng\src\assets\chevron-back-circle-outline.svg"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                            <ion-icon src="D:\Web\SDN303Malteng\src\assets\chevron-forward-circle-outline.svg"></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>

        </section>
    );
}

// export default Galeri;