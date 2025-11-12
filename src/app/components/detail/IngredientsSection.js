"use client";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

export default function IngredientsSection({
    title = "Our Ingredients",
    image = "",
    ingredients = [],
    references,
}) {
    if (!ingredients?.length) return null; // hide section if no data

    return (
        <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-10 md:py-14">

            <h2 className="text-2xl md:text-3xl font-medium text-center mb-10">
                {title}
            </h2>

            <div className="flex md:flex-nowrap flex-wrap gap-8 items-center">
                {/* LEFT IMAGE */}
                {image && (
                    <div className="flex justify-center w-full md:w-[40%]">
                        <div className="w-full">
                            <Image
                                src={image}
                                alt={title}
                                width={1000}
                                height={1000}
                                className="rounded-lg w-full h-full"
                            />
                        </div>
                    </div>
                )}

                {/* RIGHT INGREDIENTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:w-[60%]">
                    {ingredients.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col gap-2   ${item.highlightColor
                                ? item.highlightColor
                                : "from-blue-50 to-transparent"
                                } p-4 `}
                        >
                            <div className="flex items-center gap-2 py-1 px-3 rounded-4xl h-full"
                                style={{ background: "linear-gradient(89.25deg, #F7F9EC 29%, #B5DBFC 100%)" }}>
                                <span className="text-[#339CD7] text-lg"><MdCheckCircle /></span>
                                <h3 className="font-semibold text-[#00026E] text-[15px] md:text-base">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-[#505050] text-sm md:text-[15px] leading-6 mt-3 h-full">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* REFERENCES SECTION */}
            {references && (
                <div className="bg-[#F7F7F7] mt-4 md:mt-14 p-6 rounded-xl text-center max-w-5xl mx-auto">
                    <p className="text-[#262626] md:text-base text-sm mb-2 md:w-[50%] mx-auto">
                        {references.heading}
                    </p>

                    <p
                        className="space-y-1 text-xs md:text-[13px] text-[#262626] mt-4 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: references.description }}
                    />

                </div>
            )}
        </section>
    );
}
