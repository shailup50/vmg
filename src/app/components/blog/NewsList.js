"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import NewsCard from "@/app/components/blog/NewsCard";

const NewsList = ({ title, items = [], singleColumn = false }) => {

    const INITIAL_COUNT = singleColumn ? 3 : 4;
    const LOAD_COUNT = singleColumn ? 3 : 4;

    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const showMore = () => {
        setVisibleCount(prev => prev + LOAD_COUNT);
    };

    return (
        <section className={`w-full py-12 md:py-16 ${singleColumn ? "bg-[#E3F5FF]" : ""}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-0">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-medium text-center mb-8 md:mb-12"
                >
                    {title}
                </motion.h2>

                {/* Cards */}
                <div
                    className={`grid gap-y-10 gap-x-16 ${singleColumn
                        ? "grid-cols-1"
                        : "grid-cols-1 md:grid-cols-2"
                        }`}
                >
                    {items.slice(0, visibleCount).map((item, index) => (
                        <NewsCard key={index} {...item} />
                    ))}
                </div>

                {/* Show More */}
                {visibleCount < items.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-14"
                    >
                        <motion.button
                            onClick={showMore}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full border border-[#339CD7] text-[#339CD7] text-sm font-medium hover:bg-[#339CD7] hover:text-white transition"
                        >
                            Load More
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default NewsList;
