import { allExperiences, type Experience } from 'contentlayer/generated'

export function getAllExperiences(locale?: string): Experience[] {
    const items = locale ? allExperiences.filter((e) => e.locale === locale) : allExperiences
    return items.sort((a, b) => b.id - a.id)
}

export function getVisibleExperiences(locale?: string): Experience[] {
    return getAllExperiences(locale).filter((e) => e.show !== false)
}

export function lastExperiences(count: number, locale?: string): Experience[] {
    return getVisibleExperiences(locale).slice(0, count)
}
