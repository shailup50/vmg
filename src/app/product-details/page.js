import React from 'react'
import { Benefit, Faq, Info } from '../components/detail/InfoBenefitFaq'
import { Feature, Ingredients, Review } from '../components/detail/FeatureIngredientsReview'

function page() {
    return (
        <>
            <Info />
            <Benefit />
            <Faq />
            <Feature />
            <Ingredients />
            <Review />



        </>
    )
}

export default page