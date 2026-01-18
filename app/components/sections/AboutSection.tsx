'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Terminal, User, Coffee, Code, Rocket } from 'lucide-react'

// Terminal typing animation component
function TerminalTypeWriter({ inView }: { inView: boolean }) {
    const [displayedLines, setDisplayedLines] = useState<string[]>([])
    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    const terminalCommands = useMemo(() => [
        { command: '$ whoami', output: 'arup_biswas' },
        { command: '$ cat about.txt', output: '' },
        { command: '', output: "Lead Mobile & Full-Stack Engineer" },
        { command: '', output: "3+ years shipping production apps" },
        { command: '', output: '' },
        { command: '', output: "Recently led development at Thatha Business Dev LLP" },
        { command: '', output: "(part of Quokka for Good LLC, USA)" },
        { command: '', output: '' },
        { command: '', output: "Built Inbo: Cross-platform newsletter platform" },
        { command: '', output: "Web • iOS • Android — 10K+ users" },
        { command: '', output: '' },
        { command: '$ cat values.txt', output: '' },
        { command: '', output: "• Offline-first & clean architecture" },
        { command: '', output: "• Security by default" },
        { command: '', output: "• Ship > Perfect" },
        { command: '', output: '' },
        { command: '$ status', output: 'Open to remote & global opportunities 🚀' },
    ], [])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)
    }, [])

    useEffect(() => {
        if (prefersReducedMotion || !inView) {
            setDisplayedLines(terminalCommands.map(item => 
                item.command ? `${item.command}${item.output ? '\n' + item.output : ''}` : item.output
            ))
            return
        }

        if (currentLineIndex >= terminalCommands.length) return

        const currentItem = terminalCommands[currentLineIndex]
        const currentText = currentItem.command || currentItem.output
        const isCommand = !!currentItem.command
        const hasOutput = isCommand && currentItem.output

        if (currentCharIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines((prev) => {
                    const newLines = [...prev]
                    if (isCommand) {
                        newLines[currentLineIndex] = currentText.slice(0, currentCharIndex + 1)
                    } else {
                        newLines[currentLineIndex] = currentText.slice(0, currentCharIndex + 1)
                    }
                    return newLines
                })
                setCurrentCharIndex((prev) => prev + 1)
            }, isCommand ? 80 : currentText.startsWith('•') ? 30 : 25)
            return () => clearTimeout(timeout)
        } else if (hasOutput && currentCharIndex === currentText.length) {
            // Add output after command
            const timeout = setTimeout(() => {
                setDisplayedLines((prev) => {
                    const newLines = [...prev]
                    newLines[currentLineIndex] = `${currentItem.command}\n${currentItem.output}`
                    return newLines
                })
                setCurrentLineIndex((prev) => prev + 1)
                setCurrentCharIndex(0)
            }, 500)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex((prev) => prev + 1)
                setCurrentCharIndex(0)
            }, currentText === '' ? 50 : 200)
            return () => clearTimeout(timeout)
        }
    }, [currentLineIndex, currentCharIndex, inView, prefersReducedMotion, terminalCommands])

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 530)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">terminal — zsh</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm bg-gray-900 min-h-[350px] max-h-[400px] overflow-y-auto">
                {displayedLines.map((line, index) => {
                    const isCommand = line.startsWith('$')
                    const parts = line.split('\n')
                    
                    return (
                        <motion.div 
                            key={index} 
                            className="mb-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1 }}
                        >
                            {parts.map((part, partIndex) => {
                                if (partIndex === 0 && isCommand) {
                                    return (
                                        <div key={partIndex} className="text-green-400 mb-1">
                                            <span className="text-blue-400">➜</span> <span className="text-cyan-400">~</span> {part}
                                        </div>
                                    )
                                } else if (part.startsWith('•')) {
                                    return (
                                        <div key={partIndex} className="text-yellow-300 leading-relaxed ml-2">
                                            {part}
                                        </div>
                                    )
                                } else if (part.includes('🚀')) {
                                    return (
                                        <div key={partIndex} className="text-green-300 leading-relaxed font-medium">
                                            {part}
                                        </div>
                                    )
                                } else if (part.includes('•')) {
                                    return (
                                        <div key={partIndex} className="text-blue-300 leading-relaxed">
                                            {part}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={partIndex} className="text-gray-300 leading-relaxed">
                                            {part}
                                        </div>
                                    )
                                }
                            })}
                        </motion.div>
                    )
                })}
                {currentLineIndex < terminalCommands.length && showCursor && (
                    <motion.span 
                        className="inline-block w-2 h-5 bg-green-400"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                )}
            </div>
        </div>
    )
}

export function AboutSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
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
        <section ref={ref} className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10" />
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative z-10"
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <User className="w-4 h-4" />
                        <span className="text-sm font-medium">About Me</span>
                        <Code className="w-4 h-4" />
                    </motion.div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Meet the{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            Engineer
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Passionate about building products that make a real difference
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
                    {/* Profile Picture Side */}
                    <motion.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-lg"></div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                        
                        {/* Profile Card */}
                        <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl">
                            <motion.div
                                className="relative mb-6"
                                whileHover={prefersReducedMotion ? {} : { scale: 1.02, rotateY: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-background relative">
                                    <Image
                                        src="/profile.jpeg"
                                        alt="Arup Biswas"
                                        width={192}
                                        height={192}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        priority
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </motion.div>
                            
                            <div className="text-center">
                                <motion.h3 
                                    className="text-2xl font-bold mb-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 }}
                                >
                                    Arup Biswas
                                </motion.h3>
                                <motion.p 
                                    className="text-primary font-medium mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 }}
                                >
                                    Lead Mobile & Full-Stack Engineer
                                </motion.p>
                                
                                {/* Status indicators */}
                                <motion.div 
                                    className="space-y-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                        <motion.div 
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        Available for opportunities
                                    </div>
                                    
                                    <div className="flex justify-center gap-4 text-sm">
                                        <motion.div 
                                            className="flex items-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <Rocket className="w-4 h-4 text-blue-500" />
                                            <span>Production-Ready</span>
                                        </motion.div>
                                        <motion.div 
                                            className="flex items-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <Coffee className="w-4 h-4 text-orange-500" />
                                            <span>Remote-First</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Terminal Side */}
                    <motion.div
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <TerminalTypeWriter inView={inView} />
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16 relative z-10"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Terminal className="w-5 h-5" />
                        Let's Build Something Amazing
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}