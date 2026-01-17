import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Section } from './ui/Section';

const ROLES = [
    "Lead Mobile & Full-Stack Engineer",
    "React Native & Next.js Expert",
    "Scalable Systems Architect",
    "Production-Ready App Builder"
];

export const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
            } else {
                const nextText = isDeleting
                    ? currentRole.substring(0, text.length - 1)
                    : currentRole.substring(0, text.length + 1);
                setText(nextText);
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <Section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col justify-center min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-20 right-0 -z-10 opacity-20 overflow-hidden pointer-events-none"
                >
                    <div className="w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
                </motion.div>

                <div className="max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-blue-400 font-medium tracking-wide mb-4"
                    >
                        HELLO, I'M ARUP BISWAS
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight min-h-[80px] md:min-h-[auto] flex items-center"
                    >
                        <span className="text-gradient-primary">
                            {text}
                        </span>
                        <span className="animate-pulse text-blue-400">|</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl"
                    >
                        Building production-ready mobile & web applications for real users.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-slate-400 mb-10 max-w-3xl leading-relaxed"
                    >
                        I design, build, and deploy scalable React Native & Next.js applications — from architecture to App Store / Play Store releases, with a strong focus on performance, security, and offline-first systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5" />
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1wvF-RBDR2jCjEs_C7hSm15D3XhNfaTqo/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 border border-slate-700"
                        >
                            Download Resume
                            <Download className="w-5 h-5" />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent hover:bg-white/5 text-white rounded-lg font-semibold transition-all flex items-center gap-2 border border-transparent hover:border-slate-700"
                        >
                            Contact Me
                            <Mail className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
