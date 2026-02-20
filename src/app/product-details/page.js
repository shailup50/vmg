import React from 'react'
import { Benefit, Faq, Info } from '../components/detail/InfoBenefitFaq'
import { Feature, Ingredients, Review } from '../components/detail/FeatureIngredientsReview'
import CertificateSection from '../components/detail/CertificateSection'
import MoreInfo from '../components/detail/MoreInfo'

function page() {
    return (
        <>
            <Info />
            <Benefit />
            <Faq />
            <Feature />
            <Ingredients />
            <CertificateSection />
            <MoreInfo />
            <Review />



        </>
    )
}

export default page