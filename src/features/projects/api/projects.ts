import { allProjects, type Project } from 'contentlayer/generated'

// ─── Queries ──────────────────────────────────────────────────────────────────

export function getAllProjects(locale?: string): Project[] {
    if (locale) {
        return allProjects.filter((p) => p.locale === locale)
    }
    return allProjects
}

export function getPinnedProjects(locale?: string, limit?: number): Project[] {
    const pinned = getAllProjects(locale)
        .filter((p) => p.pin)
        .sort((a, b) => a.id - b.id)
    return limit ? pinned.slice(0, limit) : pinned
}

export function getAllProjectsPaths(locale?: string): string[] {
    return getAllProjects(locale).map((p) => p.url)
}

export function getProjectBySlug(slug: string, locale?: string): Project | undefined {
    const url = `/projects/${slug}`
    return getAllProjects(locale).find((p) => p.url === url)
}
