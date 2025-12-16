// components/HeroSlide.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "../AnimatedButton";

export default function HeroSlide({
    imageSrc,
    title,
    subtitle,
    info,
    buttonText,
    alignment = "left",
    maxWidth = "max-w-3xl",
    position = "center",
    text,
    href = "#"
}) {
    const alignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };

    const contentAlignment = alignmentClasses[alignment] || alignmentClasses.left;

    return (
        <motion.div
            key={imageSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] flex items-center justify-center bg-black/60 overflow-hidden"
        >

            <Image
                src={imageSrc}
                fill
                className="absolute inset-0 z-0 object-cover"
                alt="Slide Background"
            />

            <div className="absolute inset-0 bg-black/10 z-10" />

            {/* Content Container */}
            <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                className={`relative z-20 w-full px-6 flex ${position === "center"
                    ? "justify-center"
                    : position === "end"
                        ? "justify-end"
                        : "justify-start"
                    } max-w-7xl`}
            >
                <div className={`w-full ${maxWidth} flex flex-col gap-4 ${contentAlignment}`}>
                    <h1
                        className="text-5xl md:6xl lg:text-[80px] leading-none font2 font-light text-white"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    {subtitle && (
                        <motion.p
                            key={subtitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl mb-2 md:mb-4 text-black"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {info && (
                        <motion.p
                            key={info}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-sm md:text-[15px] text-black lg:w-[70%]"
                        >
                            {info}
                        </motion.p>
                    )}

                    {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="bg-[#5B8109] hover:bg-[#4B6F00] rounded-full lg:text-base text-[15px] py-3 px-7 lg:px-12 text-white mt-1 inline-block"
                    >
                        {buttonText}
                    </motion.button> */}
                    <AnimatedButton text={text} href={href} />
                </div>
            </motion.div>
        </motion.div>
    );
}
