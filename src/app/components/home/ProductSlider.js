"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import ProductCard from '../ProductCard';
import { Navigation } from 'swiper/modules';


export default function ProductSlider({ slidesData }) {
    return (
        <div className="max-w-7xl mx-auto my-2 px-4 md:px-5 lg:px-0">
            <Swiper
                spaceBetween={15}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className='black_arrow outer_arrow'
            >
                {slidesData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard
                            image={data.image}
                            title={data.title}
                            subtitle={data.subtitle}
                            description={data.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
