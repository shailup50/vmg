import React from 'react'
import { About, Beliefs, Philosophy, Story } from '../components/about/AboutStoryPhilosophyBeliefs'
import { Experts, Join, Promise, Safety } from '../components/about/PromiseExpertsSafetyJoin'

function page() {
    return (
        <>
            <About />
            <Story />
            <Philosophy />
            <Beliefs />
            <Promise />
            <Experts />
            <Safety />
            <Join />

        </>
    )
}

export default page