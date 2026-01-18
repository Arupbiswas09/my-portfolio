'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe, Smartphone } from 'lucide-react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const projects = [
    {
        id: 'inbo',
        title: 'Inbo — Newsletter & Content Platform',
        company: 'Thatha Business Development LLP (Quokka for Good LLC, USA)',
        role: 'Lead Mobile Application Developer & Full-Stack Engineer (Remote)',
        description: 'Production-grade newsletter and content-reading platform helping users discover, read, and manage newsletters across Web, iOS, and Android with offline access and analytics-driven insights.',
        tech: ['React Native', 'RN CLI (New Arch)', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Firebase'],
        links: {
            web: 'https://inbo-web.netlify.app',
            ios: 'https://apps.apple.com/in/app/inbo-club/id6747464212',
            android: 'https://play.google.com/store/apps/details?id=club.inbo.newsletter',
        },
        image: '/projects/inbo-web.png',
        gradient: 'from-blue-600 to-purple-600',
        highlights: ['100K+ LOC codebase', 'Expo → RN CLI migration', 'Offline-first architecture'],
    },
    {
        id: 'farmaid',
        title: 'FarmAid — AI Disease Recognition',
        company: 'Academic Project',
        role: 'ML Engineer & Mobile Developer',
        description: 'AI-powered mobile application for detecting crop and livestock diseases using image-based machine learning with ~96% accuracy for crops and ~80% for livestock.',
        tech: ['Flutter', 'TensorFlow', 'Python', 'Flask', 'REST APIs'],
        links: {
            github: 'https://github.com/Arupbiswas09/Crop_and_livestock_disease_prediction_app',
        },
        image: '/projects/flutter-disease.png',
        gradient: 'from-emerald-600 to-teal-600',
        highlights: ['96% crop accuracy', '8MB optimized model', 'Offline ML inference'],
    },
]

export function ProductsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="products" className="py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

            <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Products I've Shipped to{' '}
                        <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Real Users
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Production-grade applications used by thousands, deployed across Web, iOS, and Android
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="grid lg:grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

type Project = {
    id: string
    title: string
    company: string
    role: string
    description: string
    tech: string[]
    links: {
        web?: string
        ios?: string
        android?: string
        github?: string
    }
    image: string
    gradient: string
    highlights: string[]
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [cardRef, cardInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={cardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden motion-reduce:hover:transform-none"
        >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left: Content */}
                <div className="space-y-6">
                    <div>
                        <p className="text-xs text-muted-foreground mb-2">{project.company}</p>
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                            {project.role}
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.highlights.map((highlight: string) => (
                                <span key={highlight} className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs rounded-full">
                                    ✓ {highlight}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-4">
                        {project.links.web && (
                            <a
                                href={project.links.web}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                            >
                                <Globe className="w-4 h-4" />
                                Web App
                            </a>
                        )}
                        {project.links.ios && (
                            <a
                                href={project.links.ios}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                            >
                                <Smartphone className="w-4 h-4" />
                                App Store
                            </a>
                        )}
                        {project.links.android && (
                            <a
                                href={project.links.android}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                            >
                                <Smartphone className="w-4 h-4" />
                                Play Store
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Source Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-2xl"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
