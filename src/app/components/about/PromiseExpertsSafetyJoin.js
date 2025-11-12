"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import greenBg from "@/app/images/about/green-bg.webp"
import logo1 from "@/app/images/about/logo1.webp"
import logo2 from "@/app/images/about/logo2.webp"
import logo3 from "@/app/images/about/logo3.webp"
import contact_bg from '@/app/images/about/closeup.webp'
import AnimatedButton from '../AnimatedButton'


export const Promise = () => {
    const title = "THE VMG ACTIVE PROMISE"
    const heading1 = "Designed for Modern Lives"
    const heading2 = "Backed by Modern Science"
    const description = "Our formulations are tailored to meet the needs of today’s fast-paced world helping you think sharper, move stronger, and feel more energetic, naturally. Each VMG Active product is designed with a specific health goal in mind."
    const bannerText1 = "This is not just"
    const bannerHeading = "SUPPLEMENTATION,"
    const bannerText2 = "it’s preventive care in its most advanced form"

    return (
        <>
            <section className="max-w-7xl mx-auto px-5 py-24 md:py-20">

                <motion.p
                    className="text-sm tracking-wider text-[15px] md:text-base font-medium text-black uppercase mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    {title}
                </motion.p>

                {/* Heading + Description */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                    viewport={{ once: false }}
                >
                    <motion.h2
                        className="text-2xl md:text-3xl font-semibold text-black leading-tight md:w-[60%]"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        {heading1} <br />
                        <span className="text-[#339CD7] font-semibold">{heading2}</span>
                    </motion.h2>

                    <motion.p
                        className="md:w-[40%] text-[#505050] text-[15px] leading-relaxed md:text-base"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* Image + Bottom Tagline */}
                <motion.div
                    className="relative mt-6 md:mt-10"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <Image
                        src={greenBg}
                        alt="Molecules"
                        className="w-full h-[250px] md:h-auto object-cover"
                    />

                    <div
                        className="
          absolute left-0 bottom-0
          bg-[linear-gradient(270deg,#A4C75A_22.74%,#339CD7_92.79%)]
          text-white p-4 md:p-8
          max-w-[85%] sm:max-w-[400px] rounded-tr-2xl md:rounded-tr-3xl
        "
                    >
                        <p className="text-sm md:text-base">{bannerText1}</p>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium uppercase">
                            {bannerHeading}
                        </h3>
                        <p className="text-sm md:text-base mt-1">{bannerText2}</p>
                    </div>
                </motion.div>
            </section>

        </>
    )
}


export const Experts = () => {
    const heading = "Led by Experts, Driven by Purpose."
    const description = "Behind every VMG formulation is a multidisciplinary team of pharmacists, nutrition scientists, and health professionals dedicated to evidence-based wellness. Our leadership continues to drive innovation with one goal — to empower individuals to take charge of their well-being through safe, science-backed nutrition."
    const bgColor = "#F9FFEB"
    return (
        <>

            <section className={`-mt-30`} style={{ backgroundColor: bgColor }}>
                <motion.div
                    className="max-w-7xl mx-auto my-2 px-4 py-10 md:py-14 md:pt-20 md:px-5 lg:px-0 mb-0"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-black text-2xl md:text-3xl font-medium mb-4 md:mb-6 text-center">
                        {heading}
                    </h2>

                    <p className="text-black text-center font-light md:w-[80%] mx-auto">
                        {description}
                    </p>
                </motion.div>
            </section>

        </>
    )
}


export const Safety = () => {
    const title = "Our Standards. Your Safety."
    const description = `VMG products are manufactured in <b>GMP and ISO certified facilities,</b> compliant with <b>FSSAI</b> and relevant regulatory guidelines. We believe in full traceability—every batch is tested for purity, potency, and safety, so you can trust what you're putting into your body.`
    const logos = [
        logo1,
        logo2,
        logo3,
    ];
    return (
        <>

            <section className="w-full">
                <div className="flex flex-wrap">
                    {/* Left Content Section */}
                    <motion.div
                        className="bg-[#E3F5FF] p-6 md:p-14 flex flex-col justify-center md:w-[55%] w-full"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="md:w-[85%] mx-auto">
                            <motion.h2
                                className="text-black text-2xl md:text-3xl font-medium mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                viewport={{ once: false }}
                            >
                                {title}
                            </motion.h2>

                            <motion.p
                                className="mt-4 leading-relaxed text-black font-light text-[15px] md:text-base"
                                dangerouslySetInnerHTML={{ __html: description }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: false }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Logo Section */}
                    <motion.div
                        className="bg-[#97D2F3] flex items-center justify-center py-10 md:w-[45%] w-full"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 w-[90%] md:w-full">
                            {logos.map((logo, index) => (
                                <motion.div
                                    key={index}
                                    className="hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: false }}
                                >
                                    <Image
                                        src={logo}
                                        alt={`certification-logo-${index}`}
                                        width={100}
                                        height={100}
                                        className="object-contain mx-auto"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

        </>
    )
}


export const Join = () => {
    return (
        <section
            className="md:py-32 py-16"
            style={{
                backgroundImage: `url(${contact_bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-end px-5 2xl:px-0 py-6 md:py-10 gap-8">
                <motion.div
                    className="ml-auto md:w-[40%]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-black text-2xl md:text-3xl font-medium mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: false }}
                    >
                        Join the Movement!
                    </motion.h2>

                    <motion.p
                        className="text-black text-[15px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Be part of a community that chooses proactive health
                    </motion.p>

                    <motion.div
                        className="py-4 md:py-8 pb-0!"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: false }}
                    >
                        <AnimatedButton text="Subscribe for wellness Tips" href="#" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

