'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Download, Terminal } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

// Floating tech icons
function FloatingTechIcons({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
    const techs = [
        { name: 'React', color: '#61DAFB', x: '10%', y: '20%', delay: 0 },
        { name: 'TS', color: '#3178C6', x: '85%', y: '15%', delay: 0.5 },
        { name: 'Node', color: '#339933', x: '5%', y: '70%', delay: 1 },
        { name: 'Next', color: '#FFFFFF', x: '90%', y: '65%', delay: 1.5 },
    ]

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {techs.map((tech) => (
                <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ delay: tech.delay + 1, duration: 0.5 }}
                    className="absolute"
                    style={{ left: tech.x, top: tech.y }}
                >
                    <motion.div
                        animate={prefersReducedMotion ? {} : {
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: tech.delay,
                        }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-xs font-bold shadow-lg"
                        style={{ color: tech.color }}
                    >
                        {tech.name}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    // Mouse parallax for mockups (subtle)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    useEffect(() => {
        if (prefersReducedMotion) return

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            mouseX.set((clientX / innerWidth - 0.5) * 10)
            mouseY.set((clientY / innerHeight - 0.5) * 10)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY, prefersReducedMotion])

    const springConfig = { stiffness: 100, damping: 30 }
    const parallaxX = useSpring(mouseX, springConfig)
    const parallaxY = useSpring(mouseY, springConfig)

    return (
        <section
            ref={ref}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/50"
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* Floating tech icons */}
            <FloatingTechIcons prefersReducedMotion={prefersReducedMotion} />

            <motion.div
                style={{ y: prefersReducedMotion ? 0 : y, opacity }}
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-6 lg:space-y-8"
                    >
                        {/* Terminal-style intro */}
                        <motion.div
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm"
                        >
                            <Terminal className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-muted-foreground">Building in production</span>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                                I Build{' '}
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                    Production-Ready
                                </span>{' '}
                                Mobile & Web Apps
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
                        >
                            3+ years experience shipping real products — from
                            architecture to App Store & Play Store releases. Based in India, open to remote & global roles.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-2 text-sm text-muted-foreground"
                        >
                            {['React Native', 'Next.js', 'TypeScript', 'Offline-first', 'AI-powered'].map(
                                (tech, i) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                                        whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                                        className="px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                )
                            )}
                        </motion.div>

                        {/* Social Proof Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 0.6 }}
                            className="flex flex-wrap items-center gap-6 py-4 border-y border-border/50"
                        >
                            {[
                                { value: '10K+', label: 'Users' },
                                { value: '3', label: 'Production Apps' },
                                { value: '100K+', label: 'Lines of Code' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.95, duration: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            {/* Primary CTA */}
                            <motion.a
                                href="#case-studies"
                                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                                className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                            >
                                View Case Studies
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform motion-reduce:transform-none" />
                            </motion.a>
                            {/* Secondary CTA */}
                            <motion.a
                                href="https://drive.google.com/file/d/1DoWASNGI8k8qD_RPBorgvSwpuZHA9I6A/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                            >
                                Download Resume
                                <Download className="w-4 h-4" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right column - Mockups */}
                    <div className="relative h-[450px] sm:h-[500px] lg:h-[600px]">{/* Web Dashboard mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                            style={{
                                x: prefersReducedMotion ? 0 : parallaxX,
                                y: prefersReducedMotion ? 0 : parallaxY,
                            }}
                            className="absolute top-[160px] sm:top-[180px] right-0 w-[75%] z-10 hidden sm:block"
                        >
                            <motion.div
                                animate={prefersReducedMotion ? {} : {
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
                                    <Image
                                        src="/projects/inbo-website.png"
                                        alt="Inbo Web Dashboard - Admin panel for mobile app management"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Mobile App mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                            style={{
                                x: prefersReducedMotion ? 0 : useTransform(parallaxX, (v) => v * -0.5),
                                y: prefersReducedMotion ? 0 : useTransform(parallaxY, (v) => v * -0.5),
                            }}
                            className="absolute bottom-0 left-0 w-[35%] sm:w-[32%] z-20"
                        >
                            <motion.div
                                animate={prefersReducedMotion ? {} : {
                                    y: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                }}
                            >
                                <div className="relative aspect-[9/19.5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-border shadow-2xl bg-card">
                                    <Image
                                        src="/projects/inbo-mobile-expo.png"
                                        alt="Inbo Mobile App - React Native production app"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Glowing orb effect */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl motion-safe:animate-pulse" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={prefersReducedMotion ? {} : {
                        y: [0, 8, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center"
                >
                    <motion.div
                        animate={prefersReducedMotion ? {} : {
                            y: [0, 12, 0],
                            opacity: [1, 0.3, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
