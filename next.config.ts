import type { NextConfig } from 'next'
// @ts-expect-error – next-contentlayer2 has no TS types yet
import { withContentlayer } from 'next-contentlayer2'
import createNextIntlPlugin from 'next-intl/plugin'
import withPWA from '@ducanh2912/next-pwa'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const pwaConfig = withPWA({
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    disable: process.env.NODE_ENV === 'development',
})

// Base path for deployments under a subpath (e.g. /cglima.github.io when hosted
// from another user's account). Empty string in dev and when at the root domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig: NextConfig = {
    output: 'export',
    basePath,
    assetPrefix: basePath || undefined,
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

export default withNextIntl(withContentlayer(pwaConfig(nextConfig)))
