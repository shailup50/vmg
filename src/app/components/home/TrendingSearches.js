// components/TrendingSearches.js

const TrendingSearches = ({ items, heading }) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 py-4 w-7xl">
            <h2 className="w-full text-center text-lg md:text-xl font-semibold mb-4">{heading}</h2>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`px-6 py-3 md:text-base text-[15px] text-center w-[45%] md:w-[200px] lg:shrink-0 lg:w-[18%] border cursor-pointer transition-all hover:bg-[#97D2F3] ${index === 0 ? 'bg-[#97D2F3] text-black' : 'bg-white text-black'}`}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default TrendingSearches;
