import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import type { SkillLevel } from '@/features/skills'
import { getSkillsByLevel, SkillList } from '@/features/skills'
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
    const t = await getTranslations({ locale, namespace: 'metadata.skills' })
    return { title: t('title'), description: t('description') }
}

interface SkillsPageProps {
    params: Promise<{ locale: string }>
}

export default async function SkillsPage({ params }: SkillsPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'skills' })
    const skillsByLevel = getSkillsByLevel(locale)

    const levelLabels: Record<SkillLevel, string> = {
        expert: t('levels.expert'),
        advanced: t('levels.advanced'),
        intermediate: t('levels.intermediate'),
        basic: t('levels.basic'),
    }

    return (
        <Section title={t('title')} subtitle={t('subtitle')} maxWidth="md">
            <SkillList skillsByLevel={skillsByLevel} levelLabels={levelLabels} />
        </Section>
    )
}
