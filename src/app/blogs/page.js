import Image from 'next/image'
import React from 'react'
import banner from '@/app/images/blog/blog-banner.webp'
import Link from 'next/link'
import BlogCard from '../components/blog/BlogCard';
import NewsList from '../components/blog/NewsList';

function page() {
    const blogs = [
        {
            image: "https://www.api.vmgactive.com/wp-content/uploads/2025/12/multitasking-stress.webp",
            title: "Inside the Capsule: What Makes VMG Active Supplements Different",
            description:
                "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the indus try's standard dummy text ever since the 1500s.",
            link: "/blog/vmg-active",
        },
        {
            image: "https://www.api.vmgactive.com/wp-content/uploads/2025/12/multitasking-stress.webp",
            title: "Is Your Multivitamin Really Working for You?",
            description:
                "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the indus try's standard dummy text ever since the 1500s.",
            link: "/blog/multivitamin",
        },
    ];
    const articlesData = [
        {
            image: "https://www.api.vmgactive.com/wp-content/uploads/2025/12/multitasking-stress.webp",
            title: "Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java",
            meta: "4 Min · August 19, 2022",
            link: "#"
        },
        {
            image: "https://www.api.vmgactive.com/wp-content/uploads/2025/12/multitasking-stress.webp",
            title: "Cold Brew Coffee, How to Drink Cold Coffee is More Enjoyable",
            meta: "4 Min · August 19, 2022",
            link: "#"

        },
        {
            image: "https://www.api.vmgactive.com/wp-content/uploads/2025/12/multitasking-stress.webp",
            title: "Meet Coffee Tonic, the Sensation of Drinking Coffee-Flavored Soda",
            meta: "4 Min · August 19, 2022",
            link: "#"
        },
        {
            image: "https://www.api.vmgactive.com/wp-content/uploads/2025/12/multitasking-stress.webp",
            title: "Workshop Coffee Sharing Session",
            meta: "4 Min · August 19, 2022",
            link: "#"

        },
        {
            image: "https://www.api.vmgactive.com/wp-content/uploads/2025/12/multitasking-stress.webp",
            title: "Exploring Specialty Coffee Trends in 2024",
            meta: "5 Min · September 02, 2022",
            link: "#"

        },
        {
            image: "https://www.api.vmgactive.com/wp-content/uploads/2025/12/multitasking-stress.webp",
            title: "How Coffee Brewing Methods Affect Flavor Profiles",
            meta: "6 Min · October 10, 2022",
            link: "#"

        },
    ];
    return (
        <>
            <section className='bg-[#F9FFEB] py-8 md:py-12'>
                <div className='max-w-7xl mx-auto  px-4 md:px-5 lg:px-0'>
                    <h2 className='text-[#121212] text-center text-2xl md:text-3xl font-semibold mb-4'>Latest Blog</h2>

                    <p className='text-black text-[15px] md:text-base mt-1 mb-10 text-center'>“Insights, Ideas, and Inspiration for Every Reader”</p>

                    <div className='main_card'>
                        <Image src={banner} alt='Latest Blog' />
                        <Link href="#" className='text-lg font-medium md:text-xl mt-6 inline-block  text-[#121212] hover:text-[#4B6F00] transition'>
                            <h2>The Power of Daily Nutrition: Small Habits That Create Big Health Changes</h2>
                        </Link>
                        <p className="text-[#717171] text-sm mt-2">
                            4 Min • August 19, 2025
                        </p>
                    </div>

                </div>

            </section>


            <section className="max-w-7xl mx-auto px-4 md:px-5 lg:px-0 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                    {blogs.map((item, index) => (
                        <BlogCard key={index} {...item} index={index} />
                    ))}
                </div>
            </section>


            <NewsList
                title="Informational Articles"
                items={articlesData}
            />


            <NewsList
                title="Guides"
                items={articlesData}
                singleColumn={true}
            />


            <NewsList
                title="News"
                items={articlesData}
            />



        </>
    )
}

export default page