import type { NextConfig } from 'next'
// @ts-expect-error – next-contentlayer2 has no TS types yet
import { withContentlayer } from 'next-contentlayer2'

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cglima.github.io',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
}

export default withContentlayer(nextConfig)
