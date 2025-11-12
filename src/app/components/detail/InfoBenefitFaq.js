import React from 'react'
import ProductDetail from './ProductDetail';
import product1 from "@/app/images/info/product1.webp"
import product2 from "@/app/images/info/product2.webp"
import product3 from "@/app/images/info/product3.webp"
import product4 from "@/app/images/info/product4.webp"
import product5 from "@/app/images/info/product5.webp"
import icon1 from "@/app/images/info/icon1.svg"
import icon2 from "@/app/images/info/icon2.svg"
import icon3 from "@/app/images/info/icon3.svg"
import icon4 from "@/app/images/info/icon4.svg"
import icon5 from "@/app/images/info/icon5.svg"
import icon6 from "@/app/images/info/icon6.svg"
import icon7 from "@/app/images/info/icon7.svg"
import icon8 from "@/app/images/info/icon8.svg"
import icon9 from "@/app/images/info/icon9.svg"
import icon10 from "@/app/images/info/icon10.svg"
import WhatItDoes from './WhatItDoes';
import do1 from "@/app/images/info/do1.svg"
import do2 from "@/app/images/info/do2.svg"
import do3 from "@/app/images/info/do3.svg"
import do4 from "@/app/images/info/do4.svg"
import HowToUse from './HowToUse';
import howImg from "@/app/images/info/how.webp"
import IdealFor from './IdealFor';
import whoImg from "@/app/images/info/who.webp"
import who1 from "@/app/images/info/who1.svg"
import who2 from "@/app/images/info/who2.svg"
import who3 from "@/app/images/info/who3.svg"
import who4 from "@/app/images/info/who4.svg"
import FaqSection from './FaqSection';



export const Info = () => {
    const product = {
        title: "VigorZen",
        newPrice: 700,
        oldPrice: 999,
        images: [
            product1,
            product2,
            product3,
            product4,
            product5,
            product1,

        ],
        descriptionTitle: "Your daily dose of joint care and cellular renewal.",
        description: `Vigorzen is a next-generation joint and collagen complex designed to restore flexibility, reduce stiffness, & keep your body moving with ease. <br> <br> Each serving combines <b>multi-type collagen peptides</b> <br> <b>(Type I, II, III, V & X)</b> with <b>Glucosamine, Chondroitin, Ginger, & Rosehip extracts,</b> enriched with essential <b>vitamins and trace minerals</b> that support cartilage, bones, and connective tissue from within. <br> <br> Whether you’re an athlete, a professional on the go, or simply someone who wants to move without pain — Vigorzen helps you <b>reclaim your natural rhythm</b> every day.`,
        ingredients:
            `Collagen Peptide (Type I, II, III, IV & X) – 150mg, Glucosamine Sulfate – 750mg, Chondroitin Sulfate – 50mg, Ginger Extract (Zingiber officinale) (Standardized to Gingerols NLT 5%) – 40mg, Rosehip Extract – 50mg, Vitamin C – 30mg, Vitamin E – 10mg, Vitamin D3 – 600 IU, Vitamin B12 – 2.2mcg, Folic Acid – 177mcg, Iron – 5mg, Zinc – 5mg, Manganese – 2mg, Copper – 0.5mg, Selenium – 40mcg`,
        features: [
            { name: "Total Joint Support", icon: icon1 },
            { name: "Multi-Type Collagen for Multi-Level Repair", icon: icon2 },
            { name: "Anti-Inflammatory Power", icon: icon3 },
            { name: "Bone & Muscle Strength", icon: icon4 },
            { name: "Cellular Nourishment & Repair", icon: icon5 },
        ],
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
            <ProductDetail product={product} />
        </>
    )
}



export const Benefit = () => {
    const whatItDoesData = [
        {
            icon: do1,
            title: "Supports Heart Health",
            text: "Omega-3 Fatty Acids, CoQ10, and Lycopene work together to help manage cholesterol levels, improve blood circulation, and promote a healthy heart rhythm."
        },
        {
            icon: do2,
            title: "Boosts Energy & Stamina",
            text: " L-Arginine, Panax Ginseng, and Magnesium enhance oxygen delivery and blood flow — helping reduce fatigue, improve endurance, and maintain vitality throughout the day."
        },
        {
            icon: do3,
            title: "Provides Antioxidant Defense",
            text: " Green Tea Extract, Grape Seed Extract, Zinc, and Selenium form a powerful antioxidant network that helps protect your cells from oxidative stress and premature aging."
        },
        {
            icon: do4,
            title: "Enhances Overall Vitality",
            text: "Copper, Manganese, and Piperine support metabolism, improve nutrient absorption, & keep your body’s energy systems running efficiently."
        },
    ];


    const stepsData = [
        {
            info: `Take <b>1 capsule per day, preferably with a meal</b> or as recommended by your healthcare professional.`,

        },
        {
            info: `<b>For best results, combine with a balanced diet and active lifestyle.</b>`,

        }
    ];

    const idealData = [
        {
            icon: who1,
            text: "Individuals managing cholesterol or heart health concerns.",
        },
        {
            icon: who2,
            text: "Professionals experiencing daily fatigue or low stamina.",
        },
        {
            icon: who3,
            text: "Fitness enthusiasts seeking endurance and recovery support.",
        },
        {
            icon: who4,
            text: "Anyone looking for everyday vitality and cell protection.",
        },
    ];

    return (
        <>
            <WhatItDoes items={whatItDoesData} />
            <HowToUse
                title="How to Use"
                steps={stepsData}
                image={howImg}
            />
            <IdealFor
                title="Who It’s For"
                subtitle="Extracard Is Ideal For:"
                image={whoImg}
                data={idealData}
            />
        </>
    )
}



export const Faq = () => {
    const faqData = [
        {
            question: "How long does it take to see results?",
            answer:
                "Most users report noticeable improvement in mobility and comfort within 4–6 weeks of consistent use.",
        },
        {
            question: "Can I take it with other supplements?",
            answer:
                "Yes, it is generally safe to combine with other supplements unless advised otherwise by a healthcare professional.",
        },
        {
            question: "Is it suitable for vegetarians?",
            answer: "Yes, this product is 100% vegetarian friendly.",
        },
        {
            question: "Are there any side effects?",
            answer:
                "It is well tolerated for most users. If you have any concerns, consult your physician.",
        },
    ];
    return (
        <>

            <FaqSection title="FAQs" data={faqData} />

        </>
    )
}
