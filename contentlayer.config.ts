import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

// ─── Constants ────────────────────────────────────────────────────────────────

const LOCALES = ['pt', 'en'] as const
type Locale = (typeof LOCALES)[number]

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Extracts the locale segment from the flattenedPath.
 * Assumes path structure: {type}/{locale}/...
 * e.g. "blog/pt/my-post" → "pt"
 */
function resolveLocale(flattenedPath: string): Locale {
    const locale = flattenedPath.split('/')[1]
    return (LOCALES.includes(locale as Locale) ? locale : 'pt') as Locale
}

/**
 * Extracts the slug without the type and locale prefix.
 * e.g. "blog/pt/my-post" → "my-post"
 *      "blog/pt/2024/my-post" → "2024/my-post"
 */
function resolveLocalizedSlug(flattenedPath: string): string {
    return flattenedPath.split('/').slice(2).join('/')
}

// ─── Blog posts ───────────────────────────────────────────────────────────────
// Structure: content/blog/{locale}/*.md

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `blog/{pt,en}/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true },
        author: { type: 'string', required: true },
        category: { type: 'string', required: true },
        image: { type: 'string', required: true },
        draft: { type: 'boolean', required: false },
        tags: { type: 'list', of: { type: 'string' }, required: false },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
        slug: {
            type: 'string',
            resolve: (doc) => resolveLocalizedSlug(doc._raw.flattenedPath),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/blog/${resolveLocalizedSlug(doc._raw.flattenedPath)}`,
        },
    },
}))

// ─── Static pages (about, resume…) ───────────────────────────────────────────
// Structure: content/pages/{locale}/*.md

export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: `pages/{pt,en}/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        image: { type: 'string', required: true },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
        slug: {
            type: 'string',
            resolve: (doc) => resolveLocalizedSlug(doc._raw.flattenedPath),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/${resolveLocalizedSlug(doc._raw.flattenedPath)}`,
        },
    },
}))

// ─── Portfolio projects ───────────────────────────────────────────────────────
// Structure: content/projects/{locale}/*.md

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/{pt,en}/**/*.md`,
    fields: {
        id: { type: 'number', required: true },
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        projectUrl: { type: 'string', required: false },
        repositoryUrl: { type: 'string', required: false },
        pin: { type: 'boolean', required: true },
        image: { type: 'string', required: true },
        tags: { type: 'list', of: { type: 'string' }, required: false },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
        slug: {
            type: 'string',
            resolve: (doc) => resolveLocalizedSlug(doc._raw.flattenedPath),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/projects/${resolveLocalizedSlug(doc._raw.flattenedPath)}`,
        },
    },
}))

// ─── Work experience ──────────────────────────────────────────────────────────
// Structure: content/experiences/{locale}/*.md

export const Experience = defineDocumentType(() => ({
    name: 'Experience',
    filePathPattern: `experiences/{pt,en}/**/*.md`,
    fields: {
        id: { type: 'number', required: true },
        title: { type: 'string', required: true },
        company: { type: 'string', required: true },
        location: { type: 'string', required: true },
        description: { type: 'string', required: true },
        period: { type: 'string', required: true },
        show: { type: 'boolean', required: true },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
        slug: {
            type: 'string',
            resolve: (doc) => resolveLocalizedSlug(doc._raw.flattenedPath),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/experiences/${resolveLocalizedSlug(doc._raw.flattenedPath)}`,
        },
    },
}))

// ─── Technical skills ─────────────────────────────────────────────────────────
// Structure: content/skills/{locale}/*.md

export const Skill = defineDocumentType(() => ({
    name: 'Skill',
    filePathPattern: `skills/{pt,en}/**/*.md`,
    fields: {
        name: { type: 'string', required: true },
        level: {
            type: 'enum',
            options: ['basic', 'intermediate', 'advanced', 'expert'],
            required: true,
        },
        category: { type: 'string', required: false },
        firstContact: { type: 'number', required: true },
        icon: { type: 'string', required: false },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
        slug: {
            type: 'string',
            resolve: (doc) => resolveLocalizedSlug(doc._raw.flattenedPath),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/skills/${resolveLocalizedSlug(doc._raw.flattenedPath)}`,
        },
    },
}))

// ─── Courses & certifications ─────────────────────────────────────────────────
// Structure: content/courses/{locale}/*.md

export const Course = defineDocumentType(() => ({
    name: 'Course',
    filePathPattern: `courses/{pt,en}/**/*.md`,
    fields: {
        name: { type: 'string', required: true },
        institution: { type: 'string', required: true },
        completionDate: { type: 'date', required: true },
        workload: { type: 'number', required: true },
        courseLink: { type: 'string', required: false },
        certificateLink: { type: 'string', required: false },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
        slug: {
            type: 'string',
            resolve: (doc) => resolveLocalizedSlug(doc._raw.flattenedPath),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/courses/${resolveLocalizedSlug(doc._raw.flattenedPath)}`,
        },
    },
}))

// ─── Testimonials ─────────────────────────────────────────────────────────────
// Structure: content/testimonials/{locale}/*.md

export const Testimonial = defineDocumentType(() => ({
    name: 'Testimonial',
    filePathPattern: `testimonials/{pt,en}/**/*.md`,
    fields: {
        name: { type: 'string', required: true },
        position: { type: 'string', required: true },
        company: { type: 'string', required: false },
        testimonial: { type: 'string', required: true },
        image: { type: 'string', required: true },
        show: { type: 'boolean', required: false },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
    },
}))

// ─── Services ─────────────────────────────────────────────────────────────────
// Structure: content/services/{locale}/*.md

export const Service = defineDocumentType(() => ({
    name: 'Service',
    filePathPattern: `services/{pt,en}/**/*.md`,
    fields: {
        order: { type: 'number', required: true },
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        image: { type: 'string', required: true },
        icon: { type: 'string', required: true },
        show: { type: 'boolean', required: false },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
    },
}))

// ─── Presentations / talks ────────────────────────────────────────────────────
// Structure: content/presentations/{locale}/*.md

export const Presentation = defineDocumentType(() => ({
    name: 'Presentation',
    filePathPattern: `presentations/{pt,en}/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true },
        event: { type: 'string', required: true },
        location: { type: 'string', required: false },
        slidesUrl: { type: 'string', required: false },
        videoUrl: { type: 'string', required: false },
        image: { type: 'string', required: false },
        show: { type: 'boolean', required: false },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
        slug: {
            type: 'string',
            resolve: (doc) => resolveLocalizedSlug(doc._raw.flattenedPath),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/presentations/${resolveLocalizedSlug(doc._raw.flattenedPath)}`,
        },
    },
}))

// ─── Publications ─────────────────────────────────────────────────────────────
// Structure: content/publications/{locale}/*.md

export const Publication = defineDocumentType(() => ({
    name: 'Publication',
    filePathPattern: `publications/{pt,en}/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true },
        publisher: { type: 'string', required: true },
        type: {
            type: 'enum',
            options: ['article', 'book', 'paper', 'tutorial', 'other'],
            required: true,
        },
        url: { type: 'string', required: false },
        image: { type: 'string', required: false },
        show: { type: 'boolean', required: false },
    },
    computedFields: {
        locale: {
            type: 'string',
            resolve: (doc) => resolveLocale(doc._raw.flattenedPath),
        },
        slug: {
            type: 'string',
            resolve: (doc) => resolveLocalizedSlug(doc._raw.flattenedPath),
        },
    },
}))

// ─── Source ───────────────────────────────────────────────────────────────────

export default makeSource({
    contentDirPath: 'site/content',
    documentTypes: [
        Post,
        Page,
        Project,
        Experience,
        Skill,
        Course,
        Testimonial,
        Service,
        Presentation,
        Publication,
    ],
})
