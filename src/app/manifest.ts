import type { MetadataRoute } from 'next'

import AppConfig from '@/config/AppConfig'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: AppConfig.siteName,
        short_name: AppConfig.owner.name,
        description: AppConfig.seoDescription,
        start_url: AppConfig.pwa.startUrl,
        display: 'standalone',
        background_color: AppConfig.pwa.backgroundColor,
        theme_color: AppConfig.pwa.themeColor,
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        categories: ['portfolio', 'blog', 'technology'],
    }
}
