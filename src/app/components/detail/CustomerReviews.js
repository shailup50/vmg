"use client";
import { FaStar, FaRegStar, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const CustomerReviews = ({ reviews = [] }) => {
    if (!reviews.length) return null;

    return (
        <section className="bg-[#F9FFEB] py-10 md:py-16 px-0 md:px-12">
            <div className="max-w-7xl mx-auto px-5 2xl:px-0">
                <h2 className="text-2xl md:text-3xl font-medium text-center mb-10">
                    Customer Review
                </h2>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 md:gap-x-14">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 p-2 rounded-2xl transition"
                        >
                            {review.image && (
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full border border-gray-200"
                                />
                            )}

                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1">
                                        <p className="font-semibold text-[#00026E] md:text-base text-[15px]">{review.name}</p>
                                        <FaCheckCircle className="text-green-600 text-xs" />
                                    </div>
                                    {review.date && (
                                        <p className="text-xs text-[#8081B7]">{review.date}</p>
                                    )}
                                </div>

                                <div className="flex items-center gap-1 mt-1 mb-2">
                                    {Array.from({ length: 5 }).map((_, starIdx) =>
                                        starIdx < review.rating ? (
                                            <FaStar key={starIdx} className="text-[#FFB12E] text-sm" />
                                        ) : (
                                            <FaRegStar key={starIdx} className="text-gray-300 text-sm" />
                                        )
                                    )}
                                </div>

                                {review.comment && (
                                    <p className="text-sm text-[#33358B] md:text-[15px] leading-relaxed">
                                        {review.comment}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
