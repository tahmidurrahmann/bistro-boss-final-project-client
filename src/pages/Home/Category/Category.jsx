import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/assets/home/slide1.jpg'
import slide2 from '../../../assets/assets/home/slide2.jpg'
import slide3 from '../../../assets/assets/home/slide3.jpg'
import slide4 from '../../../assets/assets/home/slide4.jpg'
import slide5 from '../../../assets/assets/home/slide5.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import SubHeading from '../../../components/SubHeading/SubHeading';

const Category = () => {
    return (
        <div className='my-20'>
            <SubHeading subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}></SubHeading>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='font-cinzel text-xl ml-8 -mt-8 md:text-3xl text-white md:-mt-16 md:ml-16'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='font-cinzel text-xl ml-8 -mt-8 md:text-3xl text-white md:-mt-16 md:ml-16'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='font-cinzel text-xl ml-8 -mt-8 md:text-3xl text-white md:-mt-16 md:ml-16'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='font-cinzel text-xl ml-8 -mt-8 md:text-3xl text-white md:-mt-16 md:ml-16'>Deserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='font-cinzel text-xl ml-8 sm:-mt-8 md:text-3xl text-white md:-mt-24 md:ml-16'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;