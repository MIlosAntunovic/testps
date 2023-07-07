import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const videoslider = () =>{
    return (
        <div className="video-slider">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src="img/dvgv2.png" alt=""/></SwiperSlide>
            <SwiperSlide><img src="./img/footerdvgimg.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src="./img/dvgprevoz.jpeg" alt=""/></SwiperSlide>
        </Swiper>
    </div>
    )
};

export default videoslider;