'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const caseStudies = [
    {
        id: 'inbo',
        title: 'Inbo: Cross-Platform Newsletter Platform',
        tagline: 'From idea to 10K+ users across Web, iOS & Android',
        problem: 'Email newsletters are cluttered, hard to read on mobile, and lack offline access. Users needed a distraction-free reading experience with powerful organization.',
        solution: 'Built a production-grade platform with offline-first architecture, cross-platform sync, and analytics-driven insights.',
        owned: [
            'End-to-end mobile architecture (100K+ LOC codebase)',
            'Migration from Expo CLI to React Native CLI (New Architecture)',
            'Offline-first system with intelligent background sync',
            'Secure authentication (Google OAuth + Email OTP + JWT)',
            'Firebase Analytics & Mixpanel integration (GDPR-compliant)',
            'Push notifications with deep linking (FCM)',
            'App Store & Play Store deployment & maintenance',
            'Next.js web platform (built independently)',
        ],
        highlights: [
            'Reduced app crash rate to <0.1% through comprehensive error boundaries',
            'Achieved 60 FPS scroll performance with FlashList virtualization',
            'Implemented intelligent caching reducing API calls by 80%',
            'Built modular feature-based architecture for team scalability',
        ],
        learnings: [
            'Offline-first isn\'t optional—it\'s the foundation of great UX',
            'Performance monitoring from day one prevents technical debt',
            'User analytics drive better product decisions than assumptions',
        ],
        gradient: 'from-blue-600 to-purple-600',
    },
    {
        id: 'farmaid',
        title: 'FarmAid: AI-Powered Agriculture Assistant',
        tagline: 'Helping farmers detect crop diseases with 96% accuracy',
        problem: 'Farmers lose billions annually to crop diseases due to late detection. Traditional diagnosis requires expert consultation, which is expensive and slow.',
        solution: 'ML-powered mobile app that identifies diseases from photos instantly, providing actionable treatment recommendations.',
        owned: [
            'Complete Flutter app development',
            'TensorFlow model integration (96% accuracy for crops, 80% for livestock)',
            'Python Flask backend for model inference',
            'Image preprocessing pipeline',
            'Firebase real-time database integration',
        ],
        highlights: [
            'Trained custom CNN models on 20K+ agricultural images',
            'Optimized model size from 150MB to 8MB for mobile deployment',
            'Built offline mode for areas with poor connectivity',
            'Achieved sub-2-second inference time on mid-range devices',
        ],
        learnings: [
            'Model accuracy means nothing without deployment practicality',
            'Offline ML requires aggressive optimization',
            'User feedback loops improve models faster than more training data',
        ],
        gradient: 'from-emerald-600 to-teal-600',
    },
]

export function CaseStudiesSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="case-studies" className="py-32 relative bg-muted/20">
            <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Deep Dive:{' '}
                        <span className="text-gradient bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        The challenges, solutions, and learnings from shipping real products
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}

type CaseStudy = {
    id: string
    title: string
    tagline: string
    problem: string
    solution: string
    owned: string[]
    highlights: string[]
    learnings: string[]
    gradient: string
}

function CaseStudyCard({ study, index, inView }: { study: CaseStudy; index: number; inView: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border border-border rounded-2xl overflow-hidden bg-card"
        >
            {/* Header - Always Visible */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full p-8 text-left hover:bg-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={isExpanded}
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${study.gradient} text-white text-xs font-semibold rounded-full mb-3`}>
                            Case Study
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                        <p className="text-muted-foreground">{study.tagline}</p>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </div>
            </button>

            {/* Expandable Content */}
            <motion.div
                initial={false}
                animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="px-8 pb-8 space-y-8 border-t border-border pt-8">
                    {/* Problem */}
                    <div>
                        <h4 className="font-semibold text-lg mb-3 text-red-500">❌ Problem</h4>
                        <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>

                    {/* Solution */}
                    <div>
                        <h4 className="font-semibold text-lg mb-3 text-green-500">✅ Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    {/* What I Owned */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">🔧 What I Owned</h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {study.owned.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Engineering Highlights */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">⚡ Engineering Highlights</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            {study.highlights.map((highlight: string, i: number) => (
                                <div key={i} className="p-4 bg-muted rounded-lg border border-border">
                                    <p className="text-sm">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Learnings */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">💡 Key Learnings</h4>
                        <div className="space-y-3">
                            {study.learnings.map((learning: string, i: number) => (
                                <div key={i} className="p-4 bg-accent rounded-lg italic text-sm">
                                    "{learning}"
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
