import { notFound } from 'next/navigation'

import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

import AppConfig from '@/config/AppConfig'
import { BlogPost, getAllPosts, getPostBySlug } from '@/features/blog'
import { routing } from '@/i18n/routing'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        getAllPosts(locale).map((post) => ({
            locale,
            slug: post.slug,
        }))
    )
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
    const { locale, slug } = await params
    const post = getPostBySlug(slug, locale)
    if (!post) return {}

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: post.image ? [{ url: `${AppConfig.siteUrl}${post.image}` }] : [],
        },
    }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface BlogSlugPageProps {
    params: Promise<{ locale: string; slug: string }>
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
    const { locale, slug } = await params
    setRequestLocale(locale)

    const post = getPostBySlug(slug, locale)
    if (!post) notFound()

    return <BlogPost post={post} />
}
