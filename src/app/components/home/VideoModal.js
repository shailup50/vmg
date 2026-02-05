"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import {
    FaHeart,
    FaShareAlt,
    FaRegHeart,
    FaVolumeMute,
    FaVolumeUp,
    FaTimes,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

export default function VideoModal({ open, onClose, videos, startIndex }) {
    const [liked, setLiked] = useState({});
    const videoRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(startIndex);
    const [isMuted, setIsMuted] = useState(true); // ✅ default mute

    if (!open) return null;

    /* 🔊 Toggle mute for CURRENT video only */
    const toggleMute = () => {
        const currentVideo = videoRefs.current[activeIndex];
        if (!currentVideo) return;

        currentVideo.muted = !currentVideo.muted;
        setIsMuted(currentVideo.muted);
    };

    /* 🔁 When slide changes */
    const handleSlideChange = (swiper) => {
        const newIndex = swiper.activeIndex;

        // Mute all videos
        videoRefs.current.forEach((video) => {
            if (video) {
                video.muted = true;
                video.pause();
            }
        });

        // Play & mute new active video
        const activeVideo = videoRefs.current[newIndex];
        if (activeVideo) {
            activeVideo.currentTime = 0;
            activeVideo.muted = true;
            activeVideo.play();
        }

        setActiveIndex(newIndex);
        setIsMuted(true);
    };

    return (
        <div className="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center">
            {/* CLOSE */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-xl z-50"
            >
                <FaTimes />
            </button>

            <Swiper
                modules={[Navigation]}
                navigation
                initialSlide={startIndex}
                onSlideChange={handleSlideChange}
                className="w-full max-w-[350px] arrow_circle"
            >
                {videos.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative">
                            {/* VIDEO */}
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                src={item.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                className="w-full h-[80dvh] md:h-[90vh] object-cover rounded-xl"
                            />

                            {/* RIGHT ICONS */}
                            <div className="absolute right-3 bottom-24 flex flex-col gap-4 text-white text-xl">
                                <button
                                    onClick={() =>
                                        setLiked((prev) => ({
                                            ...prev,
                                            [item.id]: !prev[item.id],
                                        }))
                                    }
                                    className="transition-transform active:scale-125"
                                >
                                    {liked[item.id] ? (
                                        <FaHeart className="text-red-500 text-2xl" />
                                    ) : (
                                        <FaRegHeart className="text-white text-2xl" />
                                    )}
                                </button>
                                <FaShareAlt />
                            </div>

                            {/* MUTE / UNMUTE */}
                            <button
                                onClick={toggleMute}
                                className="absolute top-4 right-14 bg-black/50 p-2 rounded-full text-white"
                            >
                                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                            </button>

                            {/* BOTTOM CTA */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent text-white">
                                <p className="text-sm font-medium">{item.title}</p>
                                <p className="text-sm">₹ {item.price}</p>
                                <button className="mt-2 w-full bg-[#5B8109] hover:bg-green-800 transition text-white font-medium py-2 rounded-lg">
                                    Buy it now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
