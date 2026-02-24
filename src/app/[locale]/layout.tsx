import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

import AppLayout from '@/layout/AppLayout'
import ThemeRegistry from '@/layout/ThemeRegistry'
import { routing } from '@/i18n/routing'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

// ─── Component ────────────────────────────────────────────────────────────────

interface LocaleLayoutProps {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
    children,
    params,
}: LocaleLayoutProps) {
    const { locale } = await params

    setRequestLocale(locale)

    const messages = await getMessages()

    return (
        <NextIntlClientProvider messages={messages}>
            <ThemeRegistry>
                <AppLayout>{children}</AppLayout>
            </ThemeRegistry>
        </NextIntlClientProvider>
    )
}
