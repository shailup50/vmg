"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RiTwitterXFill } from "react-icons/ri";

import { FaSquareFacebook } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";



import blogimg from "@/app/images/blog/blog-detail.webp"
import BlogSlider from "../components/BlogSlider";
import blog1 from "@/app/images/home/blog1.webp"

function page() {
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState("");
    /* 🔹 Get all H2 headings */
    useEffect(() => {
        const h2s = Array.from(document.querySelectorAll("article h2"));
        const data = h2s.map(h2 => ({
            id: h2.id,
            text: h2.innerText
        }));
        setHeadings(data);
    }, []);

    /* 🔹 ScrollSpy */
    useEffect(() => {
        const HEADER_OFFSET = 150;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
                threshold: 0,
            }
        );

        document
            .querySelectorAll("article h2")
            .forEach((h2) => observer.observe(h2));

        return () => observer.disconnect();
    }, []);



    const blogs = [
        {
            image: blog1,
            title: "Boosting Your Immunity Naturally",
        },
        {
            image: blog1,
            title: "Sleep Better, Live Better: Natural Aids for Restful Nights",
        },
        {
            image: blog1,
            title: "Your Daily Dose of Wellness: Simple Ways to Incorporate Nutraceutical",
        },
        {
            image: blog1,
            title: "Discover Herbal Nutrition Benefits",
        },
    ];


    return (



        <>
            <main className="blog_details">
                <section className="max-w-7xl mx-auto px-5 lg:px-0  py-10">
                    <div className="relative rounded-xl overflow-hidden mb-10">
                        <Image
                            src={blogimg}
                            alt="Blog Hero"
                            className="w-full h-[300px] md:h-full object-cover"
                        />
                        <div className="absolute bottom-0 bg-black/10 backdrop-blur-[35px] w-full p-3 md:p-6 flex flex-col justify-end">
                            <span className="inline-flex items-center gap-2 bg-[#A4C75A] text-sm text-white px-3 py-2 rounded-full w-fit mb-2">
                                <span className="w-3 h-3 rounded-full bg-white inline-block"></span>  Artificial Intelligence
                            </span>
                            <h1 className="text-white text-xl md:text-[26px] font-medium">
                                Mastering ChatGPT Blog Creation: Dos and Don’ts for SaaS Marketing Managers
                            </h1>
                            <p className="text-white text-sm mt-2">
                                Oct 19 • 10 min read
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap gap-0 md:gap-10">
                        <div className="w-full md:w-2/3 md:order-0 order-2">
                            <article>
                                <h2 id="exploring-ai">Exploring Generative AI in Content Creation</h2>
                                <p>
                                    Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to engage your audience. I bet generative AI has crossed your mind as an option for creating content. Well, let me share from my firsthand experience.
                                </p>
                                <p>Google encourages high-quality blogs regardless of whether they're written by humans or created using artificial intelligence like ChatGPT. Here's what matters: producing original material with expertise and trustworthiness based on Google E-E-A-T principles.</p>
                                <p>This means focusing more on people-first writing rather than primarily employing AI tools to manipulate search rankings. There comes a time when many experienced professionals want to communicate their insights but get stuck due to limited writing skills – that’s where Generative AI can step in.</p>
                                <p>So, together, we’re going explore how this technology could help us deliver valuable content without sounding robotic or defaulting into mere regurgitations of existing materials (spoiler alert – common pitfalls!). Hang tight - it’ll be a fun learning journey!</p>


                                <h2 id="ai-pitfalls">Steering Clear of Common AI Writing Pitfalls</h2>
                                <p>
                                    Jumping headfirst into using AI, like ChatGPT, without a content strategy can lead to some unfortunate results. One common pitfall I've seen is people opting for quantity over quality - they churn out blogs, but each one feels robotic and soulless, reading just like countless others on the internet.
                                </p>
                                <p>Another fault line lies in creating reproductions rather than delivering unique perspectives that offer value to readers; it often happens if you let an AI tool write your full blog unrestrained! Trust me on this – Ask any experienced marketer or writer about their takeaways from using generative AI tools. They'll all agree that adding a human touch and following specific guidelines are key when implementing these tech pieces.</p>
                                <p>Remember, our goal here isn’t merely satisfying search engines but, more importantly, knowledge-hungry humans seeking reliable information online. So keep your audience's needs at heart while leveraging technology’s assistance!</p>

                                <h2 id="chatgpt-capabilities">Understanding ChatGPT Capabilities - Define Your Style</h2>
                                <p>
                                    Welcome to the intriguing world of ChatGPT! Its ability and potential can truly be mind-boggling. I have learned from experience how capable it is in dealing with diverse content generation tasks, only that its text sounded slightly "unnatural" in accordance with TechTarget. However, fear not – there are ways around this!
                                </p>
                                <p>One strategic move I've seen work wonders is defining your unique writing style first before handing over the reins to AI; you treat it like a canvas whereupon our vision opens up. If we clearly instruct who we're targeting or what tone resonates more effectively, generative AI tools such as ChatGPT will comply remarkably well.</p>
                                <p>In framing guidelines, remember to keep audience interests at heart while adopting technology’s benefits for efficient output – trust me on this because neglecting these aspects could backfire by generating unappealing robotic-like reads.</p>
                                <p>Ultimately, aiming towards reader-focused driven creativity illuminated under authentically humanized narratives holds priority above all else when crafting blogs using auto-generation toolkits!</p>

                                <h2 id="reader-style">Understand Your Readers</h2>
                                <p>
                                    Understanding your readers is vital when producing blog posts. It's not about filling blanks with popular search terms, no matter how much keyword research you do. Real readability goes beyond that! Your content has to 'speak' directly to your target audience.
                                </p>
                                <p>Building an Ideal Customer Profile (ICP) can help immensely in this respect (Dan Martell). This tool identifies specific firmographics or psychographic drivers behind customer success - a valuable guide for creating targeted outputs catering to arrayed reader types.</p>
                                <p>Simultaneously, SEO aspects also need attention: identifying suitable keywords & phrases people commonly use enhances reach (SEO.COM reference). Yet remember – human appeal doesn’t mean packing text up finely into presentable semblances bearing little value substance and stuffing it full with only ‘keywords.’</p>

                                <div className="bg-[#339CD7] mt-6 rounded-xl p-5 text-white flex gap-2 justify-between items-center">
                                    <p className="font-medium mb-0! text-[15px] md:text-base">Share with your community!</p>
                                    <div className="flex items-center gap-3">

                                        <a className="text-[28px] md:text-[34px] flex items-center justify-center">
                                            <FaSquareFacebook />
                                        </a>
                                        <a className=" bg-white text-[22px] min-w-6 min-h-[26px] md:min-w-8  md:min-h-[31px] text-[#339cd7] rounded-xs md:rounded-sm flex items-center justify-center">
                                            <RiTwitterXFill />
                                        </a>
                                        <a className="text-[28px] md:text-[34px] flex items-center justify-center">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>

                            </article>
                        </div>
                        {/* RIGHT SIDEBAR */}
                        <div className="w-full md:w-2/6 md:order-0 order-1">
                            <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
                                {/* SHARE BOX */}
                                <div className="bg-[#339CD7] rounded-xl p-4 md:p-5 text-white md:block flex items-center justify-between">
                                    <p className="font-medium md:mb-3 mb-0 md:text-base text-[15px]">Share with your community!</p>
                                    <div className="flex items-center gap-2 md:gap-3">

                                        <a className="text-[28px] md:text-[34px] flex items-center justify-center">
                                            <FaSquareFacebook />
                                        </a>
                                        <a className=" bg-white text-[22px] min-w-6 min-h-[26px] md:min-w-8  md:min-h-[31px] text-[#339cd7] rounded-xs md:rounded-sm flex items-center justify-center">
                                            <RiTwitterXFill />
                                        </a>
                                        <a className="text-[28px] md:text-[34px] flex items-center justify-center">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>

                                {/* IN THIS ARTICLE */}
                                <div className="bg-transparent rounded-xl p-5">
                                    <p className="font-medium text-base mb-4">In This Article</p>
                                    <ul className="space-y-3 md:space-y-6 relative">
                                        <div className="absolute left-[0.5px] top-0 bg-[#D2D2D2] -z-10  w-[1.5px] h-full"></div>
                                        {headings.map(item => (
                                            <li key={item.id}>
                                                <a
                                                    href={`#${item.id}`}
                                                    className={`block text-sm pl-3 border-l-2 transition-all
                      ${activeId === item.id
                                                            ? "border-[#339CD7] text-[#339CD7] font-medium"
                                                            : "border-gray-300 text-[#1B1B1F] hover:text-[#339CD7]"
                                                        }
                    `}
                                                >
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="border-t border-b mt-12 border-[#6C7880] md:mt-20 related_blog">
                        <BlogSlider title="Related Topics" blogs={blogs} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default page