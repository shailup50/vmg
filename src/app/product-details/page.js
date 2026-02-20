import React from 'react'
import { Benefit, Faq, Info } from '../components/detail/InfoBenefitFaq'
import { Feature, Ingredients, Review } from '../components/detail/FeatureIngredientsReview'
import CertificateSection from '../components/detail/CertificateSection'
import MoreInfo from '../components/detail/MoreInfo'
import ProductTab from '../components/detail/ProductTab'

function page() {
    return (
        <>
            <div className='sticky top-16 md:top-19  z-100 bg-white'>
                <section className='max-w-7xl mx-auto px-2 2xl:px-0 md:mt-0 -mt-10 md:-mb-6 py-2'>
                    <ProductTab />
                </section>
            </div>
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