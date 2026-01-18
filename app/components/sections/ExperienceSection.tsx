'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface Experience {
    company: string
    role: string
    type: string
    period: string
    location: string
    description: string
    gradient: string
}

interface Education {
    institution: string
    degree: string
    field: string
    period: string
    location: string
}

const experiences: Experience[] = [
    {
        company: 'Thatha Business Development LLP',
        role: 'Lead Mobile Application Developer & Full-Stack Engineer',
        type: 'Remote',
        period: 'July 2025 – Present',
        location: 'Quokka for Good LLC, USA',
        description: 'Sole lead developer for Inbo mobile apps (iOS & Android) and full-stack ownership of Inbo Web 2.0. Architecture, migration, deployment, and releases.',
        gradient: 'from-blue-600 to-purple-600',
    },
    {
        company: 'Esutra',
        role: 'Mobile Application Developer Intern / Software Engineer Intern',
        type: 'Full-time Internship',
        period: 'April 2025 – June 2025 (3 months)',
        location: 'India',
        description: 'React Native mobile app development, building mobile features and contributing to production codebase.',
        gradient: 'from-emerald-600 to-teal-600',
    },
]

const education: Education = {
    institution: 'Siliguri Institute of Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    period: '2021 – 2025',
    location: 'West Bengal, India',
}

export function ExperienceSection() {
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
        <section id="experience" className="py-16 sm:py-24 lg:py-32 relative" aria-labelledby="experience-heading">
            <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: reducedMotion ? 0 : 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 id="experience-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Experience &{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        My professional journey and academic background
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Experience Column */}
                    <div>
                        <motion.div
                            initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.1 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">Work Experience</h3>
                        </motion.div>

                        <div className="space-y-4">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.company}
                                    initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.2 + index * 0.1 }}
                                    className="p-5 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <h4 className="font-bold text-lg">{exp.company}</h4>
                                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r ${exp.gradient} text-white`}>
                                            {exp.type}
                                        </span>
                                    </div>
                                    <p className="text-primary font-medium text-sm mb-2">{exp.role}</p>
                                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {exp.location}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <motion.div
                            initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.1 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">Education</h3>
                        </motion.div>

                        <motion.div
                            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.3 }}
                            className="p-6 rounded-xl border border-border bg-card"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shrink-0">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{education.institution}</h4>
                                    <p className="text-primary font-medium mb-1">{education.degree}</p>
                                    <p className="text-sm text-muted-foreground mb-3">{education.field}</p>
                                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {education.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {education.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
