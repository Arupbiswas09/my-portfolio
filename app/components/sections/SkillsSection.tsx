'use client'

import { motion } from 'framer-motion'
import { Smartphone, Globe, Server, Brain, Cloud, Star, Zap, Target } from 'lucide-react'
import { ReactNode, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

type TechStack = {
    name: string
    logo: string
    category: string
    bgColor: string
    description: string
    proficiency: number
}

type SkillCategory = {
    icon: ReactNode
    title: string
    description: string
    gradient: string
    techs: TechStack[]
}

const techStacks: TechStack[] = [
    // Frontend
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend', bgColor: 'bg-blue-50 dark:bg-blue-950/20', description: 'UI Library', proficiency: 95 },
    { name: 'Next.js', logo: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg', category: 'Frontend', bgColor: 'bg-gray-50 dark:bg-gray-950/20', description: 'React Framework', proficiency: 90 },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend', bgColor: 'bg-blue-50 dark:bg-blue-950/20', description: 'Type Safety', proficiency: 88 },
    { name: 'Tailwind', logo: 'https://www.svgrepo.com/show/374118/tailwind.svg', category: 'Frontend', bgColor: 'bg-cyan-50 dark:bg-cyan-950/20', description: 'CSS Framework', proficiency: 92 },
    
    // Backend
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend', bgColor: 'bg-green-50 dark:bg-green-950/20', description: 'Runtime', proficiency: 85 },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend', bgColor: 'bg-yellow-50 dark:bg-yellow-950/20', description: 'Programming Language', proficiency: 90 },
    { name: 'Django', logo: 'https://www.svgrepo.com/show/353657/django-icon.svg', category: 'Backend', bgColor: 'bg-green-50 dark:bg-green-950/20', description: 'Web Framework', proficiency: 80 },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Backend', bgColor: 'bg-blue-50 dark:bg-blue-950/20', description: 'Database', proficiency: 82 },
    
    // Mobile
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Mobile', bgColor: 'bg-blue-50 dark:bg-blue-950/20', description: 'Cross Platform', proficiency: 87 },
    { name: 'Expo', logo: 'https://www.svgrepo.com/show/341822/expo.svg', category: 'Mobile', bgColor: 'bg-gray-50 dark:bg-gray-950/20', description: 'Development Platform', proficiency: 85 },
    
    // DevOps & Cloud
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'DevOps', bgColor: 'bg-blue-50 dark:bg-blue-950/20', description: 'Containerization', proficiency: 75 },
    { name: 'AWS', logo: 'https://www.svgrepo.com/show/448266/aws.svg', category: 'DevOps', bgColor: 'bg-orange-50 dark:bg-orange-950/20', description: 'Cloud Services', proficiency: 78 },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'DevOps', bgColor: 'bg-red-50 dark:bg-red-950/20', description: 'Version Control', proficiency: 95 },
    
    // IoT & Hardware
    { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', category: 'IoT', bgColor: 'bg-teal-50 dark:bg-teal-950/20', description: 'Microcontroller', proficiency: 85 },
    { name: 'Raspberry Pi', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg', category: 'IoT', bgColor: 'bg-pink-50 dark:bg-pink-950/20', description: 'Single Board Computer', proficiency: 80 },
]

const skillCategories: SkillCategory[] = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Frontend Development',
        description: 'Creating stunning, responsive user interfaces',
        gradient: 'from-blue-600 to-cyan-600',
        techs: techStacks.filter(tech => tech.category === 'Frontend')
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: 'Backend & APIs',
        description: 'Building scalable server-side solutions',
        gradient: 'from-green-600 to-emerald-600',
        techs: techStacks.filter(tech => tech.category === 'Backend')
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: 'Mobile Development',
        description: 'Cross-platform mobile applications',
        gradient: 'from-purple-600 to-pink-600',
        techs: techStacks.filter(tech => tech.category === 'Mobile')
    },
    {
        icon: <Cloud className="w-6 h-6" />,
        title: 'DevOps & Cloud',
        description: 'Deployment and infrastructure management',
        gradient: 'from-orange-600 to-red-600',
        techs: techStacks.filter(tech => tech.category === 'DevOps')
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: 'IoT & Hardware',
        description: 'Internet of Things and embedded systems',
        gradient: 'from-indigo-600 to-purple-600',
        techs: techStacks.filter(tech => tech.category === 'IoT')
    }
]

export function SkillsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)

        const handler = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches)
        }

        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    return (
        <section ref={ref} id="skills" className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-medium">Tech Stack</span>
                        <Zap className="w-4 h-4" />
                    </motion.div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Technologies I{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            Master & Love
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Building amazing experiences with cutting-edge tools and frameworks
                    </p>
                </motion.div>

                {/* Floating Tech Logos Showcase */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative h-32 overflow-hidden">
                        <motion.div
                            className="flex gap-8 absolute top-1/2 -translate-y-1/2"
                            animate={{ x: [-1200, 0] }}
                            transition={{ 
                                duration: 25, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }}
                        >
                            {[...techStacks, ...techStacks].map((tech, index) => (
                                <motion.div
                                    key={`${tech.name}-${index}`}
                                    className="flex-shrink-0 w-20 h-20 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group hover:scale-110 transition-transform duration-300"
                                    whileHover={{ y: -5, rotate: 5 }}
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={40}
                                        height={40}
                                        className="filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Skill Categories */}
                <div className="space-y-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <CategorySection 
                            key={category.title}
                            category={category}
                            index={categoryIndex}
                            inView={inView}
                            reducedMotion={prefersReducedMotion}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Target className="w-5 h-5" />
                        Let's Build Something Amazing Together
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function CategorySection({ category, index, inView, reducedMotion }: { 
    category: SkillCategory; 
    index: number; 
    inView: boolean; 
    reducedMotion: boolean 
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="space-y-6"
        >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
                <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {category.icon}
                </motion.div>
                <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                </div>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.techs.map((tech, techIndex) => (
                    <TechCard
                        key={tech.name}
                        tech={tech}
                        index={techIndex}
                        inView={inView}
                        reducedMotion={reducedMotion}
                    />
                ))}
            </div>
        </motion.div>
    )
}

function TechCard({ tech, index, inView, reducedMotion }: { 
    tech: TechStack; 
    index: number; 
    inView: boolean; 
    reducedMotion: boolean 
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
            }}
            whileHover={reducedMotion ? {} : { 
                y: -8, 
                scale: 1.05,
                rotateY: 5
            }}
            className={`group relative p-6 rounded-2xl border border-border ${tech.bgColor} hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
        >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-3">
                {/* Logo */}
                <motion.div
                    className="w-12 h-12 mx-auto mb-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                    />
                </motion.div>

                {/* Tech Name */}
                <h4 className="text-lg font-semibold text-center group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                </h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-center">
                    {tech.description}
                </p>

                {/* Proficiency Bar */}
                <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-medium">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${tech.proficiency}%` } : {}}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        />
                    </div>
                </div>
            </div>

            {/* Hover Effects */}
            <motion.div
                className="absolute -inset-px bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ zIndex: -1 }}
            />
        </motion.div>
    )
}
