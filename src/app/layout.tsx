import type { Metadata, Viewport } from 'next'

import AppConfig from '@/config/AppConfig'

import './globals.css'

export const metadata: Metadata = {
    title: {
        default: AppConfig.siteName,
        template: `%s | ${AppConfig.siteName}`,
    },
    description: AppConfig.seoDescription,
    metadataBase: new URL(AppConfig.siteUrl),
    manifest: '/manifest.webmanifest',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        type: 'website',
        siteName: AppConfig.siteName,
        locale: 'pt_BR',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export const viewport: Viewport = {
    themeColor: AppConfig.pwa.themeColor,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang={AppConfig.defaultLocale} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="stylesheet" href={AppConfig.theme.fontUrl} />
            </head>
            <body>{children}</body>
        </html>
    )
}
