"use client";

const certificates = [
    {
        title: "AE FSSAI Licence",
        image:
            "https://www.api.vmgactive.com/wp-content/uploads/2026/02/AE-FSSAI-Licence-cover_page-0001.webp",
        pdf: "https://www.api.vmgactive.com/wp-content/uploads/2026/02/AE-FSSAI-Licence.pdf",
    },
    {
        title: "Test Report Extracard",
        image:
            "https://www.api.vmgactive.com/wp-content/uploads/2026/02/Test-report-of-Extracard-cover_page-0001.webp",
        pdf: "https://www.api.vmgactive.com/wp-content/uploads/2026/02/Test-report-of-Extracard.pdf",
    },


];

export default function CertificateSection() {
    return (
        <section className="py-10 md:py-16 bg-gray-50 scroll-mt-[70px]" id="lab-report">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-medium text-center text-black mb-10">
                    Lab Report
                </h2>

                <div className="grid gap-6 justify-center
                [grid-template-columns:repeat(auto-fit,minmax(260px,300px))]">
                    {certificates.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
                        >
                            <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-72 object-cover object-top transform group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}