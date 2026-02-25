import { notFound } from 'next/navigation'

import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

import AppConfig from '@/config/AppConfig'
import { getAllProjects, getProjectBySlug, ProjectDetail } from '@/features/projects'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        getAllProjects(locale).map((p) => ({ locale, slug: p.slug }))
    )
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
    const { locale, slug } = await params
    const project = getProjectBySlug(slug, locale)
    if (!project) return {}
    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: project.image ? [{ url: `${AppConfig.siteUrl}${project.image}` }] : [],
        },
    }
}

interface ProjectSlugPageProps {
    params: Promise<{ locale: string; slug: string }>
}

export default async function ProjectSlugPage({ params }: ProjectSlugPageProps) {
    const { locale, slug } = await params
    setRequestLocale(locale)

    const project = getProjectBySlug(slug, locale)
    if (!project) notFound()

    return <ProjectDetail project={project} />
}
