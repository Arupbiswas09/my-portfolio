'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Briefcase, Code, Trophy } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface TimelineEntry {
    year: string
    title: string
    description: string
    icon: React.ReactNode
    color: string
}

const timeline: TimelineEntry[] = [
    {
        year: '2022',
        title: 'Robotics & ML Foundations',
        description: 'Won 2 consecutive robotics competitions. Started exploring machine learning and AI.',
        icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />,
        color: 'from-yellow-600 to-orange-600',
    },
    {
        year: '2023',
        title: 'Mobile Development Journey',
        description: 'Dove deep into React Native and Flutter. Built first production app with ML integration.',
        icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />,
        color: 'from-blue-600 to-purple-600',
    },
    {
        year: '2024',
        title: 'Production Apps at Scale',
        description: 'Led development of Inbo. Migrated to React Native New Architecture. Shipped to thousands of users.',
        icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />,
        color: 'from-emerald-600 to-teal-600',
    },
    {
        year: '2025',
        title: 'Lead Developer (Inbo)',
        description: 'Sole lead mobile developer. Managing full product lifecycle across Web, iOS, and Android.',
        icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />,
        color: 'from-purple-600 to-pink-600',
    },
]

export function TimelineSection() {
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
        <section id="timeline" className="py-16 sm:py-24 lg:py-32 relative bg-muted/10" aria-labelledby="timeline-heading">
            <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: reducedMotion ? 0 : 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 id="timeline-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                            The Journey
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground">
                        From robotics competitions to shipping production apps
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div 
                        className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-600 opacity-20"
                        aria-hidden="true"
                    />

                    <div className="space-y-8 sm:space-y-12" role="list">
                        {timeline.map((item, index) => (
                            <TimelineItem key={item.year} item={item} index={index} inView={inView} reducedMotion={reducedMotion} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

interface TimelineItemProps {
    item: TimelineEntry
    index: number
    inView: boolean
    reducedMotion: boolean
}

function TimelineItem({ item, index, inView, reducedMotion }: TimelineItemProps) {
    return (
        <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : index * 0.15 }}
            className="relative flex gap-4 sm:gap-8 group"
            role="listitem"
        >
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0">
                <motion.div
                    whileHover={reducedMotion ? {} : { scale: 1.1 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                    aria-hidden="true"
                >
                    {item.icon}
                </motion.div>
            </div>

            {/* Content */}
            <motion.div
                whileHover={reducedMotion ? {} : { x: 4 }}
                className="flex-1 pb-8 sm:pb-12"
            >
                <div className="p-4 sm:p-6 rounded-xl border border-border bg-card group-hover:bg-accent/50 transition-all duration-300">
                    <span className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r ${item.color} text-white text-xs sm:text-sm font-bold rounded-full mb-2 sm:mb-3`}>
                        <time dateTime={item.year}>{item.year}</time>
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}
