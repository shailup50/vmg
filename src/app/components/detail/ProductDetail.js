"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { FiMinus, FiPlus, FiCheckCircle } from "react-icons/fi";
import car from "@/app/images/info/car-icon.svg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ImLocation } from "react-icons/im";
import { SlArrowRight } from "react-icons/sl";

import flipcart from "@/app/images/flipkart-logo.svg"
import amazon from "@/app/images/amazon-logo.svg"
import mg from "@/app/images/1mg-logo.svg"
import Link from "next/link";



export default function ProductDetail({ product }) {
    const [thumbs, setThumbs] = useState(null);
    const [quantity, setQuantity] = useState(1);
    // const [pin, setPin] = useState("");

    const [pin, setPin] = useState("122001 - Gurugram");
    const [isEditing, setIsEditing] = useState(false);

    const handleBlur = () => {
        setIsEditing(false); // Auto disable after user clicks outside
        if (pin.trim() === "") {
            setPin("122001 - Gurugram"); // Prevent empty value
        }
    };

    const discount =
        product.oldPrice > 0
            ? Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100)
            : 0;

    const increase = () => setQuantity(quantity + 1);
    const decrease = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT - IMAGE GALLERY */}
            <div>
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    autoplay={{ delay: 8000 }}
                    modules={[Navigation, Thumbs, Autoplay]}
                    thumbs={{ swiper: thumbs }}

                    className="rounded-lg overflow-hidden arrow_circle"
                >
                    {product.images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <Image src={img} alt="product" width={700} height={600} className="w-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Thumbnail Slider */}
                <Swiper
                    onSwiper={setThumbs}
                    spaceBetween={20}
                    slidesPerView={4}
                    watchSlidesProgress
                    modules={[Navigation, Thumbs]}
                    className="mt-4"

                >
                    {product.images.map((img, i) => (
                        <SwiperSlide key={i} className="cursor-pointer">
                            <Image src={img} alt="thumb" width={100} height={100} className="rounded-sm border border-[#339CD7] w-full" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div>
                    <div className="grid grid-cols-3 md:grid-cols-3 items-start gap-6 md:gap-10 mt-8 md:mt-12">
                        {product.benefits?.map((f, i) => (
                            <div
                                key={i}
                                className="text-center flex flex-col items-center text-sm text-gray-700"
                            >
                                <div className="mb-2">
                                    <Image src={f.icon} width={80} height={80} alt={f.name} className="md:h-16 h-10" />
                                </div>
                                <p className="mt-1 text-black text-[13px] md:text-[15px] font-medium">{f.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT - DETAILS */}
            <div className="space-y-4">

                <span className="bg-[#339CD7] text-white px-10 py-1 rounded-sm text-sm">
                    Save Up To {discount}%
                </span>

                <h1 className="text-2xl md:text-3xl leading-snug font-semibold text-black mt-4">{product.title}</h1>
                <h3 className="text-base md:text-[17px] text-black font-medium">{product.descriptionTitle}</h3>

                <p className="text-gray-600 leading-relaxed whitespace-pre-line -mt-2 text-[15px]" dangerouslySetInnerHTML={{ __html: product.description }} />

                {/* <h3 className="text-black mt-6 mb-3 text-base font-medium">Also Available on</h3>
                <div className="flex gap-4 mb-8 items-center">
                    <Link href="https://www.flipkart.com/" target="_blank"> <Image src={flipcart} alt="flipcart" className="w-7 object-contain" /></Link>
                    <Link href="https://www.amazon.in/" target="_blank"><Image src={amazon} alt="amazon" className="w-8 object-contain" /></Link>
                    <Link href="https://www.1mg.com/" target="_blank"><Image src={mg} alt="1mg" className="w-10 object-contain" /></Link>
                </div> */}


                {/* Ingredients */}
                {product.ingredients && (
                    <div className="bg-[#F9FFEB] p-5 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Ingredients:</h3>
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                            {product.ingredients}
                        </p>
                    </div>
                )}

                {/* ICON FEATURES (show only if present) */}
                <div className="flex flex-wrap lg:flex-nowrap items-start gap-6">
                    {product.features?.map((f, i) => (
                        <div
                            key={i}
                            className="text-center flex flex-col items-center text-sm text-gray-700 w-[25%] md:w-[30%] lg:w-[20%]"
                        >
                            <div className="bg-[#A4C75A] p-2 rounded-full mb-2">
                                <Image src={f.icon} width={40} height={40} alt={f.name} className="h-10" />
                            </div>
                            <p className="mt-1 text-[#505050] text-[11px] font-medium mx-auto md:w-[95%]">{f.name}</p>
                        </div>
                    ))}
                </div>

                {/* DELIVERY OPTIONS */}
                <div className="border border-[#5B8109] rounded-xl p-4  bg-white mt-4">
                    <div className="flex flex-wrap items-center gap-4 lg:gap-8">
                        <div className="flex items-center gap-2 ">
                            <div className="text-base">
                                <p className="font-medium">Delivery options</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 justify-between lg:gap-8 ">
                            <div className="bg-[#F2F4F7] flex items-center gap-2 rounded-4xl px-6">
                                <ImLocation />
                                <input
                                    disabled={!isEditing}
                                    onBlur={handleBlur}
                                    className={`border-0 px-1 py-2 rounded-lg text-[15px] outline-none w-40 transition-all ${!isEditing ? " cursor-not-allowed text-[#1D2939]" : ""
                                        }`}
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    placeholder="Enter Pin"
                                />
                            </div>


                            <button
                                className="text-black text-[14px] hover:underline inline-flex gap-2 items-center"
                                onClick={() => setIsEditing(true)}
                            >
                                Change <SlArrowRight />

                            </button>
                        </div>
                    </div>
                    <div className="bg-[#F2F4F7] py-3 px-6 rounded-4xl text-[14px] text-[#1D2939] flex justify-center gap-2 mt-4">
                        <Image src={car} alt="Delivery" />
                        <p>
                            <b>Free Delivery between </b> Mon, Nov 6 - Mon, Nov 09</p>
                    </div>
                </div>

                {/* PRICING */}
                <div className="md:my-8 my-4 font-semibold text-gray-900">
                    <span className="text-[#5B8109] md:text-3xl text-2xl">₹{product.newPrice.toFixed(2)}</span>
                    {product.oldPrice > 0 && (
                        <span className="text-[#7A7A7A] md:text-xl line-through ml-3 text-lg">
                            ₹{product.oldPrice.toFixed(2)}
                        </span>
                    )}
                    <span className="text-[#7A7A7A] ml-2 text-base md:text-lg font-medium">({discount}% Off)</span>
                    <span className="text-[#7A7A7A] ml-2 font-normal text-sm md:text-[15px]"> Inclusive Of All Taxes</span>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3 ">
                    <span className="font-medium bg-[#F2F4F7] py-3 px-6 text-base md:text-lg rounded-4xl text-black">Quantity</span>

                    <div className="flex items-center gap-2  rounded-full py-3 px-6 bg-[#F2F4F7] ">
                        <button onClick={decrease} className="p-1 text-black text-base md:text-lg">
                            <FiMinus />
                        </button>
                        <span className="font-semibold px-4 text-base md:text-lg">{quantity}</span>
                        <button onClick={increase} className="p-1 text-black text-base md:text-lg">
                            <FiPlus />
                        </button>
                    </div>
                </div>

                {/* BUTTONS */}
                <div className="">
                    <div className="flex flex-wrap sm:flex-row gap-2 md:gap-4 md:pt-4">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-[#5B8109] text-white py-3 rounded-full font-medium w-2/4"
                        >
                            Add to Cart
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 border border-[#5B8109] text-black py-3 rounded-full font-medium w-2/4"
                        >
                            Save to wishlist
                        </motion.button>
                    </div>
                    <div className="flex py-4 md:py-6 pb-0 md:pb-2">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-[#5B8109] text-white py-3 rounded-full font-medium"
                        >
                            BUY NOW
                        </motion.button>
                    </div>
                </div>

                <p className="text-[#939393] text-sm text-center">Free shipping in the INDIA</p>
            </div>
        </section>
    );
}
