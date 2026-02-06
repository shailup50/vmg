"use client"
import { motion } from "framer-motion";
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
        <section className="bg-[#EFF9FF] py-8 md:py-12">
            <motion.div
                className="mx-auto px-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                {/* Heading */}
                <motion.h2
                    className="text-black text-2xl md:text-3xl font-medium mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="text-black mb-0 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    {subtitle}
                </motion.p>

                {/* Swiper Section */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={false}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={false}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: false }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 40 },
                            1024: { slidesPerView: 3, spaceBetween: 70 },
                        }}
                        className="slider_3d black_arrow outer_arrow py-10! md:py-20! px-0!"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                {/* Each card animated */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                    viewport={{ once: false }}
                                >
                                    <TestimonialCard
                                        name={t.name}
                                        description={t.description}
                                        image={t.image}
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </motion.div>
        </section>
    );
}
