'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

// Placeholder articles data - will be replaced with MDX
const notesData: Record<string, {
    title: string
    excerpt: string
    date: string
    readTime: string
    tags: string[]
    content: string
}> = {
    'migrating-expo-to-react-native-cli': {
        title: 'Migrating from Expo CLI to React Native CLI (New Architecture)',
        excerpt: 'A practical guide to migrating your Expo managed workflow app to React Native CLI with the new architecture enabled.',
        date: '2026-01-15',
        readTime: '12 min read',
        tags: ['react-native', 'architecture', 'performance'],
        content: `
## Why Migrate?

Expo managed workflow is great for getting started quickly, but as your app grows, you may need:

- Custom native modules
- Better control over native code
- Access to the new React Native architecture (Fabric + TurboModules)

## Prerequisites

Before starting the migration, ensure you have:

1. Xcode 15+ installed
2. Android Studio with NDK configured
3. Node.js 18+
4. A backup of your current project

## Step 1: Eject from Expo

\`\`\`bash
npx expo prebuild
\`\`\`

This generates the \`ios/\` and \`android/\` folders with native code.

## Step 2: Enable New Architecture

### iOS

In \`ios/Podfile\`, add:

\`\`\`ruby
ENV['RCT_NEW_ARCH_ENABLED'] = '1'
\`\`\`

### Android

In \`android/gradle.properties\`:

\`\`\`properties
newArchEnabled=true
\`\`\`

## Step 3: Handle Native Module Migration

Most Expo modules work out of the box, but you may need to update some:

- \`expo-camera\` → Native iOS/Android permissions
- \`expo-notifications\` → Firebase Cloud Messaging setup
- \`expo-file-system\` → Direct RNFS integration

## Common Pitfalls

1. **Build failures**: Clear derived data and rebuild
2. **Metro bundler issues**: Reset cache with \`npx react-native start --reset-cache\`
3. **Native linking**: Run \`pod install\` after any native dependency changes

## Conclusion

Migration requires patience, but the benefits of the new architecture—better performance, improved memory management, and synchronous native calls—are worth the effort.
        `,
    },
    'designing-offline-first-mobile-apps': {
        title: 'Designing Offline-First Mobile Apps at Scale',
        excerpt: 'How to architect mobile applications that work seamlessly offline.',
        date: '2026-01-08',
        readTime: '15 min read',
        tags: ['offline', 'architecture', 'react-native'],
        content: `
## The Offline-First Mindset

Users expect apps to work regardless of network conditions. Here's how to deliver that experience.

## Core Principles

1. **Local-first data**: Write to local storage first, sync later
2. **Optimistic updates**: Show changes immediately
3. **Conflict resolution**: Handle sync conflicts gracefully
4. **Queue management**: Persist pending operations

## Architecture Overview

\`\`\`
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    UI       │ ←→ │   Local DB  │ ←→ │  Sync Layer │ ←→ Server
└─────────────┘    └─────────────┘    └─────────────┘
\`\`\`

## Implementation with WatermelonDB

WatermelonDB provides excellent offline-first capabilities:

\`\`\`typescript
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true, // Enable JSI for better performance
})

const database = new Database({
  adapter,
  modelClasses: [Task, Project, User],
})
\`\`\`

## Sync Strategies

### Last-Write-Wins
Simple but can lose data. Use for non-critical updates.

### Operational Transforms
Complex but preserves all changes. Good for collaborative editing.

### Custom Merge Functions
Best of both worlds—define per-field merge logic.

## Real-World Example: Inbo App

In the Inbo mobile app, we handle 10,000+ records offline with:

- SQLite for structured data
- File system cache for images
- Background sync with exponential backoff
- Conflict UI for manual resolution

## Performance Tips

1. Index frequently queried fields
2. Paginate large datasets
3. Lazy-load relations
4. Use transactions for bulk operations
        `,
    },
    'fixing-auth-race-conditions': {
        title: 'Fixing Auth Race Conditions in Production',
        excerpt: 'Debugging and resolving authentication race conditions that only appear in production.',
        date: '2025-12-20',
        readTime: '8 min read',
        tags: ['auth', 'performance', 'debugging'],
        content: `
## The Bug That Only Happens in Production

Your app works perfectly in development. But in production, users randomly get logged out. Sound familiar?

## Common Causes

1. **Token refresh timing**: Multiple requests try to refresh simultaneously
2. **Race between storage and API**: Token used before it's saved
3. **Stale closures**: Old token values captured in callbacks

## Debugging Strategy

### Step 1: Add Comprehensive Logging

\`\`\`typescript
const refreshToken = async () => {
  console.log('[Auth] Refresh started at:', Date.now())
  console.log('[Auth] Current token expiry:', tokenExpiry)
  // ... refresh logic
  console.log('[Auth] Refresh completed at:', Date.now())
}
\`\`\`

### Step 2: Implement Token Refresh Lock

\`\`\`typescript
let isRefreshing = false
let refreshSubscribers: ((token: string) => void)[] = []

const refreshTokenWithLock = async () => {
  if (isRefreshing) {
    return new Promise<string>((resolve) => {
      refreshSubscribers.push(resolve)
    })
  }

  isRefreshing = true
  try {
    const newToken = await refreshToken()
    refreshSubscribers.forEach((cb) => cb(newToken))
    refreshSubscribers = []
    return newToken
  } finally {
    isRefreshing = false
  }
}
\`\`\`

### Step 3: Use Atomic Storage Operations

\`\`\`typescript
// Bad: Race condition possible
await AsyncStorage.setItem('accessToken', newAccessToken)
await AsyncStorage.setItem('refreshToken', newRefreshToken)

// Good: Atomic multi-set
await AsyncStorage.multiSet([
  ['accessToken', newAccessToken],
  ['refreshToken', newRefreshToken],
])
\`\`\`

## The Fix That Worked

After implementing these patterns in the Inbo app, auth-related crashes dropped by 99.7%.

Key changes:
1. Single refresh queue with promise deduplication
2. Atomic token storage with multiSet
3. Request retry with fresh token on 401
4. Proactive refresh 5 minutes before expiry
        `,
    },
}

function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default function NotePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const note = notesData[slug]

    if (!note) {
        notFound()
    }

    return (
        <main className="min-h-screen pt-32 pb-20">
            <article className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        href="/notes"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 -ml-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Notes
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 mb-12"
                >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
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

                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                        {note.title}
                    </h1>

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
                </motion.header>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-pre:bg-card prose-pre:border prose-pre:border-border prose-code:text-primary prose-code:bg-accent prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: note.content.replace(/\n/g, '<br />').replace(/## /g, '</p><h2>').replace(/<br \/><br \/>/g, '</p><p>') }}
                />
            </article>
        </main>
    )
}
