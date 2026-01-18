import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/components/providers/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

const siteUrl = 'https://arupbiswas.dev' // Update with your actual domain

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0c0a1d' },
    ],
}

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Arup Biswas | Lead Mobile & Full-Stack Engineer',
        template: '%s | Arup Biswas',
    },
    description: 'Production-ready mobile & web applications. React Native, Next.js, TypeScript specialist. 7+ years building apps from architecture to App Store releases.',
    keywords: [
        'React Native Developer',
        'Mobile Application Developer',
        'Full-Stack Engineer',
        'Remote Software Engineer',
        'Next.js Developer',
        'TypeScript Expert',
        'iOS Developer',
        'Android Developer',
        'Lead Mobile Engineer',
        'React Developer',
    ],
    authors: [{ name: 'Arup Biswas', url: siteUrl }],
    creator: 'Arup Biswas',
    publisher: 'Arup Biswas',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'Arup Biswas - Portfolio',
        title: 'Arup Biswas | Lead Mobile & Full-Stack Engineer',
        description: 'Building production apps from architecture to App Store releases. React Native, Next.js, TypeScript specialist with 7+ years of experience.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Arup Biswas - Lead Mobile & Full-Stack Engineer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Arup Biswas | Lead Mobile & Full-Stack Engineer',
        description: 'Building production apps from architecture to App Store releases. React Native, Next.js, TypeScript specialist.',
        images: ['/og-image.png'],
        creator: '@arupbiswas', // Update with actual Twitter handle
    },
    alternates: {
        canonical: siteUrl,
    },
    category: 'technology',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={`${outfit.variable} font-sans antialiased`}>
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
