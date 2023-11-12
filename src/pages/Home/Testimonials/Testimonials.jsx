import SubHeading from "../../../components/SubHeading/SubHeading";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import Svg from "./Svg";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SubHeading subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SubHeading>
            <div className="px-2 md:px-16">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <div key={review._id}>
                            <SwiperSlide className="text-center my-20 md:px-36">
                                <div className="flex justify-center items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <div className="flex justify-center items-center my-10">
                                    <Svg></Svg>
                                </div>
                                <p className="py-3 px-10 md:px-4">{review.details}</p>
                                <p className="text-2xl text-[#CD9003]">{review.name}</p>
                            </SwiperSlide>
                        </div>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;