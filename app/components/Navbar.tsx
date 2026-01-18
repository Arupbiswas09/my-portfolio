'use client'

import { motion, useScroll } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#products', label: 'Products' },
    { href: '#skills', label: 'Skills' },
    { href: '/notes', label: 'Notes', isPage: true },
    { href: '#contact', label: 'Contact' },
]

export function Navbar() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const handleNavClick = (href: string, isPage?: boolean) => {
        if (isPage) {
            return // Let Next.js handle page navigation
        }
        
        // If we're not on home page, navigate to home with hash
        if (pathname !== '/') {
            window.location.href = `/${href}`
        } else {
            // We're on home page, smooth scroll to section
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    useEffect(() => {
        setMounted(true)
        const unsubscribe = scrollY.on('change', (latest) => {
            setScrolled(latest > 50)
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
                ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
                : 'bg-transparent'
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg"
                    >
                        <motion.span
                            whileHover={{ scale: 1.02 }}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        >
                            Arup Biswas
                        </motion.span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            item.isPage ? (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href, item.isPage)}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                                >
                                    {item.label}
                                </button>
                            )
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg border border-border hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        {/* Resume Button */}
                        <a
                            href="/Arup_Biswas_Resume.pdf"
                            download
                            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg border border-border hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg border border-border hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden py-4 border-t border-border"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                item.isPage ? (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={item.href}
                                        onClick={() => {
                                            handleNavClick(item.href, item.isPage)
                                            setMobileMenuOpen(false)
                                        }}
                                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2 text-left"
                                    >
                                        {item.label}
                                    </button>
                                )
                            ))}
                            <a
                                href="/Arup_Biswas_Resume.pdf"
                                download
                                className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-center"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    )
}
