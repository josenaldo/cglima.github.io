import { allServices, type Service } from 'contentlayer/generated'

export function getServices(locale?: string): Service[] {
    const items = locale
        ? allServices.filter((s) => s.locale === locale)
        : allServices
    return items
        .filter((s) => s.show !== false)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}
