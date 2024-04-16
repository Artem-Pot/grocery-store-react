import React from 'react';
import Image from './Image';
import imgSlide from '../images/slider/slide-1.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';

register();

function Slider() {
    return (
      <section className="slider">
        <div className="container">
            <div className="swiper">
                <div className="swiper-container">
                  <Swiper
                    loop={true}
                    speed={1000}
                    autoplay={{delay:5000, disableOnInteraction:true}}
                    >
                      <SwiperSlide>
                          <Image image={imgSlide} className="slider__img"/>
                          <h2 className="slider__title">Доставка бесплатно от 1000 ₽</h2>
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image image={imgSlide} className="slider__img"/>
                          <h2 className="slider__title">Скидка 5% на вторую доставку</h2>
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image image={imgSlide} className="slider__img"/>
                          <h2 className="slider__title">Скидка 10% на третью и последующую доставку</h2>
                      </SwiperSlide>
                  </Swiper>
                </div>
            </div>
        </div>
      </section>
    );
  };

export default Slider;