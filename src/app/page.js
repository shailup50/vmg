"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import ApproachSection from "@/app/components/home/ApproachSection";
import apporchimg from "@/app/images/home/approach.webp"
import icon1 from "@/app/images/home/quality.svg"
import icon2 from "@/app/images/home/heart.svg"
import icon3 from "@/app/images/home/partners.svg"
import HomeSlider from "./components/home/HomeSlider";
import TrendingSearches from "./components/home/TrendingSearches";
import ProductSlider from "./components/home/ProductSlider";

import product1 from "@/app/images/home/product1.webp"
import product2 from "@/app/images/home/product2.webp"
import product3 from "@/app/images/home/product3.webp"
import Link from "next/link";
import { Future } from "./components/home/Future";
import bgimg from "@/app/images/home/bg-img.webp"
import Newsletter from "./components/home/Newsletter";
import bgForm from "@/app/images/home/mail-bg.webp"
import Testimonials from "./components/home/Testimonials";
import client1 from "@/app/images/home/client1.webp"
import BlogSlider from "./components/BlogSlider";
import blog1 from "@/app/images/home/blog1.webp"
import Faqs from "./components/Faqs";
import bottomImg from "@/app/images/home/bottom.webp"
import BestSellerSlider from "./components/home/BestSellerSlider";
import { bestSellerData } from "./data/bestSellerData";
import NewsletterSection from "./components/home/NewsletterSection";
import newsletter from "@/app/images/home/newsletter.webp"
import SpinWheelPopup from "./components/home/SpinWheelPopup";





export default function Home() {
  const commitments = [
    {
      icon: icon1,
      title: "Quality First",
      content: "We use high-quality, scientifically-backed ingredients.",
    },
    {
      icon: icon2,
      title: "Clear & Honest",
      content: "We believe in transparency about what you're putting into your body.",
    },
    {
      icon: icon3,
      title: "Your Partner in Health",
      content: "We’re here to help you live a life of vigour and vitality with the best nutrition supplements in India.      ",
    },
  ];

  const trendingItems = ['Magnesium', 'Omega', 'Zinc', 'Folic Acid', 'Multivitamin'];

  const slidesData = [
    {
      image: product1,
      title: 'Vigorzen',
      subtitle: 'For Active Living',
      description: 'A targeted formula for joint, cartilage, and bone health. Stay flexible and active, no matter your age.',
    },
    {
      image: product2,
      title: 'Welfusion',
      subtitle: 'The Daily All-Rounder',
      description: 'A comprehensive blend to boost energy, immunity, and overall vitality. Perfect for busy lifestyles.',
    },
    {
      image: product3,
      title: 'ExtraCard',
      subtitle: 'Your Heart’s Best Friend',
      description: 'An advanced support system for a healthy heart and optimal circulation. Because a strong heart is the core of a healthy life.',
    },
    {
      image: product1,
      title: 'Vigorzen',
      subtitle: 'For Active Living',
      description: 'A targeted formula for joint, cartilage, and bone health. Stay flexible and active, no matter your age.',
    },
  ];
  const testimonials = [
    {
      name: "PRIYA",
      description:
        "Love that these products are so carefully made. You can feel the quality.",
      image: client1,
    },
    {
      name: "AISHA",
      description:
        "I feel more energetic and focused since starting VMG's daily supplement. It's a noticeable difference.",
      image: client1,
    },
    {
      name: "RAJIV",
      description:
        "ExtraCard has become an essential part of my routine. I'm glad I found a product that supports my heart health so effectively.",
      image: client1,
    },
    {
      name: "RAJIV",
      description:
        "ExtraCard has become an essential part of my routine. I'm glad I found a product that supports my heart health so effectively.",
      image: client1,
    },
  ];

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

  const faqData = [
    {
      question: 'What is a nutraceutical and how is VMG Pharmaceuticals Pvt Ltd different from other brands in India?',
      answer: 'A nutraceutical is a food-based supplement that provides health benefits beyond basic nutrition. VMG Pharmaceuticals Pvt Ltd stands out in the growing nutraceuticals in the India market because we bring the same pharmaceutical-grade quality, rigorous research, and commitment to transparency that VMG Pharmaceuticals Pvt Ltd is known for, ensuring every product is safe, effective, and trustworthy.'
    },
    {
      question: 'Can multivitamins help with joint health?',
      answer: 'Yes, certain multivitamins like Vitamin D and magnesium can support joint health by reducing inflammation and improving bone density.'
    },
    {
      question: 'What is the best multivitamin for energy?',
      answer: 'Multivitamins that contain Vitamin B12, iron, and other energy-boosting nutrients are often recommended for improving energy levels.'
    },
    {
      question: 'Is there a multivitamin for heart health?',
      answer: 'Yes, multivitamins containing Vitamin E, Omega-3 fatty acids, and CoQ10 are beneficial for heart health.'
    }
  ];



  return (
    <>
      <HomeSlider />
      <ApproachSection
        heading="VMG Active – Your Trusted Choice for the Best Nutrition Supplements in India"
        description="Rooted in Wellness. VMG Active is a new venture born from VMG Pharmaceuticals Pvt Ltd’s legacy of trust and quality. We believe that true health is about more than just medicine; it’s about proactive, daily nutrition. We produce the best nutrition supplements in India, which are designed to enhance your well-being, naturally.        "
        subHeading="Our Commitment to You"
        commitments={commitments}
        imageSrc={apporchimg}
      />
      <div className="flex justify-center items-center px-5 mb-6 md:pb-8">
        <TrendingSearches items={trendingItems} heading="Trending Searches" />
      </div>

      <section className="bg-[#F2F5EC] py-6 md:py-8 overflow-hidden ">
        <div className="max-w-7xl  mx-auto px-5 2xl:px-0 ">
          <motion.h2
            className="  text-center my-3  text-2xl md:text-3xl  font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            The Starting Three
          </motion.h2>

          <motion.p
            className="text-center mb-8 text-[15px] mx-auto md:w-[40%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            Meet the first three products in our range, each crafted to address a
            specific aspect of your health.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ProductSlider slidesData={slidesData} />
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto px-5 2xl:px-0 text-center py-6 md:pt-6 pt-0"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false }}
          >
            <Link
              href="#"
              className="bg-[#567f08] rounded-full hover:bg-[#4c6e07] py-3 px-12 text-white mt-1 inline-block"
            >
              View Details
            </Link>
          </motion.div>
        </motion.div>
      </section>
      {/* <Future
        heading="The Future of Wellness, Coming Soon"
        description="Our product line will grow to include new, innovative formulas in the coming months. We are actively developing solutions for Cognitive Health, Stress Management, Immunity Boosters, etc., and we can't wait to share them with you"
        btnName="Stay tuned for our next launch!"
        btnLink="#"
        img={bgimg}
      /> */}
      <BestSellerSlider data={bestSellerData} />

      {/* <Newsletter
        title="Get Your Daily Dose of Wellness"
        subtitle="Stay informed about new products, exclusive offers, and expert health tips"
        placeholder="Enter Your Email"
        buttonText="Subscribe"
        backgroundImage={bgForm}
      /> */}
      <NewsletterSection
        title="Get Your Dose of Wellness"
        description="Stay informed about new products, exclusive offers, and expert health tips"
        placeholder="Enter your email address"
        buttonText="Subscribe"
        bgImage={newsletter}
      />

      <Testimonials testimonials={testimonials} />
      <BlogSlider blogs={blogs} />
      <section className="bg-[#F2F5EC]">
        <Faqs faqData={faqData} />
      </section>
      {/* <section>
        <Image src={bottomImg} className="w-full h-full" alt="img" width={1200} />
      </section> */}
      <SpinWheelPopup />
    </>
  );
}
