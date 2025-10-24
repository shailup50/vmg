"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";

const BlogSlider = ({ title = "Mindful Nutrition: Our Blogs", blogs = [] }) => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <section className="max-w-7xl mx-auto py-10 md:py-16 px-5 lg:px-0 text-center relative">

            <h2 className="text-2xl md:text-3xl font-semibold text-[#3a4f1d] mb-10">
                {title}
            </h2>

            <div className="relative ">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    onSwiper={setSwiperRef}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}

                    className="pb-10 black_arrow outer_arrow px-8!"
                >
                    {blogs.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <div className="group1 relative  overflow-hidden shadow-md">
                                <div className="absolute left-0 top-0 w-full h-full shaow_X opacity-100" style={{
                                    background: "linear-gradient(180.07deg, rgb(0 0 0 / 28%) 67.27%, rgb(0 0 0) 99.94%) !important",
                                }}>

                                </div>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={500}
                                    height={400}
                                    className="w-full object-cover transition-transform duration-100  "
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                                    <h3 className="text-white font-medium text-sm md:text-base mx-auto w-[80%]">
                                        {blog.title}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>



            </div>

            {/* Read More Button */}
            <button className="bg-[#4B6F00] hover:bg-[#4c6e07] cursor-pointer  py-3 px-12 text-white  inline-block mt-8">
                Read More
            </button>
        </section>
    );
};

export default BlogSlider;
