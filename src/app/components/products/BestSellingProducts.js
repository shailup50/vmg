"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { FaStar, FaRegStar, FaCheckCircle } from "react-icons/fa";

export default function BestSellingProducts({ products = [] }) {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-0 py-10 md:py-16">
            <motion.div
                className="flex items-center justify-between mb-6 md:flex-nowrap flex-wrap"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Best Selling Products
                </h2>

                <div className="flex items-center gap-3 md:w-auto w-full justify-end md:mt-0 mt-4">
                    <button className="swiper-prev p-2 rounded-full border hover:bg-gray-100 transition">
                        <IoIosArrowRoundBack className="text-[#1D1D1D] text-2xl md:text-3xl" />
                    </button>
                    <button className="swiper-next p-2 rounded-full border hover:bg-gray-100 transition">
                        <IoIosArrowRoundForward className="text-[#1D1D1D] text-2xl md:text-3xl" />
                    </button>
                </div>
            </motion.div>

            {/* Slider */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    }}
                    pagination={{ clickable: false }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1, spaceBetween: 100 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="py-6"
                >
                    {products.map((item, i) => (
                        <SwiperSlide key={i}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: false }}
                            >
                                <ProductCard {...item} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    );
}

/* ---------------------------------------------------
   PRODUCT CARD
---------------------------------------------------- */

function ProductCard({
    title,
    price,
    oldPrice,
    desc,
    image,
    rating = 5
}) {
    const [qty, setQty] = useState(1);

    const decrease = () => setQty(prev => (prev > 1 ? prev - 1 : 1));
    const increase = () => setQty(prev => prev + 1);

    const totalStars = 5;

    // ✅ Dynamic Discount Calculation
    const discount =
        oldPrice && price
            ? Math.round(((oldPrice - price) / oldPrice) * 100)
            : 0;

    return (
        <div className="w-full bg-white">
            {/* Image */}
            <div className="w-full rounded-xl overflow-hidden">
                <Image
                    src={image}
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl"
                    alt={title}
                />
            </div>

            <h3 className="text-[#1D1D1D] text-xl md:text-2xl font-medium mt-4">
                {title}
            </h3>

            <p className="text-[#434343] text-sm md:text-[15px] mt-2 mb-3 md:mb-6">
                {desc}
            </p>

            {/* Price + Discount */}
            <div className="mt-3 flex items-center gap-3">
                <p className="text-[#5B8109] text-lg md:text-xl font-semibold">
                    ₹{price}
                </p>

                {oldPrice && (
                    <>
                        <p className="line-through text-[#7A7A7A] font-semibold">₹{oldPrice}</p>
                        <p className="font-semibold text-sm text-[#7A7A7A]">
                            ({discount}% off)
                        </p>
                    </>
                )}
            </div>

            {/* Stars */}
            <div className="flex items-center mt-2">
                {[...Array(totalStars)].map((_, idx) =>
                    idx < rating ? (
                        <FaStar key={idx} className="text-[#F9C35A] text-lg" />
                    ) : (
                        <FaRegStar key={idx} className="text-[#7A7A7A] text-lg" />
                    )
                )}
            </div>

            {/* Quantity */}
            <div className="mt-5 mb-3">
                <div className="flex items-center gap-3  w-fit">
                    <span className="text-base font-medium text-[#1D2939] bg-[#F2F4F7] rounded-full px-4 py-2">Quantity</span>
                    <div className="bg-[#F2F4F7] rounded-full px-4 py-2 ">
                        <button
                            onClick={decrease}
                            className="px-2 text-xl text-gray-700 hover:text-black"
                        >
                            –
                        </button>

                        <span className="text-base font-medium   text-center inline-block w-10">
                            {qty}
                        </span>

                        <button
                            onClick={increase}
                            className="px-2 text-xl text-gray-700 hover:text-black"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
                <button className="flex-1 bg-[#5B8109] text-white rounded-full py-3 font-medium hover:bg-green-700 transition">
                    Add to cart
                </button>

                <button className="flex-1 border border-[#5B8109] rounded-full py-3 font-medium hover:bg-gray-100 transition">
                    Save to wishlist
                </button>
            </div>

            <button className="w-full mt-4 bg-[#5B8109] text-white rounded-full py-3 font-medium hover:bg-green-800 transition">
                BUY NOW
            </button>
        </div>
    );
}