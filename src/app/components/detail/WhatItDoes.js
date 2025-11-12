"use client";
import Image from "next/image";

export default function WhatItDoes({ title = "What It Does", items = [] }) {
    // ✅ If no data, return nothing (section hidden)
    if (!items || items.length === 0) return null;

    return (
        <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-5 md:py-10">
            <h2 className="text-center text-2xl md:text-3xl font-medium mb-10 md:mb-12">
                {title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="group cursor-pointer transition-all hover:scale-[1.03]"
                    >
                        {/* Icon circle */}
                        <div
                            className="mx-auto h-22 w-22 md:w-28 md:h-28 rounded-full bg-[#A4C75A] flex items-center justify-center
              transition-all duration-300 group-hover:bg-[#93c059]"
                        >
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={50}
                                height={50}
                                className="transition-transform duration-300 group-hover:scale-110 h-10 md:h-14"
                            />
                        </div>

                        <h3 className="mt-4 font-medium text-base md:text-xl md:w-[70%] mx-auto  text-[#505050]">{item.title}</h3>

                        <p className="text-gray-700 text-[12px] md:text-[13px] mt-2 leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
