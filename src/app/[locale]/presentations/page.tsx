import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Grid from '@mui/material/Grid'

import { routing } from '@/i18n/routing'
import { getAllPresentations, PresentationCard } from '@/features/presentations'
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
    const t = await getTranslations({ locale, namespace: 'metadata.presentations' })
    return { title: t('title'), description: t('description') }
}

interface PresentationsPageProps {
    params: Promise<{ locale: string }>
}

export default async function PresentationsPage({ params }: PresentationsPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'presentations' })
    const items = getAllPresentations(locale)

    return (
        <Section title={t('title')} subtitle={t('subtitle')}>
            <Grid container spacing={3}>
                {items.map((p) => (
                    <Grid key={p.slug} size={{ xs: 12, md: 6 }}>
                        <PresentationCard
                            presentation={p}
                            locale={locale}
                            slidesLabel={t('viewSlides')}
                            videoLabel={t('viewVideo')}
                        />
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}
