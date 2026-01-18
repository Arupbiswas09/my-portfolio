'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface ContactCardProps {
    icon: React.ReactNode
    label: string
    value: string
    href: string
    gradient: string
    reducedMotion: boolean
}

export function ContactSection() {
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
        <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" aria-labelledby="contact-heading">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" aria-hidden="true" />

            {/* Animated orbs - respect reduced motion */}
            <div className="absolute inset-0" aria-hidden="true">
                <div className={`absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/20 rounded-full blur-3xl ${reducedMotion ? '' : 'motion-safe:animate-pulse'}`} />
                <div className={`absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl ${reducedMotion ? '' : 'motion-safe:animate-pulse'}`} />
            </div>

            <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: reducedMotion ? 0 : 0.6 }}
                >
                    <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        Let's Build Something{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Meaningful
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
                        I'm open to remote & global opportunities in React Native, Mobile Engineering, and Full-Stack roles where quality and ownership matter.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
                >
                    <ContactCard
                        icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />}
                        label="Email"
                        value="myarupslg@gmail.com"
                        href="mailto:myarupslg@gmail.com"
                        gradient="from-blue-600 to-cyan-600"
                        reducedMotion={reducedMotion}
                    />
                    <ContactCard
                        icon={<Github className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />}
                        label="GitHub"
                        value="@Arupbiswas09"
                        href="https://github.com/Arupbiswas09"
                        gradient="from-purple-600 to-pink-600"
                        reducedMotion={reducedMotion}
                    />
                    <ContactCard
                        icon={<Linkedin className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />}
                        label="LinkedIn"
                        value="Arup Biswas"
                        href="https://www.linkedin.com/in/arup-biswas-87bb25269"
                        gradient="from-emerald-600 to-teal-600"
                        reducedMotion={reducedMotion}
                    />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.4 }}
                >
                    <a
                        href="mailto:myarupslg@gmail.com"
                        className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    >
                        <span>Let's Talk</span>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform motion-reduce:transform-none" aria-hidden="true" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

function ContactCard({ icon, label, value, href, gradient, reducedMotion }: ContactCardProps) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reducedMotion ? {} : { y: -4, scale: 1.02 }}
            className="group p-4 sm:p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label={`${label}: ${value}`}
        >
            <div className={`inline-flex p-2.5 sm:p-3 rounded-lg bg-gradient-to-br ${gradient} text-white mb-3 sm:mb-4`}>
                {icon}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">{label}</p>
            <p className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">{value}</p>
        </motion.a>
    )
}
