"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";

import VideoModal from "./VideoModal";

import "swiper/css";
import "swiper/css/navigation";

export default function BestSellerSlider({ data }) {
    const [liked, setLiked] = useState({});
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const previewRefs = useRef([]);

    useEffect(() => {
        previewRefs.current.forEach((video) => {
            if (!video) return;

            video.muted = true;
            video.currentTime = 0;

            const playPreview = async () => {
                try {
                    await video.play();
                } catch (_) { }
            };

            playPreview();

            const handleTimeUpdate = () => {
                // 🔁 Loop ONLY between 0–3 seconds
                if (video.currentTime >= 3) {
                    video.currentTime = 0;
                    video.play();
                }
            };

            video.addEventListener("timeupdate", handleTimeUpdate);

            return () => {
                video.removeEventListener("timeupdate", handleTimeUpdate);
            };
        });
    }, []);

    return (
        <>
            <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-6 md:py-10 md:pt-14 mb-4">
                <h2 className="text-[#324904] text-2xl md:text-3xl font-medium mb-8 text-center">Shop Our Best Sellers</h2>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 }
                    }}
                    className="arrow_circle"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={item.id} >
                            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-2">

                                {/* 🔥 3-SEC PREVIEW VIDEO */}
                                <div
                                    className="relative cursor-pointer"
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setOpenModal(true);
                                    }}
                                >
                                    <video
                                        ref={(el) => (previewRefs.current[index] = el)}
                                        src={item.video}
                                        preload="metadata"     // ⭐ IMPORTANT
                                        playsInline
                                        muted
                                        className="w-full h-[380px] object-cover"
                                    />

                                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                        {item.views}
                                    </span>

                                    <div className="absolute bottom-2 right-2 flex gap-3 text-white">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLiked((prev) => ({
                                                    ...prev,
                                                    [item.id]: !prev[item.id],
                                                }));
                                            }}
                                            className="transition-transform active:scale-125"
                                        >
                                            {liked[item.id] ? (
                                                <FaHeart className="text-red-500 text-lg" />
                                            ) : (
                                                <FaRegHeart className="text-white text-lg" />
                                            )}
                                        </button>
                                        <FaShareAlt />
                                    </div>
                                </div>

                                {/* PRODUCT */}
                                <div className="p-4">
                                    <h3
                                        onClick={() => router.push(`/product/${item.slug}`)}
                                        className="font-medium cursor-pointer hover:underline line-clamp-1"
                                    >
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="font-semibold">₹ {item.price}</span>
                                        <span className="line-through text-gray-400 text-sm">
                                            ₹ {item.oldPrice}
                                        </span>
                                    </div>

                                    <p className="text-[#567f08] text-sm font-medium">{item.discount}</p>

                                    <button className="mt-3 font-medium w-full bg-[#5B8109] hover:bg-green-800 transition text-white py-2 rounded-full">
                                        Add to cart
                                    </button>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <VideoModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                videos={data}
                startIndex={activeIndex}
            />
        </>
    );
}
