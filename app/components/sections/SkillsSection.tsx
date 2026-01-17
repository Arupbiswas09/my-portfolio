'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Rocket, Sparkles } from 'lucide-react'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

type Skill = {
    icon: ReactNode
    title: string
    philosophy: string
    highlights: string[]
    gradient: string
}

const skills: Skill[] = [
    {
        icon: <Code2 className="w-8 h-8" />,
        title: 'Mobile Engineering',
        philosophy: 'Build once, deploy everywhere—with native performance',
        highlights: [
            'React Native architecture from Expo to bare workflow',
            'Offline-first systems with intelligent sync',
            'App Store & Play Store deployment mastery',
            'Performance optimization & crashproofing',
        ],
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: 'Frontend & Web',
        philosophy: 'Pixel-perfect UIs that feel effortless',
        highlights: [
            'Next.js & React with TypeScript',
            'Responsive design & accessibility',
            'State management (Redux, React Query)',
            'SEO optimization & web vitals',
        ],
        gradient: 'from-purple-600 to-pink-600',
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: 'Backend & APIs',
        philosophy: 'Scalable systems that never sleep',
        highlights: [
            'RESTful API design & integration',
            'Firebase, Django, Node.js',
            'Database modeling & optimization',
            'Authentication & security patterns',
        ],
        gradient: 'from-emerald-600 to-teal-600',
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: 'AI & Data',
        philosophy: 'Intelligence that solves real problems',
        highlights: [
            'TensorFlow & ML model integration',
            'Computer vision & image recognition',
            'Data pipelines & analytics',
            'AI-powered features in production apps',
        ],
        gradient: 'from-orange-600 to-red-600',
    },
]

export function SkillsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="skills" className="py-32 relative">
            <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        What I Build &{' '}
                        <span className="text-gradient bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                            Care About
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Quality, performance, and user experience aren't negotiable
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.title} skill={skill} index={index} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function SkillCard({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-8 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all duration-300"
        >
            {/* Gradient glow on hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

            <div className="relative space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.gradient} text-white`}>
                    {skill.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold">{skill.title}</h3>

                {/* Philosophy */}
                <p className="text-muted-foreground italic">&ldquo;{skill.philosophy}&rdquo;</p>

                {/* Highlights */}
                <ul className="space-y-2 pt-2">
                    {skill.highlights.map((highlight, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{highlight}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}
