"use client";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

// ✅ Collapsible Section Component
const CollapsibleSection = ({ title, children, isOpen, onToggle }) => {
    return (
        <div
            className={`mb-4 border transition-all duration-300 cursor-pointer ${isOpen
                ? "active-collapse bg-[#EAF4D6] border-[#EAF4D6]"
                : "border-gray-200 bg-white"
                }`}
            onClick={onToggle}
        >
            <button
                className="flex justify-between cursor-pointer items-center w-full p-4 md:p-6 text-left focus:outline-none"
            >
                <span
                    className={`text-base md:text-lg transition-all duration-200 ${isOpen ? "font-medium" : "font-normal"
                        }`}
                >
                    {title}
                </span>
                {isOpen ? (
                    <BsChevronUp className="text-xl transition-transform duration-200" />
                ) : (
                    <BsChevronDown className="text-xl transition-transform duration-200" />
                )}
            </button>

            {isOpen && <div className="md:p-6 p-4 -mt-1 md:-mt-3 pb-5 md:pb-7 pt-0 md:text-base text-[15px] ">{children}</div>}
        </div>
    );
};

// ✅ Wellness FAQ Component (Parent)
const Faqs = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {

        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto py-10 md:py-16 pt-10! px-5 2xl:px-0  relative">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#3a4f1d] mb-10 text-center">
                Your Wellness Questions, Answered
            </h2>

            {faqData.map((item, index) => (
                <CollapsibleSection
                    key={index}
                    title={item.question}
                    isOpen={activeIndex === index}
                    onToggle={() => handleToggle(index)}
                >
                    <p>{item.answer}</p>
                </CollapsibleSection>
            ))}
        </section>
    );
};

export default Faqs;
