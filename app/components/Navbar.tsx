'use client'

import { motion, useScroll } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
    { href: '#products', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#timeline', label: 'Journey' },
    { href: '#contact', label: 'Contact' },
]

export function Navbar() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)
        const unsubscribe = scrollY.on('change', (latest) => {
            setScrolled(latest > 100)
        })
        return () => unsubscribe()
    }, [scrollY])

    if (!mounted) return null

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            Arup Biswas
                        </motion.span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/file/d/1wvF-RBDR2jCjEs_C7hSm15D3XhNfaTqo/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg border border-border hover:bg-accent"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
