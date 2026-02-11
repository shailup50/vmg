// components/TestimonialCard.js
import Image from "next/image";
import { VscQuote } from "react-icons/vsc";


export default function TestimonialCard({ name, description, image }) {
    return (
        <div className="bg-white p-6 md:p-8 rounded-[15px] overflow-hidden   text-center ">
            <div className="w-full md:w-[90%]   mx-auto">
                <VscQuote className="text-3xl text-[#5B8109] mx-auto mb-4" />
                <p className="text-black mb-4 text-[15px] md:text-[14px]">{description}</p>
                <div className="flex flex-col items-center">
                    <Image
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover mb-2"
                        width={100}
                        height={100}
                    />
                    <h3 className="text-sm text-gray-900 uppercase font-normal! tracking-wide">
                        {name}
                    </h3>
                </div>
            </div>

        </div>
    );
}
