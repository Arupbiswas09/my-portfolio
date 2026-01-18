'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

type Note = {
    slug: string
    title: string
    excerpt: string
    date: string
    readTime: string
    tags: string[]
}

// Placeholder articles - will be replaced with MDX content
const notes: Note[] = [
    {
        slug: 'migrating-expo-to-react-native-cli',
        title: 'Migrating from Expo CLI to React Native CLI (New Architecture)',
        excerpt: 'A practical guide to migrating your Expo managed workflow app to React Native CLI with the new architecture enabled. Covers native module bridging, build configuration, and common pitfalls.',
        date: '2026-01-15',
        readTime: '12 min read',
        tags: ['react-native', 'architecture', 'performance'],
    },
    {
        slug: 'designing-offline-first-mobile-apps',
        title: 'Designing Offline-First Mobile Apps at Scale',
        excerpt: 'How to architect mobile applications that work seamlessly offline. Includes sync strategies, conflict resolution patterns, and real-world examples from production apps.',
        date: '2026-01-08',
        readTime: '15 min read',
        tags: ['offline', 'architecture', 'react-native'],
    },
    {
        slug: 'fixing-auth-race-conditions',
        title: 'Fixing Auth Race Conditions in Production',
        excerpt: 'Debugging and resolving authentication race conditions that only appear in production. Token refresh timing, session management, and bulletproof auth flows.',
        date: '2025-12-20',
        readTime: '8 min read',
        tags: ['auth', 'performance', 'debugging'],
    },
]

function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

function NoteCard({ note, index, inView }: { note: Note; index: number; inView: boolean }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <Link
                href={`/notes/${note.slug}`}
                className="block p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background motion-safe:hover:-translate-y-1"
            >
                <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {note.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border border-border bg-background/50 text-muted-foreground"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {note.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground line-clamp-2">
                        {note.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(note.date)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {note.readTime}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}

export default function NotesPage() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 -ml-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 mb-12"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        Engineering{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Notes
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Lessons from building production mobile and web applications.
                    </p>
                </motion.div>

                {/* Notes list */}
                <div ref={ref} className="space-y-6">
                    {notes.map((note, index) => (
                        <NoteCard key={note.slug} note={note} index={index} inView={inView} />
                    ))}
                </div>

                {/* Empty state for future */}
                {notes.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 text-muted-foreground"
                    >
                        <p>No notes yet. Check back soon!</p>
                    </motion.div>
                )}
            </div>
        </main>
    )
}
