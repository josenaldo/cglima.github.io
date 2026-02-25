import { compareDesc } from 'date-fns'

import { allPublications, type Publication } from 'contentlayer/generated'

export function getAllPublications(locale?: string): Publication[] {
    const items = locale ? allPublications.filter((p) => p.locale === locale) : allPublications
    return items
        .filter((p) => p.show !== false)
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
}
