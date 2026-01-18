import { Navbar } from './components/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ProductsSection } from './components/sections/ProductsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { CaseStudiesSection } from './components/sections/CaseStudiesSection'
import { MindsetSection } from './components/sections/MindsetSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export default function Home() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="relative" role="main">
                <HeroSection />
                <AboutSection />
                <ProductsSection />
                <SkillsSection />
                <CaseStudiesSection />
                <MindsetSection />
                <ExperienceSection />
                <TestimonialsSection />
                <TimelineSection />
                <ContactSection />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    )
}
