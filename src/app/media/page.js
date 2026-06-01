import Image from "next/image";
import Link from "next/link";
import { mediaNewsData } from "@/app/data/mediaNewsData";

function Page() {
    return (
        <main className="bg-white">
            <section className="max-w-7xl mx-auto px-5 2xl:px-0 py-10 md:py-16">
                <h1 className="text-center text-3xl md:text-4xl font-medium text-[#0E0F1D] mb-8 md:mb-12">
                    Media
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                    {mediaNewsData.map((item) => (
                        <Link
                            key={item.link}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Read media coverage: ${item.heading}`}
                            className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#E3E8DC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#567f08]/40 hover:shadow-xl"
                        >
                            <div className="relative flex h-44 sm:h-48 md:h-52 items-center justify-center bg-gray-50 p-8">
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    className="max-h-24 w-auto object-contain transition duration-300 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-5 md:p-6">
                                <p className="text-sm font-medium text-[#717171] mb-3">
                                    {item.date}
                                </p>
                                <h2 className="text-xl font-semibold leading-snug text-[#0E0F1D] mb-3 transition-colors duration-300 group-hover:text-[#567f08]">
                                    {item.heading}
                                </h2>
                                <p className="text-[15px] leading-6 text-gray-600 line-clamp-2">
                                    {item.para}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Page;
