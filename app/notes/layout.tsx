import type { Metadata } from 'next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
    title: 'Engineering Notes | Arup Biswas',
    description: 'Technical articles on React Native, mobile development, offline-first architecture, and full-stack engineering.',
    keywords: ['React Native', 'Mobile Development', 'Engineering Blog', 'Technical Articles', 'Software Architecture'],
    openGraph: {
        title: 'Engineering Notes | Arup Biswas',
        description: 'Lessons from building production mobile and web applications.',
        type: 'website',
    },
}

export default function NotesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
