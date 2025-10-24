import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Future = ({ heading, description, btnName, btnLink, img }) => {
    return (
        <>

            <div className="max-w-7xl mx-auto my-2 px-4 pt-10 md:pt-20  pb-6  md:px-5 lg:px-0">
                <div className=" md:w-2/4 mx-auto text-center">
                    <h3 className="text-[#324904] text-2xl md:text-3xl font-semibold mb-4">{heading}</h3>
                    <p className="text-black text-sm mt-1 mb-10 md:mb-14">{description}</p>
                    <Link href={btnLink} className="mt-4 border-2 bg-transparent border-[#4B6F00] text-[4B6F00] py-3 md:py-4 px-6 md:px-10 hover:bg-[#4B6F00] hover:text-white transition ">{btnName}</Link>
                </div>
            </div>
            <Image src={img} className='w-full h-full lg:-mt-40 -z-10 relative object-center' alt='image' />

        </>
    )
}
