import Container from '@mui/material/Container'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { BlogList, getSortedPosts } from '@/features/blog'
import { routing } from '@/i18n/routing'
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
