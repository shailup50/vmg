"use client";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

// ✅ Collapsible Section Component
const CollapsibleSection = ({ title, children, isOpen, onToggle }) => {
    return (
        <div
            className={`mb-5 border-0 transition-all duration-300 cursor-pointer ${isOpen
                ? "active-collapse    "
                : " "
                }`}
            onClick={onToggle}
        >
            <button
                className="flex justify-between cursor-pointer items-center w-full text-[#5A5365] text-left focus:outline-none"
            >
                <span
                    className={`text-base md:text-lg transition-all w-[90%] duration-200 ${isOpen ? "font-medium text-black" : "font-normal"
                        }`}
                >
                    {title}
                </span>
                <div className="min-w-6">
                    {isOpen ? (
                        <GoPlus className="text-3xl transition-transform duration-200 rounded-full bg-[#339CD7] text-white rotate-45" />
                    ) : (
                        <GoPlus className="text-3xl transition-transform duration-200 p-1 rounded-full" />
                    )}
                </div>
            </button>

            {isOpen && <div className="  pb-4 md:pb-5 pt-2  text-[15px] text-[#5A5365] w-[90%]">{children}</div>}
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
        <section className="max-w-7xl mx-auto py-10 md:py-16  px-5 2xl:px-0  relative">
            <h2 className="text-2xl md:text-3xl font-medium text-black mb-10 text-center">
                Your Wellness Questions, <span className="text-[#339CD7]">Answered</span>
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
