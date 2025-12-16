"use client"
import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter({
    title = "Get Your Daily Dose of Wellness",
    subtitle = "Stay informed about new products, exclusive offers, and expert health tips",
    placeholder = "Enter Your Email",
    buttonText = "Subscribe",
    backgroundImage = "",
}) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");



    return (
        <section
            className="relative py-16 px-6 text-center bg-[#F5F5F7] my-4 md:my-6 overflow-hidden"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.h2
                    className="text-[#324904] text-2xl md:text-3xl font-medium mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="text-black uppercase text-base md:text-lg font-light mb-8 tracking-wide md:w-[60%] mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {subtitle}
                </motion.p>

                <motion.form
                    className="flex flex-row items-center justify-center gap-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        className="w-full sm:w-2/3 border rounded-tl-full rounded-bl-full border-black py-2 md:py-3 px-4 text-black focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-[200px] sm:w-auto rounded-tr-full rounded-br-full bg-transparent cursor-pointer border border-s-0 text-black border-black py-2 md:py-3 px-4 hover:bg-[#567f08] hover:text-white transition-colors"
                    >
                        {buttonText}
                    </button>
                </motion.form>

                {status && (
                    <motion.p
                        className="mt-4 text-sm text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {status}
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
}
