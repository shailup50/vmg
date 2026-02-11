"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaTimes,
    FaCaretRight,
    FaGift,
    FaSadTear,
} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Image from "next/image";
import arrowicon from "@/app/images/arrow.svg"
import { IoCloseOutline } from "react-icons/io5";


const SEGMENTS = [
    { label: "Get 2% Off", value: "2%" },
    { label: "Better Luck Next Time", value: "BL" },
    { label: "Get 3% Off", value: "3%" },
    { label: "Get 2% Off", value: "2%" },
    { label: "Better Luck Next Time", value: "BL" },
    { label: "Get 3% Off", value: "3%" },
];

export default function SpinWheelPopup() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState(null);

    const sliceAngle = 360 / SEGMENTS.length;

    // open after 10 sec
    useEffect(() => {
        const t = setTimeout(() => setOpen(true), 10000);
        return () => clearTimeout(t);
    }, []);

    const spinWheel = () => {
        if (spinning || mobile.length !== 10 || !name || !email) return;

        const index = Math.floor(Math.random() * SEGMENTS.length);
        const segmentCenter = index * sliceAngle + sliceAngle / 2;
        const finalRotation = 360 * 5 + (90 - segmentCenter);

        setSpinning(true);
        setRotation(finalRotation);

        setTimeout(() => {
            setSpinning(false);
            setResult(SEGMENTS[index]);
        }, 4000);
    };

    const isWin = result && result.value !== "BL";

    return (
        <AnimatePresence>
            {open && (

                <motion.div
                    className="fixed inset-0 z-50 bg-black/60 md:w-[80%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="fixed w-full h-full inset-0 z-0 bg-black/60 "></div>
                    {/* SLIDE MODAL */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full h-full bg-gradient-to-br from-pink-100 to-red-500 relative overflow-y-auto"
                    >
                        <div className="min-h-full w-full flex flex-col items-center justify-center p-4 py-8 relative">
                            {/* Close */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-6 right-6 text-white z-20 bg-black w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
                            >
                                <IoCloseOutline size={30} />
                            </button>

                            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center">

                                {/* LEFT – WHEEL */}
                                <div className="relative lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0">

                                    {/* POINTER */}
                                    <Image
                                        src={arrowicon}
                                        className="
                                  absolute
                                  right-[calc(50%-205px)]
                                  lg:right-[calc(50%-310px)]
                                  top-1/2
                                  -translate-y-1/2
                                  text-white
                                   md:h-full
                                   h-16
                                  z-20
                                  rotate-30
                                "
                                    />
                                    {/* <ImLocation
                                    className="
                    absolute
                    right-[calc(50%-160px)]
                    lg:right-[calc(50%-330px)]
                    top-1/2
                    -translate-y-1/2
                    text-white
                    md:text-7xl
                    text-4xl
                    z-20
                    rotate-90
                  "
                                /> */}

                                    {/* WHEEL */}
                                    <div
                                        className="
                    relative
                    w-80 h-80
                    lg:w-[32rem] lg:h-[32rem]
                    rounded-full
                    border-[6px] border-white
                  "
                                        style={{
                                            background:
                                                "conic-gradient(#ff0000 0deg 60deg,#000 60deg 120deg,#ff0000 120deg 180deg,#000 180deg 240deg,#ff0000 240deg 300deg,#000 300deg 360deg)",
                                            transform: `rotate(${rotation}deg)`,
                                            transition: spinning
                                                ? "transform 4s cubic-bezier(0.33,1,0.68,1)"
                                                : "none",
                                        }}
                                    >
                                        {/* LABELS */}
                                        {SEGMENTS.map((seg, i) => (
                                            <div
                                                key={i}
                                                className="absolute inset-0 flex items-center justify-end pr-10 lg:pr-16"
                                                style={{
                                                    transform: `rotate(${i * sliceAngle + sliceAngle / 2 - 90}deg)`,
                                                }}
                                            >
                                                <span
                                                    className="text-white text-sm lg:text-base font-medium text-center w-20 lg:w-32 leading-tight"
                                                    style={{}}
                                                >
                                                    {seg.label}
                                                </span>
                                            </div>
                                        ))}
                                        {/* CENTER REMOVED FROM HERE */}
                                    </div>

                                    {/* CENTER - STATIC OVERLAY */}
                                    <div
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    >
                                        <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center font-bold text-black text-sm lg:text-base shadow-md">
                                            SPIN
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT – CONTENT */}
                                <div className="lg:w-1/2 text-center text-white px-6 w-full ">
                                    <h2 className="text-2xl lg:text-4xl font-medium mb-2">
                                        Welcome to VMG Active
                                    </h2>

                                    <p className="text-sm lg:text-base font-light mb-6 max-w-md mx-auto">
                                        We have exciting offers for you as a New User. Enter your
                                        mobile number & spin the wheel. Play now!!
                                    </p>

                                    {!result && (
                                        <>
                                            <div className="flex bg-white rounded-md overflow-hidden md:mb-4 mb-3 max-w-md mx-auto">
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Enter Name"
                                                    className="flex-1 px-4 py-2 text-[15px] text-black outline-none w-full"
                                                />
                                            </div>

                                            <div className="flex bg-white rounded-md overflow-hidden md:mb-4 mb-3 max-w-md mx-auto">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter Email Address"
                                                    className="flex-1 px-4 text-[15px] py-2 text-black outline-none w-full"
                                                />
                                            </div>

                                            <div className="flex bg-white rounded-md overflow-hidden md:mb-4 mb-3 max-w-md mx-auto">
                                                {/* <span className="px-2 min-w-10 flex items-center text-black text-sm">
                                                +91
                                            </span> */}
                                                <input
                                                    type="tel"
                                                    maxLength={10}
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                    placeholder="Enter mobile number"
                                                    className="flex-1 px-3 text-[15px] py-2 text-black outline-none"
                                                />
                                            </div>

                                            <button
                                                onClick={spinWheel}
                                                disabled={mobile.length !== 10 || !name || !email}
                                                className="bg-black text-white py-3 rounded-full w-full max-w-md disabled:opacity-50"
                                            >
                                                Try My Luck
                                            </button>
                                        </>
                                    )}

                                    {result && (
                                        <div className="mt-6">
                                            <div className="flex justify-center mb-3">
                                                {isWin ? (
                                                    <FaGift className="text-4xl text-yellow-300" />
                                                ) : (
                                                    <FaSadTear className="text-4xl text-white" />
                                                )}
                                            </div>

                                            <h3 className="text-xl font-medium">
                                                {isWin ? "Congratulations!" : "Oops!"}
                                            </h3>

                                            <p className="mt-2 text-[15px]">
                                                {isWin
                                                    ? `You won ${result.label}`
                                                    : "Better luck next time"}
                                            </p>
                                        </div>
                                    )}

                                    <p className="text-xs font-light mt-6  opacity-90 max-w-md mx-auto">
                                        By submitting your information, you agree to our{" "}
                                        <span className="underline">Privacy Policy</span> and{" "}
                                        <span className="underline">Terms of Service</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
}