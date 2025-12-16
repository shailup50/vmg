import { motion } from "framer-motion";
import Link from "next/link";

link: "#"
const NewsCard = ({ image, title, meta, link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="flex gap-6 items-center group border-t border-[#B8B8B8] pt-6"
        >
            {/* Image */}
            <div className="w-36 h-28 md:w-40 md:h-32 rounded-sm overflow-hidden shrink-0">
                <Link href={link}>
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        // whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                    />
                </Link>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <Link href={link}>
                    <h2 className="text-[17px] md:text-lg mb-2  text-[#121212] leading-snug group-hover:text-[#4B6F00] transition">
                        {title}
                    </h2>
                </Link>
                <p className="text-sm text-gray-500">{meta}</p>
            </div>
        </motion.div>
    );
};

export default NewsCard;
