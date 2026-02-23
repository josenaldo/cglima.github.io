// Site-wide configuration.
// Edit this file to customize the site for a new owner.

const AppConfig = {
    siteName: 'Portfolio',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cglima.github.io',
    locale: 'pt-BR',
    defaultLocale: 'pt',
    locales: ['pt', 'en'],

    // Owner info – used in metadata, footer, about page, etc.
    owner: {
        name: 'C. G. Lima',
        title: 'Desenvolvedor de Software',
        email: '',
        github: 'https://github.com/cglima',
        linkedin: '',
        twitter: '',
    },

    // Sections enabled on the home page (set to false to hide)
    sections: {
        hero: true,
        services: true,
        projects: true,
        experiences: true,
        skills: true,
        testimonials: true,
        blog: true,
        contact: true,
    },
} as const

export type AppConfigType = typeof AppConfig
export default AppConfig
