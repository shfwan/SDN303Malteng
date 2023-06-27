import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Galeri.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slide_image_1 from '../../assets/foto/img1.jpg'
import slide_image_2 from '../../assets/foto/img2.jpg'
import slide_image_3 from '../../assets/foto/img3.jpg'
import slide_image_4 from '../../assets/foto/img4.jpg'
import slide_image_5 from '../../assets/foto/img5.jpg'
import slide_image_6 from '../../assets/foto/img6.jpg'
import slide_image_7 from '../../assets/foto/img7.jpg'



const Galeri = () => {

    const slide_image = [
        { image: slide_image_1 },
        { image: slide_image_2 },
        { image: slide_image_3 },
        { image: slide_image_4 },
        { image: slide_image_5 },
        { image: slide_image_6 },
        { image: slide_image_7 },
    ]

    return (
        <section className='galeri-section'>
            <div className="title">
                <h1>Galeri SDN 303 Malteng</h1>
                <h3>Terdapat 6 kelas dengan 1 kelas darurat</h3>
            </div>
            <div className="container">
                <div className="slide-container">
                    <div className="card-wrapper">
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
                                {slide_image.map((img) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <SwiperSlide className='card'>
                                        <div className="image-box">
                                            <img src={img.image} alt="slide_image" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            <div className="slider-controler">
                                <div className="swiper-button-prev slider-arrow">
                                    <ion-icon name="arrow-back-outline"></ion-icon>
                                </div>
                                <div className="swiper-button-next slider-arrow">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
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

export default Galeri