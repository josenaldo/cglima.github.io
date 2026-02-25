import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { ExperienceTimeline, getVisibleExperiences } from '@/features/experiences'
import { routing } from '@/i18n/routing'
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
    const t = await getTranslations({ locale, namespace: 'metadata.experiences' })
    return { title: t('title'), description: t('description') }
}

interface ExperiencesPageProps {
    params: Promise<{ locale: string }>
}

export default async function ExperiencesPage({ params }: ExperiencesPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'experiences' })
    const experiences = getVisibleExperiences(locale)

    return (
        <Section title={t('title')} subtitle={t('subtitle')} maxWidth="md">
            <ExperienceTimeline experiences={experiences} presentLabel={t('present')} />
        </Section>
    )
}
