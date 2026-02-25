import { allPages, allPosts, allProjects } from 'contentlayer/generated'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SearchDocument {
    url: string
    title: string
    description: string
    content: string
    type: string
    locale: string
}

// ─── Build searchable document list ──────────────────────────────────────────

export function buildSearchDocuments(locale?: string): SearchDocument[] {
    const docs: SearchDocument[] = []

    // Posts
    allPosts
        .filter((p) => !locale || p.locale === locale)
        .forEach((post) => {
            docs.push({
                url: post.url,
                title: post.title,
                description: post.description,
                content: post.body.raw,
                type: 'blog',
                locale: post.locale,
            })
        })

    // Projects
    allProjects
        .filter((p) => !locale || p.locale === locale)
        .forEach((project) => {
            docs.push({
                url: project.url,
                title: project.title,
                description: project.description,
                content: project.body.raw,
                type: 'projects',
                locale: project.locale,
            })
        })

    // Pages
    allPages
        .filter((p) => !locale || p.locale === locale)
        .forEach((page) => {
            docs.push({
                url: page.url,
                title: page.title,
                description: page.description,
                content: page.body.raw,
                type: 'pages',
                locale: page.locale,
            })
        })

    return docs
}

// ─── Metadata-only documents (for result display, no body) ────────────────────

export type SearchDocumentMeta = Omit<SearchDocument, 'content'>

export function buildSearchMeta(locale?: string): Record<string, SearchDocumentMeta> {
    return buildSearchDocuments(locale).reduce<Record<string, SearchDocumentMeta>>((acc, doc) => {
        acc[doc.url] = {
            url: doc.url,
            title: doc.title,
            description: doc.description,
            type: doc.type,
            locale: doc.locale,
        }
        return acc
    }, {})
}
