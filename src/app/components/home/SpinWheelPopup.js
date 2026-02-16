"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGift,
    FaSadTear,
} from "react-icons/fa";
import Image from "next/image";
import spinwheel from "@/app/images/shape1.svg"
import spinwheel1 from "@/app/images/shape2.svg"

import { IoCloseOutline } from "react-icons/io5";



const SEGMENTS = [
    { label: "Get 15% Off", value: "15%" },
    { label: "Better Luck Next Time", value: "BL" },
    { label: "Get 10% Off", value: "10%" },
    { label: "Get 5% Off", value: "5%" },
    { label: "Better Luck Next Time", value: "BL" },
    { label: "Get 20% Off", value: "20%" },
];

export default function SpinWheelPopup() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState(null);

    const sliceAngle = 360 / SEGMENTS.length;

    // open after 5 sec
    useEffect(() => {
        const t = setTimeout(() => setOpen(true), 5000);
        return () => clearTimeout(t);
    }, []);

    const spinWheel = () => {
        if (spinning || !name || !email) return;

        const index = Math.floor(Math.random() * SEGMENTS.length);

        const segmentCenter = index * sliceAngle + sliceAngle / 2;
        const finalRotation = 360 * 5 - segmentCenter;

        setSpinning(true);
        setRotation(finalRotation);

        setTimeout(() => {
            setSpinning(false);
            setResult(SEGMENTS[index]);
        }, 4000);
    };

    const isWin = result && result.value !== "BL";

    // Helper to create pie slice path
    const getCoordinatesForPercent = (percent) => {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                    {/* BACKDROP - Fade in/out */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                        className="fixed inset-0 bg-black/60 z-0 pointer-events-auto"
                    // onClick={() => setOpen(false)}
                    />

                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
                        className="fixed top-0 left-0 h-full w-full md:w-auto z-10 pointer-events-auto flex items-center"
                    >

                        <div
                            className="relative w-full h-full md:w-[900px] md:h-full bg-white md:rounded-r-2xl overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[linear-gradient(180deg,#FFE3E3_0%,#339CD7_70%)] md:bg-[linear-gradient(90deg,#FFE3E3_0%,#339CD7_100%)]"
                        >
                            {/* CLOSE BUTTON - Separate shape */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 z-50 text-white bg-black w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-black/80 transition-transform hover:scale-105"
                            >
                                <IoCloseOutline size={28} />
                            </button>

                            {/* LEFT - WHEEL SECTION */}
                            <div className="relative w-full md:w-1/2 min-h-[350px] md:h-full flex items-center justify-center overflow-hidden shrink-0">

                                <div className="relative flex items-center justify-center">

                                    <div className="relative w-[330px] h-[330px] md:w-[600px] md:h-[600px] md:-ml-[300px] flex-shrink-0 border-[12px] md:border-[16px] border-white rounded-full shadow-lg z-0">

                                        <div className="absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2 -z-1 flex items-center justify-center ">
                                            <Image src={spinwheel} alt="pointer" width={100} height={100} className="w-full md:h-full object-contain drop-shadow-lg min-h-34 h-34 md:min-h-40 md:h-40" />
                                        </div>
                                        <div className="absolute top-[50.5%] -right-6 md:-right-10 -translate-y-1/2 z-20 flex items-center justify-center ">
                                            <Image src={spinwheel1} alt="pointer" width={100} height={100} className="w-full md:h-full object-contain drop-shadow-lg min-h-26 h-26 md:min-h-34 md:h-34" />
                                        </div>

                                        {/* SVG WHEEL */}
                                        <svg
                                            viewBox="-1 -1 2 2"
                                            style={{
                                                transform: `rotate(${rotation}deg)`,
                                                transition: spinning ? "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
                                                width: "100%",
                                                height: "100%",
                                                overflow: "visible"
                                            }}
                                        >
                                            <defs>
                                                <linearGradient id="sliceGradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(2.15)">
                                                    <stop offset="48.15%" stopColor="#F2F2F2" />
                                                    <stop offset="98.13%" stopColor="#C7C3C3" />
                                                </linearGradient>
                                            </defs>

                                            {SEGMENTS.map((seg, i) => {
                                                const startAngle = i * sliceAngle;
                                                const endAngle = (i + 1) * sliceAngle;
                                                const start = startAngle / 360;
                                                const end = endAngle / 360;
                                                const [startX, startY] = getCoordinatesForPercent(start);
                                                const [endX, endY] = getCoordinatesForPercent(end);
                                                const largeArcFlag = sliceAngle > 180 ? 1 : 0;
                                                const pathData = [
                                                    `M 0 0`,
                                                    `L ${startX} ${startY}`,
                                                    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                                                    `Z`
                                                ].join(" ");

                                                return (
                                                    <g key={i}>
                                                        <path
                                                            d={pathData}
                                                            fill={i % 2 === 0 ? "#339CD7" : "url(#sliceGradient)"}
                                                            stroke="none"
                                                            strokeWidth="0"
                                                        />
                                                    </g>
                                                );
                                            })}
                                        </svg>

                                        {/* LABELS OVERLAY */}
                                        <div
                                            className="absolute inset-0 pointer-events-none rounded-full"
                                            style={{
                                                transform: `rotate(${rotation}deg)`,
                                                transition: spinning ? "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
                                            }}
                                        >
                                            {SEGMENTS.map((seg, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute inset-0 flex items-center justify-end pr-10 lg:pr-16"
                                                    style={{
                                                        transform: `rotate(${i * sliceAngle + sliceAngle / 2}deg)`,
                                                    }}
                                                >
                                                    <span
                                                        className={`text-[14px] md:text-base lg:text-lg font-medium text-center w-20 lg:w-32 leading-tight ${i % 2 === 0 ? "text-white" : "text-black"}`}
                                                    >
                                                        {seg.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CENTER KNOB */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-md z-10" />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT - FORM SECTION */}
                            <div className="w-full md:w-1/2 p-6 md:p-12 md:pt-12 pt-4 md:ps-0 flex flex-col justify-center text-center md:text-left z-20">
                                <h2 className="text-5xl md:text-7xl font-semibold text-white mb-2 md:mb-4 leading-tight">
                                    Welcome <span className="text-3xl md:text-5xl font-normal block">to VMG Active</span>
                                </h2>
                                <p className="text-white text-center text-[15px] md:text-lg mb-8 font-light">
                                    We have exciting offers for you as a New User. Enter your details & spin the wheel. Play now!!
                                </p>

                                {!result ? (
                                    <div className="space-y-4 w-full max-w-md mx-auto md:mx-0">
                                        <input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full px-5 py-3 md:py-4 rounded-lg border-none outline-none text-black text-sm md:text-base shadow-inner
                                            bg-white
                                            font-light
                                            placeholder:text-[#B6B6B6]"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-5 py-3 md:py-4 rounded-lg border-none outline-none text-black text-sm md:text-base shadow-inner
                                            bg-white
                                            font-light
                                            placeholder:text-[#B6B6B6]"
                                        />




                                        <button
                                            onClick={spinWheel}
                                            disabled={!name || !email}
                                            className="w-full bg-black hover:bg-[#1d2939] text-white font-normal py-3 md:py-4 rounded-lg transition-colors shadow-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            Try Your Luck
                                        </button>
                                    </div>
                                ) : (
                                    <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-center animate-in fade-in zoom-in duration-300 shadow-xl">
                                        <div className="flex justify-center mb-4">
                                            {isWin ? (
                                                <FaGift className="text-5xl md:text-6xl text-yellow-300 drop-shadow-lg" />
                                            ) : (
                                                <FaSadTear className="text-5xl md:text-6xl text-gray-200 drop-shadow-lg" />
                                            )}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                                            {isWin ? "Congratulations!" : "Oops!"}
                                        </h3>
                                        <p className="text-white text-lg md:text-xl font-medium">
                                            {isWin ? `You won ${result.label}!` : "Better luck next time."}
                                        </p>
                                        {/* <p className="text-sm text-white/70 mt-4">
                                            Check your email for details.
                                        </p> */}
                                    </div>
                                )}

                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
