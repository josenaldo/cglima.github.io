import { compareDesc } from 'date-fns'

import { allCourses, type Course } from 'contentlayer/generated'

export function getAllCourses(locale?: string): Course[] {
    const items = locale
        ? allCourses.filter((c) => c.locale === locale)
        : allCourses
    return items.sort((a, b) =>
        compareDesc(new Date(a.completionDate), new Date(b.completionDate))
    )
}
