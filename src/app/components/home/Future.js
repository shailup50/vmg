"use client"
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Future = ({ heading, description, btnName, btnLink, img }) => {
    return (
        <>

            <div className="max-w-7xl mx-auto my-2 px-4 pt-10 md:pt-20 pb-6 md:px-5 lg:px-0">


                <motion.div
                    className="md:w-2/4 mx-auto text-center"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h3 className="text-[#324904] text-2xl md:text-3xl font-semibold mb-4">
                        {heading}
                    </h3>

                    <p className="text-black text-sm mt-1 mb-10 md:mb-14">
                        {description}
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Link
                            href={btnLink}
                            className="mt-4 border-2 bg-transparent border-[#4B6F00] text-[4B6F00]
                        py-3 md:py-4 px-6 md:px-10 hover:bg-[#4B6F00] hover:text-white transition"
                        >
                            {btnName}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <Image
                    src={img}
                    className="w-full h-full lg:-mt-40 -z-10 relative object-center"
                    alt="image"
                />
            </motion.div>

        </>
    )
}
