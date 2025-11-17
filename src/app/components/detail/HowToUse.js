"use client";
import Image from "next/image";

export default function HowToUse({ title = "How to Use", steps = [], image }) {

    if (!steps || steps.length === 0) return null;

    return (
        <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-14">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
                <h2 className="text-2xl md:text-3xl font-medium mb-0 md:mb-6 md:text-left text-center md:mt-0 -mt-4 md:hidden block">{title}</h2>

                <div className="w-full md:w-1/2 space-y-8 md:order-0 order-2">
                    <h2 className="text-2xl md:text-3xl font-medium mb-8 md:mb-16 md:text-left text-center md:mt-0 -mt-4 hidden md:block">{title}</h2>
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-0">

                            <div className="min-w-16 min-h-16 md:min-w-20 md:min-h-20 rounded-full bg-[#B5DBFC] flex items-center justify-center text-[15px] md:text-base text-black font-medium">
                                Step {index + 1}
                            </div>

                            <div className="text-black relative -z-10  -ml-10 py-4 md:py-8 px-8 md:px-12 pl-16! bg-[#FAFCFF] leading-relaxed border-2 border-[#CBE6FF] rounded-2xl">
                                <p className="font-normal md:text-base text-sm" dangerouslySetInnerHTML={{ __html: step.info }} />

                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE: Image */}
                {image && (
                    <div className="w-full md:w-1/2">
                        <Image
                            src={image}
                            alt="how to use"
                            width={600}
                            height={400}
                            className="rounded-xl rounded-tl-4xl object-cover w-full"
                            quality={95}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
