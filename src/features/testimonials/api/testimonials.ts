import { allTestimonials, type Testimonial } from 'contentlayer/generated'

export function getTestimonials(locale?: string): Testimonial[] {
    const items = locale
        ? allTestimonials.filter((t) => t.locale === locale)
        : allTestimonials
    return items.filter((t) => t.show !== false)
}
