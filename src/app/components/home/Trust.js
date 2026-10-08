"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
    MdAutoAwesome,
    MdOutlineGroups,
    MdOutlinePerson,
    MdOutlineWorkspacePremium,
} from "react-icons/md";

import "swiper/css";

const trustItems = [
    {
        icon: <MdOutlineWorkspacePremium />,
        text: "India's Trusted Nutraceutical Brand",
    },
    {
        icon: <MdOutlineGroups />,
        text: "Sold over 1 Lac + in 1 year counting",
    },
    {
        icon: (
            <span className="relative inline-flex">
                <MdOutlinePerson />
                {/* <MdAutoAwesome className="absolute -right-1 -top-0 !h-5 !w-5" /> */}
            </span>
        ),
        text: "70% returning customer",
    },
];

export const Trust = () => {
    return (
        <motion.section
            className="bg-white shadow-[0_8px_18px_-14px_rgba(107,114,128,0.75)] py-0! md:py-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-5 2xl:px-0">
                <div className="overflow-hidden rounded-3xl border-0 border-[#7f8f8a] lg:hidden">
                    <div className="trust-marquee flex w-max items-center gap-8 py-1">
                        {[...trustItems, ...trustItems].map((item, index) => (
                            <div
                                key={`${item.text}-${index}`}
                                className="flex min-w-max items-center justify-center gap-3 text-center"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[2.35rem] leading-none text-[#123b35]">
                                    {item.icon}
                                </span>
                                <p className="whitespace-nowrap text-sm font-medium leading-tight text-[#16201f]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden overflow-hidden rounded-3xl border-0 border-[#7f8f8a] lg:block">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        allowTouchMove={false}
                        className="trust-swiper min-w-full"
                    >
                        {trustItems.map((item, index) => (
                            <SwiperSlide
                                key={item.text}
                                className="!h-auto !w-auto lg:!w-1/3"
                            >
                                <motion.div
                                    className="relative flex h-full min-w-max items-center justify-center gap-3 px-2 py-1 text-center md:px-4 lg:min-w-0 lg:px-8"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                >



                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[2.35rem] leading-none text-[#123b35] md:h-12 md:w-12 md:text-[2.8rem]">
                                        {item.icon}
                                    </span>
                                    <p className="whitespace-nowrap text-sm font-medium leading-tight text-[#16201f] sm:text-[15px] md:text-base">
                                        {item.text}
                                    </p>

                                    {index !== trustItems.length - 1 && (
                                        <span className="absolute right-0 top-1/2 hidden h-11 w-px -translate-y-1/2 bg-[#7f8f8a] sm:block" />
                                    )}
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.section>
    );
};
