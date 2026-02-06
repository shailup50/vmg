"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CommitmentItem = ({ icon, title, content }) => {
    return (
        <div className="flex items-start gap-4 mb-4">
            <div className="text-green-700 text-2xl shrink-0">
                <Image src={icon} alt={title} width={35} height={35} />
            </div>
            <div>
                <h4
                    className="font-semibold text-black md:text-[15px] "
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                    className=" text-[15px] text-[#505050]"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
};

const ApproachSection = ({
    heading,
    description,
    subHeading,
    commitments,
    imageSrc,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 2xl:px-0 py-6 md:py-10 gap-8"
        >

            <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                className="md:w-1/2 md:order-0 order-2"
            >
                <h2
                    className="text-black text-2xl md:text-3xl font-medium mb-4"
                    dangerouslySetInnerHTML={{ __html: heading }}
                />
                <p
                    className="text-[#505050] mb-6 leading-relaxed  text-[15px]"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <h3
                    className="font-medium text-lg text-black mb-4 md:mb-6"
                    dangerouslySetInnerHTML={{ __html: subHeading }}
                />


                <motion.div
                    initial="hidden"
                    whileInView="show"
                    transition={{ staggerChildren: 0.15 }}
                    viewport={{ once: false }}

                >
                    {commitments?.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                show: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <CommitmentItem {...item} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                className="md:w-1/2 md:order-0 order-1"
            >
                <Image
                    src={imageSrc}
                    alt="Our Approach Image"
                    width={800}
                    height={400}
                    className="shadow-sm w-full min-w-full rounded-lg"
                />
            </motion.div>
        </motion.div>
    );
};

export default ApproachSection;
