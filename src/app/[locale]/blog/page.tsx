import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Container from '@mui/material/Container'

import { routing } from '@/i18n/routing'
import { getSortedPosts } from '@/features/blog'
import { BlogList } from '@/features/blog'
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
    const t = await getTranslations({ locale, namespace: 'metadata.blog' })
    return { title: t('title'), description: t('description') }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface BlogPageProps {
    params: Promise<{ locale: string }>
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { locale } = await params
    setRequestLocale(locale)

    const t = await getTranslations({ locale, namespace: 'blog' })
    const posts = getSortedPosts(locale)

    return (
        <Section title={t('title')} subtitle={t('subtitle')}>
            <Container maxWidth="lg" disableGutters>
                <BlogList posts={posts} />
            </Container>
        </Section>
    )
}
