"use client";
import Image from "next/image";

export default function IdealFor({
    title = "Who It’s For",
    subtitle = "",
    image,
    data = [],
}) {
    if (!data || data.length === 0) return null;

    return (
        <section className="bg-[#F2F9E6] ">
            <div className="max-w-7xl mx-auto px-5 2xl:px-0 py-10 md:py-14 bg-[#F2F9E6]">


                <div className="flex flex-col md:flex-row items-end gap-12">
                    {/* LEFT IMAGE */}
                    <div className="w-full md:w-[40%]">
                        <h2 className="text-2xl md:text-3xl font-medium mb-2 md:text-left text-center" >{title}</h2>
                        <p className="text-black mb-10 md:text-left text-center">{subtitle}</p>
                        {image && (
                            <Image
                                src={image}
                                alt="who it's for"
                                width={600}
                                height={400}
                                className="rounded-xl rounded-tr-4xl object-cover w-full "
                            />
                        )}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-0 ">
                        {data.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 relative">

                                {/* ICON + Vertical line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full border-2 border-[#A4C75A] flex items-center justify-center">
                                        <Image src={item.icon} alt="icon" width={22} height={22} className="h-8" />
                                    </div>

                                    {/* green line only between items */}
                                    {index < data.length - 1 && (
                                        <div className="w-0.5 h-10 md:h-16 bg-[#A4C75A]"></div>
                                    )}
                                </div>

                                <p className="text-black leading-6 md:w-[70%] md:text-base text-[15px]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
