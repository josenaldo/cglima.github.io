import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

import AppConfig from '@/config/AppConfig'
import { routing } from '@/i18n/routing'

import { getSortedPosts } from '@/features/blog'
import { getPinnedProjects } from '@/features/projects'
import { lastExperiences } from '@/features/experiences'
import { getServices } from '@/features/services'
import { getTestimonials } from '@/features/testimonials'

import {
    Hero,
    FeaturedProjects,
    LatestPosts,
    ExperiencesSection,
    ServicesSection,
    TestimonialsSection,
} from '@/features/home'

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
    const t = await getTranslations({ locale, namespace: 'metadata.home' })
    return {
        title: `${AppConfig.owner.name} — ${AppConfig.owner.title}`,
        description: t('description'),
    }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface HomePageProps {
    params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale })
    const sections = AppConfig.sections

    const [pinnedProjects, latestPosts, recentExperiences, services, testimonials] =
        await Promise.resolve([
            sections.projects ? getPinnedProjects(locale, 6) : [],
            sections.blog ? getSortedPosts(locale, 6) : [],
            sections.experiences ? lastExperiences(4, locale) : [],
            sections.services ? getServices(locale) : [],
            sections.testimonials ? getTestimonials(locale) : [],
        ])

    return (
        <>
            {sections.hero && (
                <Hero
                    greeting={t('home.hero.greeting')}
                    resumeLabel={t('home.hero.cta.resume')}
                    contactLabel={t('home.hero.cta.contact')}
                />
            )}

            {sections.services && (
                <ServicesSection
                    services={services}
                    title={t('home.services.title')}
                    subtitle={t('home.services.subtitle')}
                />
            )}

            {sections.projects && (
                <FeaturedProjects
                    projects={pinnedProjects}
                    title={t('home.featuredProjects.title')}
                    subtitle={t('home.featuredProjects.subtitle')}
                    viewAllLabel={t('common.viewAll')}
                />
            )}

            {sections.experiences && (
                <ExperiencesSection
                    experiences={recentExperiences}
                    title={t('home.experiences.title')}
                    subtitle={t('home.experiences.subtitle')}
                    viewAllLabel={t('common.viewAll')}
                    presentLabel={t('experiences.present')}
                />
            )}

            {sections.testimonials && (
                <TestimonialsSection
                    testimonials={testimonials}
                    title={t('home.testimonials.title')}
                    subtitle={t('home.testimonials.subtitle')}
                />
            )}

            {sections.blog && (
                <LatestPosts
                    posts={latestPosts}
                    title={t('home.latestPosts.title')}
                    subtitle={t('home.latestPosts.subtitle')}
                    viewAllLabel={t('common.viewAll')}
                />
            )}
        </>
    )
}
