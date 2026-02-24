import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Grid from '@mui/material/Grid'

import { routing } from '@/i18n/routing'
import { getAllPublications, PublicationCard } from '@/features/publications'
import Section from '@/ui/Section'

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'metadata.publications' })
    return { title: t('title'), description: t('description') }
}

interface PublicationsPageProps {
    params: Promise<{ locale: string }>
}

export default async function PublicationsPage({ params }: PublicationsPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'publications' })
    const items = getAllPublications(locale)

    const typeLabels = {
        article: t('types.article'),
        book: t('types.book'),
        paper: t('types.paper'),
        tutorial: t('types.tutorial'),
        other: t('types.other'),
    }

    return (
        <Section title={t('title')} subtitle={t('subtitle')}>
            <Grid container spacing={3}>
                {items.map((pub) => (
                    <Grid key={pub.slug} size={{ xs: 12, md: 6 }}>
                        <PublicationCard
                            publication={pub}
                            locale={locale}
                            typeLabels={typeLabels}
                            viewLabel={t('viewPublication')}
                        />
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}
