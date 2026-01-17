import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/components/providers/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
    title: 'Arup Biswas | Lead Mobile & Full-Stack Engineer',
    description: 'Production-ready mobile & web applications. React Native, Next.js, TypeScript. Ship fast, ship right.',
    keywords: ['React Native', 'Next.js', 'TypeScript', 'Mobile Development', 'Full Stack Engineer'],
    authors: [{ name: 'Arup Biswas' }],
    openGraph: {
        title: 'Arup Biswas | Lead Mobile & Full-Stack Engineer',
        description: 'Building production apps from architecture to App Store releases',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.variable} font-sans antialiased`}>
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
