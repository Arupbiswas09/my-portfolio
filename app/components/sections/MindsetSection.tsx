'use client'

import { motion } from 'framer-motion'
import { CloudOff, Lock, Rocket, Target } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const mindsets = [
    {
        icon: <CloudOff className="w-6 h-6" />,
        title: 'Offline > Online',
        description: 'Network failures shouldn\'t stop user productivity',
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: 'Security by Default',
        description: 'Never store tokens in AsyncStorage. Use Keychain.',
        gradient: 'from-purple-600 to-pink-600',
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: 'Ship > Perfect',
        description: 'Beta with real users beats perfection in isolation',
        gradient: 'from-orange-600 to-red-600',
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Ownership Mindset',
        description: 'If I build it, I deploy it. I monitor it. I fix it.',
        gradient: 'from-emerald-600 to-teal-600',
    },
]

export function MindsetSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="mindset" className="py-32 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        How I Think as an{' '}
                        <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Engineer
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Principles that guide every line of code I write
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mindsets.map((mindset, index) => (
                        <MindsetCard key={mindset.title} mindset={mindset} index={index} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function MindsetCard({ mindset, index, inView }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300"
        >
            {/* Gradient glow */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${mindset.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

            <div className="relative space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${mindset.gradient} text-white`}>
                    {mindset.icon}
                </div>

                {/* Content */}
                <div>
                    <h3 className="font-bold text-lg mb-2">{mindset.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {mindset.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
