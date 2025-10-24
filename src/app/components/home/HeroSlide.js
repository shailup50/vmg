// components/HeroSlide.jsx

import Image from "next/image";

export default function HeroSlide({
    imageSrc,
    title,
    subtitle,
    info,
    buttonText,
    alignment = "left",
    maxWidth = "max-w-3xl",
    position = "center"
}) {
    const alignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };

    const contentAlignment = alignmentClasses[alignment] || alignmentClasses.left;

    return (
        <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] flex items-center justify-center bg-black/60 overflow-hidden">

            <Image
                src={imageSrc}
                layout="fill"
                objectFit="cover"
                alt="Slide Background"
                className="absolute inset-0 z-0"
            />


            <div className="absolute inset-0 bg-black/10 z-10" />


            <div className={`relative z-20 w-full px-6 flex ${position === "center"
                ? "justify-center"
                : position === "end"
                    ? "justify-end"
                    : "justify-start"
                } max-w-7xl`}>
                <div className={`w-full ${maxWidth} flex flex-col gap-4 ${contentAlignment}`}>
                    <h1 className="text-5xl md:6xl lg:text-[80px] leading-none font2 font-light text-white" dangerouslySetInnerHTML={{ __html: title }} />
                    {subtitle && <p className="text-lg md:text-2xl mb-2 md:mb-4 text-black">{subtitle}</p>}

                    {info && <p className="text-sm md:text-[15px] text-black lg:w-[70%]">{info}</p>}
                    <button className="bg-[#5B8109] hover:bg-[#4B6F00] lg:text-base text-[15px] py-3 px-7 lg:px-12 text-white mt-1 inline-block">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}
