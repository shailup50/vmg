"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "@/app/components/TestimonialCard";

export default function Testimonials({
    title = "Hear from Our Community",
    subtitle = "Discover why so many people trust us with their daily wellbeing.",
    testimonials = [],
}) {


    return (
        <section className="bg-[#EFF9FF] py-10 md:py-20">
            <div className=" mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-black text-2xl md:text-3xl font-semibold mb-4">
                    {title}
                </h2>
                <p className="text-black mb-0 md:mb-4">{subtitle}</p>

                {/* Swiper Section */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}

                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3, spaceBetween: 0 },
                        }}
                        className="slider_3d black_arrow outer_arrow py-10! md:py-20! px-0!"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <TestimonialCard
                                    name={t.name}
                                    description={t.description}
                                    image={t.image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>



                </div>
            </div>
        </section>
    );
}
