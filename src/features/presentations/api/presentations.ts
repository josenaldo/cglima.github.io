import { compareDesc } from 'date-fns'

import { allPresentations, type Presentation } from 'contentlayer/generated'

export function getAllPresentations(locale?: string): Presentation[] {
    const items = locale
        ? allPresentations.filter((p) => p.locale === locale)
        : allPresentations
    return items
        .filter((p) => p.show !== false)
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
}
