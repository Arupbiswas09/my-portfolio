'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Code, Trophy } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const timeline = [
    {
        year: '2022',
        title: 'Robotics & ML Foundations',
        description: 'Won 2 consecutive robotics competitions. Started exploring machine learning and AI.',
        icon: <Trophy className="w-5 h-5" />,
        color: 'from-yellow-600 to-orange-600',
    },
    {
        year: '2023',
        title: 'Mobile Development Journey',
        description: 'Dove deep into React Native and Flutter. Built first production app with ML integration.',
        icon: <Code className="w-5 h-5" />,
        color: 'from-blue-600 to-purple-600',
    },
    {
        year: '2024',
        title: 'Production Apps at Scale',
        description: 'Led development of Inbo. Migrated to React Native New Architecture. Shipped to thousands of users.',
        icon: <Briefcase className="w-5 h-5" />,
        color: 'from-emerald-600 to-teal-600',
    },
    {
        year: '2025',
        title: 'Lead Developer (Inbo)',
        description: 'Sole lead mobile developer. Managing full product lifecycle across Web, iOS, and Android.',
        icon: <Award className="w-5 h-5" />,
        color: 'from-purple-600 to-pink-600',
    },
]

export function TimelineSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="timeline" className="py-32 relative bg-muted/10">
            <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                            The Journey
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        From robotics competitions to shipping production apps
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-600 opacity-20" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <TimelineItem key={item.year} item={item} index={index} inView={inView} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TimelineItem({ item, index, inView }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex gap-8 group"
        >
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0">
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                >
                    {item.icon}
                </motion.div>
            </div>

            {/* Content */}
            <motion.div
                whileHover={{ x: 8 }}
                className="flex-1 pb-12"
            >
                <div className="p-6 rounded-xl border border-border bg-card group-hover:bg-accent/50 transition-all duration-300">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-bold rounded-full mb-3`}>
                        {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}
