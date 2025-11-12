"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function AnimatedButton({
    text = "Click Here",
    href = "#",
    className = "",
}) {
    return (
        <Link href={href}>
            <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={`relative flex items-center gap-4 bg-[#2AA2DE] text-white cursor-pointer font-medium px-6 md:px-8 py-2 rounded-full overflow-hidden ${className}`}
            >
                {/* FILL background */}
                <motion.span
                    className="absolute inset-0 bg-[#4B6F00]"
                    variants={{
                        rest: { x: "-100%" },
                        hover: { x: 0 },
                    }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                />

                {/* Text */}
                <span className="relative z-10 text-[15px] md:text-base">{text}</span>

                {/* Arrow Circle */}
                <motion.span
                    className="relative z-10 flex items-center justify-center bg-white text-[#339CD7] rounded-full w-10 h-10 border"
                    variants={{
                        rest: { x: 0 },
                        hover: { x: 5 },
                    }}
                    transition={{ type: "spring", stiffness: 160, damping: 12 }}
                >
                    <FiChevronRight size={20} />
                </motion.span>
            </motion.button>
        </Link>
    );
}
