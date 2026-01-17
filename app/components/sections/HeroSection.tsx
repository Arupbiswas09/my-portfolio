'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/50"
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
            >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                I Build{' '}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                                    Production-Ready
                                </span>{' '}
                                Mobile & Web Apps
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl text-muted-foreground max-w-2xl"
                        >
                            Lead Mobile & Full-Stack Engineer shipping real products — from
                            architecture to App Store & Play Store releases.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-2 text-sm text-muted-foreground"
                        >
                            {['React Native', 'Next.js', 'TypeScript', 'Offline-first', 'AI-powered systems'].map(
                                (tech, i) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#products"
                                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2"
                            >
                                View My Work
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1wvF-RBDR2jCjEs_C7hSm15D3XhNfaTqo/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors flex items-center gap-2"
                            >
                                Download Resume
                                <Download className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right column - Floating mockups */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative h-[600px] hidden lg:block"
                    >
                        {/* Web mockup - Back */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute top-0 right-0 w-4/5 z-10"
                        >
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-2xl">
                                <Image
                                    src="/projects/inbo-web.png"
                                    alt="Inbo Web Platform"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Mobile mockup 1 - Front left */}
                        <motion.div
                            animate={{
                                y: [0, 15, 0],
                                rotate: [-2, 2, -2],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 0.5,
                            }}
                            className="absolute bottom-20 left-0 w-1/3 z-30"
                        >
                            <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden border-4 border-border shadow-2xl">
                                <Image
                                    src="/projects/inbo-app-expo.png"
                                    alt="Inbo Mobile App"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Mobile mockup 2 - Front right */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [2, -2, 2],
                            }}
                            transition={{
                                duration: 5.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 1,
                            }}
                            className="absolute bottom-0 right-16 w-1/3 z-20"
                        >
                            <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden border-4 border-border shadow-2xl">
                                <Image
                                    src="/projects/flutter-disease.png"
                                    alt="FarmAid App"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Glowing orb effect */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-foreground"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
