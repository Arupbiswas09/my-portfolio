/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: false,
    },
}

export default nextConfig
