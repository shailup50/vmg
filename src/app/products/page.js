import React from 'react'
import { Article, Banner, Product, Testi } from '../components/products/BannerProductTestiArticle'
import article1 from "@/app/images/product/article1.webp"
import article2 from "@/app/images/product/article2.webp"
import article3 from "@/app/images/product/article3.webp"
import client1 from "@/app/images/product/client1.webp"
import banner from "@/app/images/product/banner.webp"




function page() {
    const articlesData = [
        {
            image: article1,
            date: "Feb 22, 2024",
            category: "Products",
            title: "Best Practices for Using Vitamin C in Your Routine",
            description:
                "Donec sed est felis purus donec porta at. Aenean pharetra odio natoque lorem cras sagittis lectus sit sed. Ornare diam ac tristique senectus accumsan habitasse orci orci.",
        },
        {
            image: article2,
            date: "Feb 22, 2024",
            category: "Tips",
            title: "How to Build a Skincare Routine for Your Skin Type",
            description:
                "Aenean pharetra odio natoque lorem cras sagittis lectus sit sed. Ornare diam ac tristique senectus accumsan habitasse orci orci.",
        },
        {
            image: article3,
            date: "Feb 22, 2024",
            category: "Skincare",
            title: "Simple Skincare Tips to Achieve Clear, Healthy Skin",
            description:
                "Pharetra odio natoque lorem cras sagittis lectus sit sed. Ornare diam ac tristique senectus accumsan habitasse orci orci. Donec sed est felis purus donec.",
        },

    ];

    const testimonialData = [
        {
            quote:
                "I’ve tried countless moisturizers, but this one is a game-changer! My skin feels softer, smoother, and stays hydrated all day without feeling greasy. It's the perfect balance!",
            image: client1,
            name: "Emilia Murray",
            role: "Informational articles",
        },
        {
            quote:
                "The results are amazing! My routine feels more refreshing and effective. Highly recommended!",
            image: client1,
            name: "Olivia Smith",
            role: "Customer Review",
        },
        {
            quote:
                "This product made a visible difference in my skin texture. Absolutely love it!",
            image: client1,
            name: "Sophia White",
            role: "Wellness Blogger",
        },
    ];


    return (
        <>
            <Banner title="Find Your Formula"
                subtitle="For Everyday Wellness"
                buttonText="Shop Now"
                imageSrc={banner} />
            <Product />
            <Testi testimonials={testimonialData} />
            <Article heading="Latest Articles" articles={articlesData} />
        </>
    )
}

export default page