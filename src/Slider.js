import React from 'react';
import Image from './components/Image';
import imgSlide from './images/slider/slide-1.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './css/style.css';

// function Slider() {
//     return (
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true}
//         grabCursor={true}
//         speed={1500}
//         autoplay={{delay : 1000, disableOnInteraction : true}}
//         >

//         <section className="slider">
//             <div className="container">
//                 <div className="swiper">
//                     <div className="swiper-wrapper">
//                         <SwiperSlide>
//                             <Image image={imgSlide} className="slider__img"/>
//                             <h2 className="slider__title">Доставка бесплатно от 1000 ₽</h2>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <Image image={imgSlide} className="slider__img"/>
//                             <h2 className="slider__title">Скидка 5% на вторую доставку</h2>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <Image image={imgSlide} className="slider__img"/>
//                             <h2 className="slider__title">Скидка 10% на третью и последующую доставку</h2>
//                         </SwiperSlide>
//                     </div>
//                 </div>
//             </div>
//         </section>
        
//       </Swiper>
//     );
//   };

// export default Slider;

export default () => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{delay : 1000, disableOnInteraction : true}}
        speed={1500}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    );
  };