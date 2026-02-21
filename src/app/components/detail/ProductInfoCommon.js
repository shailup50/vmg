import React from 'react'
import icon6 from "@/app/images/info/icon6.svg"
import icon7 from "@/app/images/info/icon7.svg"
import icon8 from "@/app/images/info/icon8.svg"
import icon9 from "@/app/images/info/icon9.svg"
import icon10 from "@/app/images/info/icon10.svg"
import Image from 'next/image'

export const ProductInfoCommon = () => {
    const product = {
        benefits: [
            { name: "Non GMO", icon: icon6 },
            { name: "Safe Dosage", icon: icon7 },
            { name: "Plant Based", icon: icon8 },
            { name: "Heavy Metals Test Compliant", icon: icon9 },
            { name: "Sourced Sustainability", icon: icon10 },
        ],
    };
    return (
        <>
            <main className='bg-[#F2F9E6] py-6 md:py-10 my-6 md:my-10'>
                <section className='max-w-7xl mx-auto px-5 2xl:px-0'>
                    <div>
                        <div className="grid grid-cols-3 md:grid-cols-5 items-start gap-6 md:gap-10">
                            {product.benefits?.map((f, i) => (
                                <div
                                    key={i}
                                    className="text-center flex flex-col items-center text-sm text-gray-700"
                                >
                                    <div className="mb-2">
                                        <Image src={f.icon} width={80} height={80} alt={f.name} className="md:h-16 h-10" />
                                    </div>
                                    <p className="mt-1 text-black text-[13px] md:text-[15px] font-medium">{f.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
