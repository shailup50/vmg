

"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import HeroSlide from "./HeroSlide";
import slider1 from "@/app/images/home/slider1.webp"
import slider2 from "@/app/images/home/slider2.webp"
import slider3 from "@/app/images/home/slider3.webp"


export default function HomeSlider() {
    const slides = [
        {
            imageSrc: slider1,
            title: `<span class="text-[#00a1be]">MIND. BODY.</span> <br/> <span class="text-black">BALANCE</span>`,
            info: "Your journey to a healthier you, powerered by nature and backed by science.",
            buttonText: "Shop our range",
            alignment: " md:left",
            maxWidth: "max-w-md ml-[40%] lg:-mt-[10%] ",
        },
        {
            imageSrc: slider2,
            title: "BOTANICAL POWER SCIENTIFICALLY CRAFTED",
            subtitle: "Daily Nutrition",
            buttonText: "Shop our range",
            alignment: "left",
            position: "start",
            maxWidth: "max-w-2xl lg:-mt-[10%]",
        },
        {
            imageSrc: slider3,
            title: `WELLNESS <br> THAT <i class="text-[#75d1ff] font1 font-medium text-4xl md:text-5xl">walks</i> <br> BESIDE YOU`,

            buttonText: "Shop our range",
            alignment: "right",
            position: "end",
            maxWidth: "max-w-2xl",
        },
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}>
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <HeroSlide {...slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
