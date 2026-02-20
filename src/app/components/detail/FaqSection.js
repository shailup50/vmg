"use client";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

export default function FaqSection({ title = "FAQs", data = [] }) {
    const [openIndex, setOpenIndex] = useState(0); // first open by default

    if (!data || data.length === 0) return null;

    const toggleFAQ = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    return (
        <section className="max-w-6xl mx-auto px-5 py-10 md:py-16 scroll-mt-[70px]" id="faq">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 md:text-left text-center md:mb-10">{title}</h2>

            <div className="space-y-2">
                {data.map((item, idx) => {
                    const isOpen = idx === openIndex;
                    const number = String(idx + 1).padStart(2, "0");

                    return (
                        <div
                            key={idx}
                            className="  py-3 cursor-pointer"
                            onClick={() => toggleFAQ(idx)}
                        >
                            <div className="flex items-center justify-between">
                                {/* LEFT NUMBER + QUESTION */}
                                <div className="flex items-center gap-8">
                                    <p className="text-xl md:text-2xl font-medium text-[#5A5365]">
                                        {number}
                                    </p>
                                    <p className="text-base md:text-lg">
                                        {item.question}
                                    </p>
                                </div>

                                {/* ICON */}
                                <div className="text-2xl bg-[#339CD7] text-white min-w-10 min-h-10 rounded-full flex items-center justify-center">
                                    {isOpen ? <FiX /> : <FiPlus />}
                                </div>
                            </div>

                            {/* ANSWER SECTION WITH SMOOTH TRANSITION */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 mt-4" : "max-h-0"
                                    }`}
                            >
                                <p className="text-[#5A5365] leading-6 pl-10 md:pl-[60px] text-[15px] md:text-base">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
