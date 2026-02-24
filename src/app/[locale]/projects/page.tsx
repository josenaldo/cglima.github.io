import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

import { routing } from '@/i18n/routing'
import { getAllProjects, ProjectList } from '@/features/projects'
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
    const t = await getTranslations({ locale, namespace: 'metadata.projects' })
    return { title: t('title'), description: t('description') }
}

interface ProjectsPageProps {
    params: Promise<{ locale: string }>
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'projects' })
    const projects = getAllProjects(locale)

    return (
        <Section title={t('title')} subtitle={t('subtitle')}>
            <ProjectList projects={projects} />
        </Section>
    )
}
