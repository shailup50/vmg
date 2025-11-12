// components/TrendingSearches.js
"use client"
import { motion } from "framer-motion";

const TrendingSearches = ({ items, heading }) => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="flex flex-wrap items-center justify-center gap-4 py-4 w-7xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.h2
                className="w-full text-center text-lg md:text-xl font-semibold mb-4"
                variants={itemVariants}
            >
                {heading}
            </motion.h2>

            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`px-6 py-3 md:text-base text-[15px] text-center w-[45%] md:w-[200px] lg:shrink-0 lg:w-[18%] border cursor-pointer transition-all hover:bg-[#97D2F3] ${index === 20 ? "bg-[#97D2F3] text-black" : "bg-white text-black"
                        }`}
                >
                    {item}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default TrendingSearches;
