import type { Metadata, Viewport } from 'next'

import AppConfig from '@/config/AppConfig'

import './globals.css'

export const metadata: Metadata = {
    title: {
        default: AppConfig.siteName,
        template: `%s | ${AppConfig.siteName}`,
    },
    description: 'Personal portfolio and blog.',
    metadataBase: new URL(AppConfig.siteUrl),
    manifest: '/manifest.json',
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
    themeColor: '#8855DF',
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
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
