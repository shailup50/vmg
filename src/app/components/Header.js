"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
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
        if (searchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [searchOpen]);

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 2xl:px-0  py-3">

                <Link href="/" className="flex items-center">
                    <Image
                        src={logo}
                        alt="VMG Logo"
                        width={80}
                        height={50}
                        className="object-contain"
                    />
                </Link>


                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
                    {menuItems.map((item, idx) => (
                        <Link key={idx} href={item.url} className="hover:text-[#567f08]">
                            {item.name}
                        </Link>
                    ))}
                </nav>


                <div className="flex items-center space-x-5 ">
                    {/* Desktop Cart */}
                    <Link
                        href="/cart"
                        className="hidden md:flex relative font-light gap-2 text-sm items-center bg-[#567f08] text-white px-6 py-3 hover:bg-[#4c6e07] transition"
                    >
                        <span className="-ml-1"> Shopping Cart</span> <FiShoppingCart className="ml-2 text-lg" />
                        <span className="absolute top-1 right-3 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {cartCount}
                        </span>
                    </Link>

                    {/* Desktop Icons */}
                    <div className="hidden md:flex items-center space-x-4 text-gray-800 text-xl md:ms-10">
                        <CgProfile className="cursor-pointer hover:text-[#567f08]" />
                        <button
                            onClick={() => setSearchOpen((prev) => !prev)}
                            className="cursor-pointer hover:text-[#567f08]"
                        >
                            <FiSearch />
                        </button>

                    </div>
                    {searchOpen && (
                        <div
                            ref={searchRef}
                            className="absolute right-0 top-16 w-80 bg-white shadow-lg rounded-sm p-3 border border-gray-200 animate-fade-in"
                        >
                            <div className="flex items-center space-x-2">
                                <input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full border border-gray-300 text-sm rounded-sm px-3 py-2 focus:outline-none focus:border-[#567f08]"
                                />

                            </div>
                        </div>
                    )}

                    {/* Mobile Right Icons */}
                    <div className="md:hidden flex items-center space-x-4">

                        <Link href="/cart" className="relative">
                            <FiShoppingCart className="text-2xl text-gray-800" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                {cartCount}
                            </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="text-2xl text-gray-800"
                        >
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
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
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                />
            )}
        </header>
    );
}
