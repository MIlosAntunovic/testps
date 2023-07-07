import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const proizvswiper = () => {
    return(
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={
            {
                0:{
                    slidesPerView:1,
                    spaceBetween:30,
                },
                500:{
                    slidesPerView:2,
                    spaceBetween:30,
                },
                768:{
                    slidesPerView:3,
                    spaceBetween:30,
                },
                1024:{
                    slidesPerView:4,
                    spaceBetween:30,
                },
                1400:{
                    slidesPerView:5,
                    spaceBetween:30,
                }
            }
        }
        >
        <SwiperSlide><img src="img/kese.jpg" alt=""/><h2>kese i folije</h2></SwiperSlide>
        <SwiperSlide><img src="img/zakuhinju.png" alt=""/><h2>za kuhinju</h2></SwiperSlide>
        <SwiperSlide><img src="img/ubrus.png" alt=""/><h2>ubrusi i <br/> toalet papiri</h2></SwiperSlide>
        <SwiperSlide><img src="img/kozmetika.png" alt=""/><h2>kozmetka</h2></SwiperSlide>
        <SwiperSlide><img src="img/plasticnekante.png" alt=""/><h2>plasticne kante</h2></SwiperSlide>
        <SwiperSlide><img src="img/productdvg.jpg" alt=""/><h2>toalet papir</h2></SwiperSlide>
        <SwiperSlide><img src="img/productdvg.jpg" alt=""/><h2>test1</h2></SwiperSlide>
        <SwiperSlide><img src="img/productdvg.jpg" alt=""/><h2>test2</h2></SwiperSlide>
      </Swiper>
    
    );
};

export default proizvswiper;