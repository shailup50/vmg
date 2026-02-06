"use client";

export default function NewsletterSection({
    title,
    description,
    placeholder,
    buttonText,
    bgImage,
}) {
    return (
        <section
            className="w-full bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-40">
                <div className="max-w-xl">
                    <h2 className="text-2xl md:text-3xl  font-semibold text-black mb-4">
                        {title}
                    </h2>

                    <p className="text-[15px] text-black mb-10 md:mb-16">
                        {description}
                    </p>

                    <form className="flex md:min-w-full   gap-0  rounded-full border-[#505050] border-[1.5px]">
                        <input
                            type="email"
                            placeholder={placeholder}
                            className="flex-1 px-4 md:px-5 py-3 rounded-full border-0 border-gray-300 outline-none w-[50%] md:w-full"
                        />

                        <button
                            type="submit"
                            className="md:px-8 px-6 py-3 rounded-full bg-[#78934A] text-white font-medium hover:bg-[#4c6e07] transition"
                        >
                            {buttonText}
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
}
