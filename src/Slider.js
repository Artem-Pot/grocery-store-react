import React from 'react';
import Image from './components/Image';
import imgSlide from './images/slider/slide-1.png';


class Slider extends React.Component {
    render() {
        return (
            <section className="slider">
                <div className="container">
                    <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Image image={imgSlide} className="slider__img"/>
                            <h2 className="slider__title">Доставка бесплатно от 1000 ₽</h2>
                        </div>
                        <div className="swiper-slide">
                            <Image image={imgSlide} className="slider__img"/>
                            <h2 className="slider__title">Скидка 5% на вторую доставку</h2>
                        </div>
                        <div className="swiper-slide">
                            <Image image={imgSlide} className="slider__img"/>
                            <h2 className="slider__title">Скидка 10% на третью и последующую доставку</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            )
    }
}

export default Slider;