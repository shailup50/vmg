"use client";
import Image from "next/image";

const CommitmentItem = ({ icon, title, content }) => {
    return (
        <div className="flex items-start gap-4 mb-4">
            <div className="text-green-700 text-2xl shrink-0">
                <Image src={icon} alt={title} width={35} height={35} />
            </div>
            <div>
                <h4
                    className="font-semibold text-black text-[15px] md:text-base"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                    className="text-black text-[15px] md:text-base "
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 2xl:px-0 py-6 md:py-10 gap-8">
            {/* Left Content */}
            <div className="md:w-1/2 md:order-0 order-2">
                <h2
                    className="text-[#4B6F00] text-2xl md:text-3xl font-semibold mb-4"
                    dangerouslySetInnerHTML={{ __html: heading }}
                />
                <p
                    className="text-black mb-6 leading-relaxed text-[15px] md:text-base"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <h3
                    className="font-semibold text-lg text-black mb-4 md:mb-6"
                    dangerouslySetInnerHTML={{ __html: subHeading }}
                />
                {commitments?.map((item, index) => (
                    <CommitmentItem key={index} {...item} />
                ))}
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 md:order-0 order-1">
                <Image
                    src={imageSrc}
                    alt="Our Approach Image"
                    width={800}
                    height={400}
                    className=" shadow-sm w-full min-w-full"
                />
            </div>
        </div>
    );
};

export default ApproachSection;
