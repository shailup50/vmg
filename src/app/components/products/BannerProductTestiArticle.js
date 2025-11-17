"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import AnimatedButton from '../AnimatedButton';
import BestSellingProducts from './BestSellingProducts';
import product1 from "@/app/images/product/product1.webp"
import product2 from "@/app/images/product/product2.webp"
import product3 from "@/app/images/product/product3.webp"



export const Banner = ({
    title = "Find Your Formula",
    subtitle = "For Everyday Wellness",
    text = "Shop Now",
    imageSrc = "/images/wellness-banner.png",

}) => {
    return (
        <>
            <section
                className={` w-full relative flex   items-center px-6 md:px-16 py-20 md:py-56 overflow-hidden`}
                style={{
                    backgroundImage: `url(${imageSrc.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right center",
                }}
            >
                <div className='max-w-7xl mx-auto flex flex-start w-full'>
                    <motion.div
                        className="w-full flex flex-col items-start md:text-left"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <motion.h2
                            className="text-2xl md:text-4xl text-[#4F4F4F]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: false }}
                        >
                            {title}
                        </motion.h2>

                        <motion.h3
                            className="text-3xl md:text-5xl font-semibold text-[#4F4F4F] mt-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: false }}
                        >
                            {subtitle}
                        </motion.h3>

                        <motion.div
                            className="mt-8 md:mt-20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            viewport={{ once: false }}
                        >
                            <AnimatedButton text={text} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}


export const Product = () => {
    const products = [
        {
            title: "VigorZen",
            price: 700,
            oldPrice: 899,
            desc:
                "Collagen peptide, Glucosomine sulfate, Ginger, Rosehip extract, multivitamin & multimineral tablets",
            image: product1,
            rating: 4,
            url: "/product-details"
        },
        {
            title: "Extracard",
            price: 700,
            oldPrice: 899,
            desc:
                "Co-Enzyme Q10, Omega 3, Green tea, Grape seed, Lycopene tablets",
            image: product2,
            rating: 5,
            url: "#"

        },
        {
            title: "Welfusion",
            price: 700,
            oldPrice: 899,
            desc:
                "Co-Enzyme Q10, Beta carotene, Multivitamin & mineral tablets",
            image: product3,
            rating: 5,
            url: "#"


        },
        {
            title: "Welfusion",
            price: 700,
            oldPrice: 899,
            desc:
                "Co-Enzyme Q10, Beta carotene, Multivitamin & mineral tablets",
            image: product3,
            rating: 3,
            url: "#"


        },
    ];
    return (
        <>
            <BestSellingProducts products={products} />
        </>
    )
}



export const Testi = ({ testimonials = [] }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);



    // Helper fallbacks — call these on button click if binding didn't work
    const handlePrev = (e) => {
        e?.preventDefault();
        if (swiperRef.current && typeof swiperRef.current.slidePrev === "function") {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = (e) => {
        e?.preventDefault();
        if (swiperRef.current && typeof swiperRef.current.slideNext === "function") {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className="bg-white pt-4 md:pt-10">
            {/* NOTE: keep this container 'relative' so absolute buttons position correctly */}
            <div className="max-w-7xl mx-auto px-6 text-center relative">

                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={false}
                    pagination={{ clickable: false }}

                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}

                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="pb-10!"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="w-[80%] mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <motion.p
                                    className="text-lg md:text-xl text-[#1D1D1D] leading-relaxed mb-10"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.2 }}
                                >
                                    “{item.quote}”
                                </motion.p>

                                <motion.div
                                    className="flex flex-col items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={60}
                                            height={60}
                                            className="rounded-full mb-3 object-cover"
                                        />
                                    </motion.div>

                                    <h3 className="text-[#1D1D1D] font-medium">{item.name}</h3>
                                    <p className="text-black font-medium text-lg md:text-xl mt-1">
                                        {item.role}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* LEFT BUTTON */}
                <motion.button
                    // ensure button sits above swiper and receives clicks
                    ref={prevRef}
                    onClick={handlePrev}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 bg-white border border-[#1D1D1D] w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition z-[9999] pointer-events-auto"
                    aria-label="Previous testimonial"
                >
                    <IoIosArrowRoundBack className="text-[#1D1D1D] text-2xl md:text-3xl" />
                </motion.button>

                {/* RIGHT BUTTON */}
                <motion.button
                    ref={nextRef}
                    onClick={handleNext}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 bg-white border border-[#1D1D1D] w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition z-[9999] pointer-events-auto"
                    aria-label="Next testimonial"
                >
                    <IoIosArrowRoundForward className="text-[#1D1D1D] text-2xl md:text-3xl" />
                </motion.button>

            </div>
        </section>
    );
};


export const Article = ({ heading, articles = [] }) => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-10 md:py-14">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-medium md:text-left text-center mb-10"
                >
                    {heading}
                </motion.h2>

                <div className="grid gap-4 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white overflow-hidden transition-shadow duration-300"
                        >
                            <div className="relative w-full">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    className="object-cover w-full"
                                />
                            </div>

                            <div className="py-6">

                                <div className="flex gap-2 mb-4 flex-wrap">
                                    <span className="bg-[#5B8109] text-white text-[15px] md:text-base px-3 py-1 rounded-lg">
                                        {article.date}
                                    </span>
                                    <span className="bg-[#5B8109] text-white text-[15px] md:text-base px-3 py-1 rounded-lg">
                                        {article.category}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-medium text-[#1D1D1D] mb-2">
                                    {article.title}
                                </h3>

                                <p className="text-[15px] md:text-base font-light text-[#585858] leading-relaxed">
                                    {article.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </section>
        </>
    )
}
