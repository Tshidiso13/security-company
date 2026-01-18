import React from 'react'
import Hero from '../components/Hero'
import ServicePreview from '../components/ServicePreview'
import TrustedSection from "../components/TrustedSection";
import trustBg from "../assets/trust-bg.jpg";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <ServicePreview />
            <TrustedSection
                bgImage={trustBg}
                yearsExperience={8}
                trainedGuards={120}
                clientsProtected={340}
            />
            <Footer />

        </div>
    )
}

export default Home