import Image from 'next/image'
import React from 'react'

export const DetailImage = () => {
    return (
        <>
            <section className='py-10 md:py-16'>
                <main className='max-w-7xl mx-auto px-4'>
                    <Image width={1200} height={500} className='w-full h-full' src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f5e40b23-acc1-4dae-b6d9-8a46290d9919.__CR0,0,970,600_PT0_SX970_V1___.png" />
                    <Image width={1200} height={500} className='w-full h-full' src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/6638f31f-e864-4679-90c7-fc2fa411fc2f.__CR0,0,970,600_PT0_SX970_V1___.png" />
                    <Image width={1200} height={500} className='w-full h-full' src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/47bc2cc2-ba94-46ea-ae19-5ad99ddf8a33.__CR0,0,970,600_PT0_SX970_V1___.png" />
                    <Image width={1200} height={500} className='w-full h-full' src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ca17b480-e7ac-4b1c-9c06-8567186056a7.__CR0,0,970,600_PT0_SX970_V1___.png" />

                    <Image id="ingredients" width={1200} height={500} className='w-full h-full' src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c54c3080-6ece-4634-871c-a3090166ddf8.__CR0,0,970,600_PT0_SX970_V1___.png" />
                    <Image width={1200} height={500} className='w-full h-full' src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/adb909c5-b320-4108-978f-c51a674e2080.__CR0,0,970,600_PT0_SX970_V1___.png" />

                </main>

            </section>

        </>
    )
}
