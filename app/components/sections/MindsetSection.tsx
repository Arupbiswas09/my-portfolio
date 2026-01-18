'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CloudOff, Lock, Rocket, Target } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface Mindset {
    icon: React.ReactNode
    title: string
    description: string
    gradient: string
}

const mindsets: Mindset[] = [
    {
        icon: <CloudOff className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
        title: 'Offline > Online',
        description: 'Network failures shouldn\'t stop user productivity',
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
        title: 'Security by Default',
        description: 'Never store tokens in AsyncStorage. Use Keychain.',
        gradient: 'from-purple-600 to-pink-600',
    },
    {
        icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
        title: 'Ship > Perfect',
        description: 'Beta with real users beats perfection in isolation',
        gradient: 'from-orange-600 to-red-600',
    },
    {
        icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
        title: 'Ownership Mindset',
        description: 'If I build it, I deploy it. I monitor it. I fix it.',
        gradient: 'from-emerald-600 to-teal-600',
    },
]

export function MindsetSection() {
    const [reducedMotion, setReducedMotion] = useState(false)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setReducedMotion(mediaQuery.matches)
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    return (
        <section id="mindset" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
            {/* Animated background - respect reduced motion */}
            <div className="absolute inset-0" aria-hidden="true">
                <div className={`absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl ${reducedMotion ? '' : 'motion-safe:animate-pulse'}`} />
                <div className={`absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl ${reducedMotion ? '' : 'motion-safe:animate-pulse'}`} />
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: reducedMotion ? 0 : 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                        How I Think as an{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Engineer
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Principles that guide every line of code I write
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {mindsets.map((mindset, index) => (
                        <MindsetCard key={mindset.title} mindset={mindset} index={index} inView={inView} reducedMotion={reducedMotion} />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface MindsetCardProps {
    mindset: Mindset
    index: number
    inView: boolean
    reducedMotion: boolean
}

function MindsetCard({ mindset, index, inView, reducedMotion }: MindsetCardProps) {
    return (
        <motion.article
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : index * 0.1 }}
            whileHover={reducedMotion ? {} : { y: -4, scale: 1.02 }}
            className="group relative p-5 sm:p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary"
        >
            {/* Gradient glow */}
            <div 
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${mindset.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                aria-hidden="true"
            />

            <div className="relative space-y-3 sm:space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-2.5 sm:p-3 rounded-lg bg-gradient-to-br ${mindset.gradient} text-white`}>
                    {mindset.icon}
                </div>

                {/* Content */}
                <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{mindset.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {mindset.description}
                    </p>
                </div>
            </div>
        </motion.article>
    )
}
