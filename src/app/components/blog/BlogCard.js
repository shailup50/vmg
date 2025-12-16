"use client"

import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
    image,
    title,
    description,
    link = "#",
    buttonText = "Read More",
    index = 0,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group bg-white  overflow-hidden transition-all duration-50 h-full"
        >
            <div className="relative h-60 md:h-72  overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                    transition={{ duration: 0.6 }}
                />

            </div>

            <div className="py-6 flex flex-col">
                <motion.h2
                    className=" text-xl font-medium line-clamp-2 h-16 text-[#1F1F1F] leading-snug group-hover:text-[#4B6F00] transition">
                    <Link href={link}>
                        {title}
                    </Link>
                </motion.h2>

                <p className="mt-3 text-[15px] text-[#1C304B] leading-relaxed grow">
                    {description}
                </p>

                {/* Button */}
                <motion.a
                    href={link}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mt-6 inline-flex items-center gap-2 w-fit px-7 py-3 rounded-full border border-[#339CD7] text-[#339CD7] text-sm font-medium group-hover:bg-[#339CD7] group-hover:text-white transition"
                >
                    {buttonText}
                    <IoIosArrowForward size={20} />
                </motion.a>
            </div>
        </motion.div>
    );
};

export default BlogCard;
