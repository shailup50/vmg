"use client";

import Link from "next/link";
import { useState } from "react";

const tabs = [
    { name: "Description", href: "#description" },
    { name: "Ingredients", href: "#ingredients" },
    { name: "How to take", href: "#how-to-take" },
    { name: "FAQ", href: "#faq" },
    { name: "Lab Report", href: "#lab-report" },
];

export default function ProductTab() {
    const [active, setActive] = useState("Description");

    const handleScroll = (id, name) => {
        setActive(name);

        const el = document.getElementById(id);
        if (!el) return;

        const headerOffset = 100; // 👈 your required offset

        const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full border-b border-gray-300 mb-6">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 px-2 md:px-0">
                {tabs.map((tab, index) => (
                    <li key={index} className="relative">
                        <Link
                            href={tab.href}
                            onClick={() => handleScroll(tab.id, tab.name)}
                            className={`block px-1 py-2 text-sm md:text-[15px] transition-all duration-300
                ${active === tab.name
                                    ? "text-black font-medium"
                                    : "text-gray-600 hover:text-black"
                                }`}
                        >
                            {tab.name}
                        </Link>

                        {/* Bottom Border */}
                        <span
                            className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300
                ${active === tab.name
                                    ? "bg-[#339CD7]"
                                    : "bg-transparent"
                                }`}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}