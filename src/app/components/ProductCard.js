import Image from "next/image";


export default function ProductCard({ image, title, subtitle, description }) {
    return (
        <div className="  p-4">
            <Image src={image} alt={title} width={500} height={400} className="w-full " />
            <div className="  p-4 md:p-6 border rounded-bl-xl rounded-br-xl">
                <h3 className="text-lg md:text-xl mb-2 font-semibold">{title}</h3>
                <h4 className="text-[15px] text-black font-semibold">{subtitle}</h4>
                <p className="text-black text-sm mt-1">{description}</p>
                {/* <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full">View Details</button> */}
            </div>
        </div>
    );
}
