import React from 'react'
import FeatureBanner from './FeatureBanner'
import banner from "@/app/images/info/banner-bg.webp"
import IngredientsSection from './IngredientsSection'
import vigorzen from '@/app/images/info/main.webp'
import CustomerReviews from './CustomerReviews'
import user1 from "@/app/images/info/user.png"

export const Feature = () => {
    return (
        <>
            <FeatureBanner
                bgImage={banner}
                title="Experience The Science Of Motion"
                subtitle="Reclaim flexibility, strength, and vitality with every dose of Vigorzen — because healthy joints mean a happier, more active you."
                buttonText="SHOP NOW"
                buttonLink="/shop"
            />
        </>
    )
}



export const Ingredients = () => {
    const ingredientsData = [
        {
            title: "Collagen Peptides (Type I, II, III, V & X)",
            description:
                "Sourced from high-quality collagen to support cartilage repair, strengthen ligaments, and improve skin elasticity for overall structural health.",
        },
        {
            title: "Glucosamine & Chondroitin Sulfate",
            description:
                "Chondroitin rebuilds cartilage, enhances flexibility, and retains joint fluid. Naturally bioavailable, it reduces stiffness for smoother, more comfortable movement.",
        },
        {
            title: "Mineral Complex (Zinc, Manganese, Copper, Selenium, Iron & Folic Acid)",
            description:
                "A precise mineral blend that boosts collagen formation, strengthens bones, and supports connective tissue integrity.",
        },
        {
            title:
                "Ginger Extract (Zingiber officinale) (Standardized to Gingerols NLT 5%)",
            description:
                "Zinc contributes to normal cognitive function and supports overall vitality.",
        },
        {
            title: "Rosehip Extract",
            description:
                "Rich in antioxidants, Rosehip promotes joint comfort, reduces oxidative stress, and supports collagen regeneration.",
        },
        {
            title: "Vitamin D3, B12, C & E",
            description:
                "Clinically tested vitamins that enhance bone strength, improve energy metabolism, and aid tissue repair.",
        },
    ];

    const referencesData = {
        heading: "Clinically Proven for Stronger Joints and Better Mobility Under * mention the below References:",
        description: `Genç, E., Çetinkaya, M., et al. (2025). Joint Diseases and Related Surgery, <b>36(1):85–96.</b> PubMed <br>
        Grifell, M., de Almeida, T., et al. (2024). European Review for Medical and Pharmacological Sciences, <b>28(1):236–245</b>. PubMed
         `
    }

    // const referencesData = `
    //     "Genç, E., Çetinkaya, M., Et Al. (2025). Joint Diseases And Related Surgery, 36(1):85–96. PubMed"
    //     "Grifell, M., De Almeida, T., Et Al. (2024). European Review For Medical And Pharmacological Sciences, 28(1):236–245. PubMed"`

    return (
        <>
            <IngredientsSection
                title="Our Ingredients"
                image={vigorzen}
                ingredients={ingredientsData}
                references={referencesData}
            />
        </>
    )
}



export const Review = () => {
    const reviewsData = [
        {
            name: "User",
            image: user1,
            rating: 5,
            date: "20 October 2025",
            comment:
                "These little babies have made it so easy and convenient to take every day. Thank you!",
        },
        {
            name: "Sara J. H.",
            image: user1,
            rating: 4,
            date: "2 July 2025",
            comment:
                "I used to require a day off work because of tummy bugs. Haven’t experienced any since!",
        },
        {
            name: "Madeline",
            image: user1,
            rating: 5,
            date: "9 June 2025",
            comment: "My hubby's stomach is healed. He feels so much better!",
        },
        {
            name: "Sue",
            image: user1,
            rating: 5,
            date: "1 July 2025",
            comment:
                "I'm 63, and have had issues for years. Finally found something that works!",
        },
    ];
    return (
        <>

            <CustomerReviews reviews={reviewsData} />

        </>
    )
}
