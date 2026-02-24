import { compareDesc } from 'date-fns'

import { allPosts, type Post } from 'contentlayer/generated'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PostNavTarget {
    url: string
    title?: string
}

export interface PostWithNav extends Post {
    previous?: PostNavTarget | null
    next?: PostNavTarget | null
}

// ─── Queries ──────────────────────────────────────────────────────────────────

export function getAllPosts(locale?: string): Post[] {
    if (locale) {
        return allPosts.filter((post) => post.locale === locale)
    }
    return allPosts
}

export function getSortedPosts(locale?: string, limit?: number): Post[] {
    const posts = getAllPosts(locale).sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    )
    return limit ? posts.slice(0, limit) : posts
}

export function getAllPostsPaths(locale?: string): string[] {
    return getAllPosts(locale).map((post) => post.url)
}

export function getPostBySlug(slug: string, locale?: string): PostWithNav | undefined {
    const posts = getSortedPosts(locale)
    const url = `/blog/${slug}`

    const index = posts.findIndex((post) => post.url === url)
    if (index === -1) return undefined

    const post = posts[index] as PostWithNav
    const isFirst = index === posts.length - 1
    const isLast = index === 0

    post.previous = !isFirst
        ? { url: posts[index + 1].url, title: posts[index + 1].title }
        : { url: '/blog' }

    post.next = !isLast
        ? { url: posts[index - 1].url, title: posts[index - 1].title }
        : { url: '/blog' }

    return post
}
