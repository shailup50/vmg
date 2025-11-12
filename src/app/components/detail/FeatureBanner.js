"use client";
import AnimatedButton from "../AnimatedButton";

export default function FeatureBanner({
    bgImage = "",
    title = "",
    subtitle = "",
    buttonText = "",
    buttonLink = "#",
}) {
    // Hide if no data provided
    if (!bgImage && !title && !subtitle && !buttonText) return null;

    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center md:py-16"
            style={{
                backgroundImage: `url(${bgImage.src})`,

            }}
        >

            <div className="absolute inset-0 bg-black/20"></div>


            <div className="relative z-10  px-5 py-16 md:py-24 text-white">
                <div className="max-w-7xl mx-auto flex flex-col">
                    {title && (
                        <h1 className="text-2xl md:text-3xl font-medium mb-4 leading-tight">
                            {title}
                        </h1>
                    )}

                    {subtitle && (
                        <p className="text-sm md:text-[15px] max-w-xl leading-relaxed mb-8 font-light">
                            {subtitle}
                        </p>
                    )}


                    {buttonText && (
                        <AnimatedButton
                            text={buttonText}
                            href={buttonLink}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
