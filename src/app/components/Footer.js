"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import logo from "@/app/images/logo.webp"
import Image from "next/image";

import flipcart from "@/app/images/flipkart-logo.svg"
import amazon from "@/app/images/amazon-logo.svg"
import mg from "@/app/images/1mg_logo_header.svg"
import max1 from "@/app/images/Max-Pharmacy-logo.png"
import { AiOutlineMail } from "react-icons/ai";




const Footer = () => {

    const shopLinks = [
        { name: "Shop All", url: "/shop" },
        { name: "Vigorzen", url: "/vigorzen" },
        { name: "ExtraCard", url: "/extracard" },
        { name: "WelFusion", url: "/welfusion" },
    ];

    const companyLinks = [
        { name: "About Us", url: "/about-us" },
        { name: "Our Story", url: "/our-story" },
        { name: "Quality Standards", url: "/quality-standards" },
        { name: "Blogs", url: "/blogs" },
    ];

    const supportLinks = [
        { name: "Shipping & Returns", url: "/shipping-returns" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms & Conditions", url: "/terms-conditions" },
    ];

    const contactInfo = [
        { icon: <FaPhoneAlt className="text-[#5B8109] text-lg" />, text: "+91-1234567890" },
        { icon: <MdEmail className="text-[#5B8109] text-lg" />, text: "Info@Vmgpharma.com" },
        {
            icon: <MdLocationOn className="text-[#5B8109] mt-1 text-xl" />,
            text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
        },
    ];

    const socialLinks = [
        { icon: <FaFacebookF />, url: "https://facebook.com" },
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
        { icon: <FaInstagram />, url: "https://instagram.com" },
    ];

    const description = "VMG Active, a division of VMG Pharmaceuticals Pvt. Ltd."

    const disclaimer = 'Disclaimer: "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."'

    return (
        <>
            {/* <footer className="bg-[#EAF4D6] text-[#1a1a1a] md:pt-0 pt-10">
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
        </footer> */}

            <section className="top-footer w-full bg-[#a4c75a] py-4 md:py-5">
                <div className="max-w-7xl mx-auto justify-center px-6 flex xl:flex-nowrap flex-wrap gap-6 md:gap-10">
                    <main>
                        <h3 className="text-white  mb-3 text-lg md:text-xl font-medium text-center">Also Available On</h3>
                        <div className="flex gap-4 md:gap-6 justify-center items-center">
                            <Image src={flipcart} alt="flipcart" className="w-9 object-contain" />
                            <Image src={amazon} alt="amazon" className="w-11 object-contain" />
                            <Image src={mg} alt="1mg" className="w-28 object-contain" />
                            <Image src={max1} alt="1mg" className="w-36 object-contain" />
                        </div>
                    </main>
                </div>
            </section>

            <footer className="w-full bg-white py-10 md:py-14">
                <div className="max-w-7xl mx-auto px-6 flex xl:flex-nowrap flex-wrap gap-6 md:gap-10 text-sm">

                    {/* LOGO + DESCRIPTION */}
                    <div className="md:min-w-[20%]">
                        <Image
                            src={logo}
                            alt="VMG Logo"
                            width={120}
                            height={50}
                            className="object-contain"
                        />
                        <p className="text-black mt-4">
                            {description}
                        </p>
                        {/* <h3 className="font-semibold mb-3 mt-6 md:mb-4 text-[#0E0F1D]">SOCIAL MEDIA</h3> */}
                        {/* <div className="flex items-center gap-4 text-[#5B8109] text-lg mt-4">
                            {socialLinks.map((item, i) => (
                                <Link key={i} href={item.url} target="_blank" className="hover:scale-110 transition">
                                    {item.icon}
                                </Link>
                            ))}
                        </div> */}
                    </div>

                    <div className="md:min-w-[20%] flex gap-4 md:gap-10">
                        <div className="min-w-[65%] md:min-w-auto">
                            <h3 className="font-semibold mb-3 md:mb-6 text-[#0E0F1D]">SHOP</h3>
                            <ul className="space-y-2 md:space-y-3 text-gray-600">
                                {shopLinks.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.url} className="hover:text-[#78934A] transition text-black">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="min-w-[60%] md:min-w-auto">
                            <h3 className="font-semibold mb-3 md:mb-6 text-[#0E0F1D]">COMPANY</h3>
                            <ul className="space-y-2 md:space-y-3 text-gray-600">
                                {companyLinks.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.url} className="hover:text-[#78934A] transition text-black">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-5  md:gap-10 md:min-w-[35%]">
                        <div className="min-w-[40%]  md:min-w-[40%]">
                            <h3 className="font-semibold mb-3 md:mb-6 text-[#0E0F1D]">SUPPORT</h3>
                            <ul className="space-y-2 md:space-y-3 text-gray-600">
                                {supportLinks.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.url} className="hover:text-[#78934A] transition text-black">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="min-w-[60%] md:min-w-[50%]">
                            <h3 className="font-semibold mb-3 md:mb-6 text-[#0E0F1D]">CONTACT</h3>
                            <ul className="space-y-2 md:space-y-3 text-gray-600">
                                {contactInfo.map((item, i) => (
                                    <li key={i} className="flex gap-2 items-start text-black">
                                        <span className="min-w-5">{item.icon}</span> <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        {/* <main>
                            <h3 className="font-semibold mb-2 md:mb-2 text-[#0E0F1D] text-sm">SUPPORT YOUR INBOX</h3>
                            <p className="text-black text-[13px] mb-4">
                                Your wellbeing check with specially curated tips, recipes and lifestyle support.


                            </p>
                            <div className="flex items-center gap-4 text-[#5B8109] text-lg">
                                <form className="flex justify-between gap-2 items-center border-b-2 w-full">
                                    <input className="outline-0 text-sm text-black" type="email" placeholder="Enter your email" />
                                    <button type="submit" className="text-2xl cursor-pointer"><AiOutlineMail /></button>
                                </form>
                            </div>
                        </main> */}
                        <h3 className="font-semibold mb-3 mt-6 md:mb-4 text-[#0E0F1D]">SOCIAL MEDIA</h3>
                        <div className="flex items-center gap-4 text-[#5B8109] text-lg">
                            {socialLinks.map((item, i) => (
                                <Link key={i} href={item.url} target="_blank" className="hover:scale-110 transition">
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

            <main className="bg-[#78934A] text-white py-3">
                <div className="max-w-7xl mx-auto text-center px-5 2xl:px-0">
                    <p className="text-[10px] md:text-[12px] font-light ">{disclaimer}</p>
                </div>
            </main>


        </>
    );
};

export default Footer;
