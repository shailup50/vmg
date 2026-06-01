"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { mediaNewsData } from "@/app/data/mediaNewsData";


export const NewsLogo = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 28, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.45, ease: "easeOut" },
        },
    };
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-10 md:py-16 px-5 2xl:px-0 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-medium text-black mb-8 md:mb-10 text-center"
                >
                    Media <span className="text-[#339CD7]">News</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5"
                >
                    {mediaNewsData.map((item, index) => (
                        <motion.div
                            key={item.alt}
                            variants={itemVariants}
                            whileHover={{ y: -6, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="group"
                        >
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open media news ${index + 1}`}
                                className="flex h-24 sm:h-28 md:h-32 items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 group-hover:border-[#339CD7]/50 group-hover:shadow-md"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    className="max-h-14 sm:max-h-16 md:max-h-20 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="text-center">
                    <Link href="/media" className="bg-[#567f08] rounded-full hover:bg-[#4c6e07] cursor-pointer py-3 px-12 text-white inline-block mt-8">
                        View Media
                    </Link>
                </div>
            </div>
        </section>
    );
};
