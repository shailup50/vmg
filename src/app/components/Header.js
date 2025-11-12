"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import logo from "@/app/images/logo.webp"

const menuItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "Our Story", url: "/our-story" },
    { name: "Why VMG", url: "/why-vmg" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact us", url: "/contact" },
];

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef(null);
    const cartCount = 3;

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
            }
        }

        document.addEventListener("pointerdown", handleClickOutside);

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, []);

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-[#F8F8F8] shadow-sm sticky top-0 z-50"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 2xl:px-0 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="VMG Logo" width={80} height={50} className="object-contain" />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
                    <AnimatePresence>
                        {menuItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link href={item.url} className="hover:text-[#567f08]">
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </nav>

                {/* Right Icons */}
                <div className="flex items-center space-x-5 ">
                    {/* Desktop Cart */}
                    <Link
                        href="/cart"
                        className="hidden md:flex relative font-light gap-2 text-sm items-center bg-[#567f08] text-white px-7 py-1.5 pr-3 hover:bg-[#4c6e07] transition rounded-4xl"
                    >
                        <span className="-ml-1">Shopping Cart</span>
                        <span className="text-lg text-[#567f08] h-8 w-8 bg-white rounded-full flex items-center justify-center">
                            <FiShoppingCart className="text-[15px]" />
                        </span>
                        <span className="absolute top-0 right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {cartCount}
                        </span>
                    </Link>

                    {/* Desktop Icons */}
                    <div className="hidden md:flex items-center space-x-3 text-gray-800 text-xl md:ms-2">
                        <CgProfile className="cursor-pointer hover:text-[#567f08] text-black" />
                        <FiHeart className="cursor-pointer hover:text-[#567f08] text-black" />

                        <button
                            onClick={() => setSearchOpen((prev) => !prev)}
                            className="cursor-pointer hover:text-[#567f08] text-black"
                        >
                            <FiSearch />
                        </button>
                    </div>

                    {/* Search Box Animation */}
                    <AnimatePresence>
                        {searchOpen && (
                            <motion.div
                                ref={searchRef}
                                initial={{ opacity: 0, scale: 0.9, y: -5 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 top-16 w-80 bg-white shadow-lg rounded-sm p-3 border border-gray-200"
                            >
                                <input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full border border-gray-300 text-sm rounded-sm px-3 py-2 focus:outline-none focus:border-[#567f08]"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile Right Icons */}
                    <div className="md:hidden flex items-center space-x-6">
                        <Link href="/cart" className="relative">
                            <FiShoppingCart className="text-xl text-gray-800" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                {cartCount}
                            </span>
                        </Link>

                        <CgProfile className="cursor-pointer text-xl hover:text-[#567f08]" />
                        <FiHeart className="cursor-pointer -ml-2 text-xl hover:text-[#567f08]" />

                        <button onClick={() => setSidebarOpen(true)} className="text-2xl text-gray-800">
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.25 }}
                            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50"
                        >
                            <div className="flex items-center justify-between px-4 py-3 border-b">
                                <h2 className="text-lg font-semibold">Menu</h2>
                                <button onClick={() => setSidebarOpen(false)} className="text-2xl">
                                    <FiX />
                                </button>
                            </div>

                            <nav className="flex flex-col space-y-4 mt-6 px-6 text-gray-800 font-medium">
                                {menuItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.url}
                                        onClick={() => setSidebarOpen(false)}
                                        className="hover:text-[#567f08]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>

                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                            className="fixed inset-0 bg-black z-40"
                        />
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
