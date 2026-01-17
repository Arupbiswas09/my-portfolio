import { Navbar } from './components/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { ProductsSection } from './components/sections/ProductsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { CaseStudiesSection } from './components/sections/CaseStudiesSection'
import { MindsetSection } from './components/sections/MindsetSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="relative">
                <HeroSection />
                <ProductsSection />
                <SkillsSection />
                <CaseStudiesSection />
                <MindsetSection />
                <TimelineSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
