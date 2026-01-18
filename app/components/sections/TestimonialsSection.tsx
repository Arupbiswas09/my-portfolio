'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface Testimonial {
    quote: string
    author: string
    role: string
    gradient: string
}

const testimonials: Testimonial[] = [
    {
        quote: "Arup took full ownership of complex mobile features and handled production releases with confidence. He approaches problems with a strong product mindset.",
        author: "Team Lead",
        role: "Thatha Business Development LLP",
        gradient: 'from-blue-600 to-purple-600',
    },
    {
        quote: "Very reliable React Native developer with deep understanding of architecture and real-world constraints.",
        author: "Senior Engineer",
        role: "Teammate",
        gradient: 'from-emerald-600 to-teal-600',
    },
]

export function TestimonialsSection() {
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
        <section id="testimonials" className="py-16 sm:py-24 lg:py-32 relative bg-muted/20" aria-labelledby="testimonials-heading">
            <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: reducedMotion ? 0 : 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">What People Say</span>
                        <Star className="w-4 h-4 fill-current" />
                    </motion.div>
                    
                    <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Trusted by{' '}
                        <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                            Colleagues
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Feedback from people I've worked with
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.2 + index * 0.15 }}
                            whileHover={reducedMotion ? {} : { y: -4 }}
                            className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card"
                        >
                            {/* Quote icon */}
                            <div className={`absolute -top-3 -left-3 p-3 rounded-full bg-gradient-to-br ${testimonial.gradient} text-white shadow-lg`}>
                                <Quote className="w-4 h-4" />
                            </div>

                            {/* Quote content */}
                            <blockquote className="mb-6 pt-4">
                                <p className="text-lg leading-relaxed text-foreground italic">
                                    "{testimonial.quote}"
                                </p>
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{testimonial.author}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
