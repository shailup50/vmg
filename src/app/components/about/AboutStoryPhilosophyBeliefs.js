"use client";
import React from 'react'
import { motion } from "framer-motion";
import AnimatedButton from '../AnimatedButton'
import icon1 from "@/app/images/about/icon1.svg"
import icon2 from "@/app/images/about/icon2.svg"
import icon3 from "@/app/images/about/icon3.svg"
import Image from 'next/image'
import about_bg from "@/app/images/about/bg-banner.webp"
import leftImage from "@/app/images/about/left-img.webp"
import rightImage from "@/app/images/about/right-img.webp"
import icon4 from "@/app/images/about/icon4.svg"
import icon5 from "@/app/images/about/icon5.svg"
import icon6 from "@/app/images/about/icon6.svg"




export const About = () => {
    const title = "About Us"
    const heading = `From Chemistry to Wellness <br/> <span class="text-[#339CD7]">through the Nature</span>`
    return (
        <>
            <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between px-5 2xl:px-0 py-6 md:py-10 gap-8">
                <motion.div
                    className="w-full md:w-[60%]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <h3 className="text-base md:text-lg my-3 font-medium">{title}</h3>
                    <h2
                        className="text-2xl md:text-3xl font-semibold text-black leading-snug"
                        dangerouslySetInnerHTML={{ __html: heading }}
                    />
                </motion.div>

                <motion.div
                    className="w-full md:w-[40%] md:text-right"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <AnimatedButton className="left_auto" text="Explore VMG Active" href="#" />
                </motion.div>
            </section>

        </>
    )
}


export const Story = () => {
    const icons = [
        { icon: icon1, label: "Nature" },
        { icon: icon2, label: "Science" },
        { icon: icon3, label: "Wellbeing" },
    ];
    const smallTitle = "OUR STORY"
    const heading1 = "A Legacy of Science"
    const heading2 = "A Future of Wellness"
    const description = `For years, <b>VMG Nutraceuticals</b> has been synonymous with quality and trust in the pharmaceutical industry. Our foundation lies in rigorous research, uncompromising quality control, and a commitment to improving lives through science. <br><br>
    As lifestyles evolve, we recognized a shift people don’t just want to treat illness; they want to prevent it. That belief gave birth to <b>VMG Active</b> our next chapter — a science-backed nutraceutical line crafted to help you live daily with energy, balance, and purpose.
    `
    return (
        <>
            <main
                className="md:py-10 py-6"
                style={{
                    backgroundImage: about_bg ? `url(${about_bg.src})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 2xl:px-0 py-6 md:py-10 gap-8">

                    {/* LEFT SIDE (icons) */}
                    <motion.div
                        className="md:w-2/4 md:order-0 order-2"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <div className="flex items-center gap-12 md:gap-32 text-white">
                            {icons.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-between gap-4 text-center"
                                >
                                    <div className="w-18 h-18 flex items-center justify-between">
                                        <Image
                                            src={item.icon}
                                            alt={item.label}
                                            width={40}
                                            height={40}
                                            className="w-auto md:h-18 h-10 mx-auto"
                                        />
                                    </div>
                                    <p className="text-base md:text-lg font-light md:mt-0 -mt-6">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE (text content) */}
                    <motion.div
                        className="md:w-2/4 md:order-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <div className="bg-white/90 rounded-tl-[50px] p-6 md:p-10">
                            <p className="tracking-widest text-[15px] md:text-base my-3 font-medium mb-3">
                                {smallTitle}
                            </p>

                            <h2 className="text-2xl md:text-3xl font-semibold text-[#4B6F00] ">
                                {heading1} <br /> {heading2}
                            </h2>

                            <p
                                className="text-[#505050] pb-5 mt-5 leading-relaxed text-[15px] md:text-base"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    )
}



export const Philosophy = () => {
    const title1 = "Science You Can Trust"
    const title2 = "Nutrition You Can Feel"
    const description = `At VMG, we bring <b>pharma-grade precision</b> to the world
    of nutrition. Every VMG Active product is crafted with <b>clinically tested ingredients</b>, made in <b>GMP certified facilities</b>, and guided by experts who blend medical science with <b>natural intelligence.</b>`
    const buttonText = "Talk to Us"
    const buttonLink = "#"
    return (
        <>

            <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-10 md:py-16 gap-10">
                {/* Top small title */}
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-between"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <div className="w-full lg:w-1/2">
                        <p className="text-sm tracking-wider text-[15px] md:text-base font-medium text-black uppercase mb-3">
                            Our Philosophy
                        </p>
                    </div>
                </motion.div>

                {/* Title and Description */}
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-between"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
                            {title1} <br />
                            <span className="text-[#2AA2DE]">{title2}</span>
                        </h2>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p
                            className="mt-5 text-[#505050] md:max-w-[90%] text-[15px] md:text-base"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </div>
                </motion.div>

                {/* Button + Images */}
                <motion.div
                    className="flex mt-8 flex-col lg:flex-row items-end justify-between gap-6 md:gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    {/* Left side: button + image */}
                    <div className="w-full md:w-[40%]">
                        <div className="mb-6">
                            <AnimatedButton text={buttonText} href={buttonLink} className="left_auto" />
                        </div>
                        <div className="w-full">
                            <Image
                                src={leftImage}
                                alt="Nature"
                                className="border-b-4 md:border-b-10 border-[#5B8109] w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right side: image */}
                    <div className="w-full md:w-[60%] flex items-center justify-center gap-5">
                        <div className="w-full">
                            <Image
                                src={rightImage}
                                alt="Science"
                                className="border-b-4 md:border-b-10 border-[#5B8109] w-full h-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>


        </>
    )
}



export const Beliefs = () => {
    const beliefs = [
        {
            icon: icon4,
            title: "Quality First",
            text: "Only validated, high-grade ingredients from trusted global suppliers."
        },
        {
            icon: icon5,
            title: "Transparency Always",
            text: "No hidden blends. No hype. Just proven results."
        },
        {
            icon: icon6,
            title: "Sustainability Matters",
            text: "Responsibly sourced, eco-conscious nutrition that's good for you and the planet."
        }
    ];

    return (
        <>
            <section className="max-w-7xl mx-auto px-5 2xl:px-0">
                <motion.p
                    className="text-sm tracking-wider text-[15px] md:text-base font-medium text-black uppercase mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    Our Core Beliefs
                </motion.p>

                <motion.h2
                    className="text-2xl md:text-3xl font-semibold text-black leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: false }}
                >
                    Fundamental assumptions & <br />
                    <span className="text-[#2AA2DE]">
                        values shaping worldview & actions.
                    </span>
                </motion.h2>

                <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start justify-between gap-10">
                    {beliefs.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group w-full md:w-1/3 cursor-pointer transition-all flex gap-4 items-start"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <div className="mx-auto min-w-20 min-h-20 rounded-full bg-[#A4C75A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#93c059] group-hover:scale-105">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="font-medium text-[15px] md:text-base">{item.title}</h3>
                                <p className="text-black text-sm mt-1 leading-relaxed">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}
