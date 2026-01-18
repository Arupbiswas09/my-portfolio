import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            href: 'https://github.com/Arupbiswas09',
            label: 'GitHub Profile',
            icon: Github,
        },
        {
            href: 'https://www.linkedin.com/in/arup-biswas-87bb25269',
            label: 'LinkedIn Profile',
            icon: Linkedin,
        },
        {
            href: 'mailto:myarupslg@gmail.com',
            label: 'Send Email',
            icon: Mail,
        },
        {
            href: '/Arup_Biswas_Resume.pdf',
            label: 'Resume PDF',
            icon: FileText,
        },
    ]

    return (
        <footer className="py-8 md:py-12 border-t border-border bg-muted/30" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Location Banner */}
                <div className="text-center mb-6 pb-6 border-b border-border">
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Based in India (UTC+5:30)</span>
                        <span className="mx-2">•</span>
                        <span className="text-primary font-medium">Open to Remote & Global Roles</span>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* Brand & Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Arup Biswas. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Built with Next.js, TypeScript & Tailwind CSS
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer navigation" className="flex justify-center gap-6">
                        <Link
                            href="/"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                        >
                            Home
                        </Link>
                        <Link
                            href="/notes"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                        >
                            Notes
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-end gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                                <link.icon className="h-5 w-5" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
