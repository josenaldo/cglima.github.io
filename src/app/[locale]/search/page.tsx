import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Container from '@mui/material/Container'

import { routing } from '@/i18n/routing'
import {
    buildSearchDocuments,
    buildSearchMeta,
    SearchResults,
} from '@/features/search'
import SearchInput from '@/features/search/components/SearchInput'
import Section from '@/ui/Section'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'metadata.search' })
    return { title: t('title'), description: t('description') }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface SearchPageProps {
    params: Promise<{ locale: string }>
}

export default async function SearchPage({ params }: SearchPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'search' })

    const documents = buildSearchDocuments(locale)
    const meta = buildSearchMeta(locale)

    return (
        <Section title={t('title')} subtitle={t('subtitle')} maxWidth="md">
            <Container maxWidth="sm" disableGutters sx={{ mb: 4 }}>
                <SearchInput />
            </Container>

            <SearchResults documents={documents} meta={meta} />
        </Section>
    )
}
