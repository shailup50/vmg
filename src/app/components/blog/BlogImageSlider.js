"use client";

import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const BlogImageSlider = ({ slides = [], aspectClass = "aspect-[16/10]" }) => {
    if (!slides.length) {
        return null;
    }

    return (
        <div className="md:hidden mb-10 blog-image-slider">
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={16}
                pagination={{ clickable: true }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Link href={slide.link || "/blog-detail"} className="block">
                            <div className={`relative ${aspectClass} overflow-hidden rounded-lg`}>
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                            <h2 className="mt-4 text-lg font-medium leading-snug text-[#121212]">
                                {slide.title}
                            </h2>
                            {slide.meta && (
                                <p className="mt-2 text-sm text-[#717171]">
                                    {slide.meta}
                                </p>
                            )}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogImageSlider;
