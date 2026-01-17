import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Smartphone, Database, Shield, Server, Box, Cpu } from 'lucide-react';

const categories = [
    {
        title: "Core Technologies",
        icon: <Smartphone className="w-5 h-5 text-blue-400" />,
        items: [
            { name: "React Native", slug: "react" },
            { name: "Expo", slug: "expo" },
            { name: "Next.js", slug: "nextdotjs" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Tailwind CSS", slug: "tailwindcss" },
            { name: "NativeWind", slug: "tailwindcss" } // Using tailwind logo for NativeWind
        ]
    },
    {
        title: "State & Data",
        icon: <Database className="w-5 h-5 text-emerald-400" />,
        items: [
            { name: "Redux Toolkit", slug: "redux" },
            { name: "React Query", slug: "reactquery" },
            { name: "REST APIs", slug: null },
            { name: "Offline-first", slug: "sqlite" }
        ]
    },
    {
        title: "Authentication & Security",
        icon: <Shield className="w-5 h-5 text-purple-400" />,
        items: [
            { name: "OAuth 2.0", slug: "google" },
            { name: "Firebase Auth", slug: "firebase" },
            { name: "JWT", slug: "jsonwebtokens" },
            { name: "Secure Storage", slug: null }
        ]
    },
    {
        title: "Backend & Services",
        icon: <Server className="w-5 h-5 text-orange-400" />,
        items: [
            { name: "Django", slug: "django" },
            { name: "Firebase", slug: "firebase" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "Azure", slug: "azure" }
        ]
    },
    {
        title: "DevOps & Tools",
        icon: <Box className="w-5 h-5 text-pink-400" />,
        items: [
            { name: "EAS Build", slug: "expo" },
            { name: "Netlify", slug: "netlify" },
            { name: "Docker", slug: "docker" },
            { name: "GitHub CI/CD", slug: "githubactions" }
        ]
    },
    {
        title: "Testing & Performance",
        icon: <Cpu className="w-5 h-5 text-cyan-400" />,
        items: [
            { name: "Jest", slug: "jest" },
            { name: "FlashList", slug: null },
            { name: "Hermes", slug: null },
            { name: "Mixpanel", slug: "mixpanel" }
        ]
    }
];

export const TechStack = () => {
    return (
        <Section id="tech">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-white mb-16 text-center"
                >
                    Tech Stack
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-2xl hover:bg-slate-800/40 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                                    {cat.icon}
                                </div>
                                <h3 className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors">{cat.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {cat.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-slate-500/50 hover:bg-slate-800 transition-all cursor-default"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {item.slug ? (
                                            <img
                                                src={`https://cdn.simpleicons.org/${item.slug}/white`}
                                                alt={item.name}
                                                className="w-4 h-4 opacity-70 group-hover/pill:opacity-100"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
                                        )}
                                        <span className="text-sm text-slate-300 font-medium">{item.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
