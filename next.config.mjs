import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        // Pin the workspace root to silence multi-lockfile warnings
        root: __dirname,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
            },
            {
                protocol: 'https',
                hostname: 'www.svgrepo.com',
            },
            {
                protocol: 'https',
                hostname: 'static.expo.dev',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: false,
    },
}

export default nextConfig
