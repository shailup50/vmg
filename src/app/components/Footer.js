"use client";
import React from "react";
import { MdOutlineFacebook } from "react-icons/md";

import { AiFillInstagram } from "react-icons/ai";


import Link from "next/link";
import logo from "@/app/images/logo.webp"
import Image from "next/image";

const Footer = () => {

    const footerData = {
        contact: {
            logo: logo,
            email: "INFO@VMGPHARMA.COM",
            phone: "+91-1234567890",
            address: " ",
            socialLinks: [
                { icon: <AiFillInstagram />, href: "https://www.instagram.com/vmgpharma", label: "Instagram" },
                { icon: <MdOutlineFacebook />, href: "https://www.facebook.com/vmgpharma", label: "Facebook" },
            ],
        },
        columns: [
            {
                title: "SHOP",
                links: [
                    { label: "SHOP ALL", href: "/shop" },
                    { label: "VIGORZEN", href: "/products/vigorzen" },
                    { label: "EXTRACARD", href: "/products/extracard" },
                    { label: "WELFUSION", href: "/products/welfusion" },
                ],
            },
            {
                title: "COMPANY",
                links: [
                    { label: "ABOUT US", href: "/about" },
                    { label: "OUR STORY", href: "/our-story" },
                    { label: "QUALITY STANDARDS", href: "/quality-standards" },
                    { label: "BLOGS", href: "/blogs" },
                ],
            },
            {
                title: "SUPPORT",
                links: [
                    { label: "SHIPPING & RETURNS", href: "/shipping-returns" },
                    { label: "PRIVACY POLICY", href: "/privacy-policy" },
                    { label: "TERMS & CONDITIONS", href: "/terms" },
                ],
            },
        ],
        disclaimer:
            'Disclaimer: "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."',
    };

    return (
        <footer className="bg-[#EAF4D6] text-[#1a1a1a] md:pt-0 pt-10">
            <div className="max-w-7xl mx-auto  px-5 2xl:px-0  flex flex-wrap md:grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8   border-[#cbd5b7]  sm:divide-x divide-[#cbd5b7]">


                <div className="space-y-4 md:pr-8 py-0 md:py-5 lg:py-10">
                    <Image
                        src={footerData.contact.logo}
                        alt="vmg logo"
                        className="w-24 mb-8"
                    />

                    <div className="flex gap-3 text-[#1a1a1a] text-2xl ">
                        {footerData.contact.socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-black transition-colors duration-200 text-[#4B6F00]"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div className="pt-4">
                        <h3 className="font-medium  tracking-wide mb-2 text-base md:text-lg uppercase">
                            Contact Info
                        </h3>
                        <p className="text-sm">EMAIL: {footerData.contact.email}</p>
                        <p className="text-sm">PHONE: {footerData.contact.phone}</p>
                        <p className="text-sm">ADDRESS: {footerData.contact.address}</p>
                    </div>
                </div>

                {footerData.columns.map((col, idx) => (
                    <div
                        key={idx}
                        className={`md:px-8 space-y-2 py-0 md:py-5 lg:py-10 md:w-full w-[45%] ${idx === footerData.columns.length - 1 ? "md:border-r-0" : ""
                            }`}
                    >
                        <h3 className="font-medium  tracking-widest mb-3 text-base md:text-lg uppercase">
                            {col.title}
                        </h3>
                        <ul className="space-y-1 text-sm">
                            {col.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-[#4B6F00] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="  border-[#cbd5b7] text-center text-xs text-black py-4 px-4">
                {footerData.disclaimer}
            </div>
        </footer>
    );
};

export default Footer;
