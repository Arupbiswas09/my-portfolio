'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function ContactSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

            {/* Animated orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div ref={ref} className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        Let's Build Something{' '}
                        <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Meaningful
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I'm open to remote & global opportunities in React Native, Mobile Engineering, and Full-Stack roles where quality and ownership matter.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6 mb-12"
                >
                    <ContactCard
                        icon={<Mail className="w-6 h-6" />}
                        label="Email"
                        value="myarupslg@gmail.com"
                        href="mailto:myarupslg@gmail.com"
                        gradient="from-blue-600 to-cyan-600"
                    />
                    <ContactCard
                        icon={<Github className="w-6 h-6" />}
                        label="GitHub"
                        value="@Arupbiswas09"
                        href="https://github.com/Arupbiswas09"
                        gradient="from-purple-600 to-pink-600"
                    />
                    <ContactCard
                        icon={<Linkedin className="w-6 h-6" />}
                        label="LinkedIn"
                        value="Arup Biswas"
                        href="https://www.linkedin.com/in/arup-biswas-87bb25269"
                        gradient="from-emerald-600 to-teal-600"
                    />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="mailto:myarupslg@gmail.com"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                    >
                        <span>Let's Talk</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

function ContactCard({ icon, label, value, href, gradient }: any) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.05 }}
            className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300"
        >
            <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} text-white mb-4`}>
                {icon}
            </div>
            <p className="text-sm text-muted-foreground mb-1">{label}</p>
            <p className="font-semibold group-hover:text-primary transition-colors">{value}</p>
        </motion.a>
    )
}
