// Type definitions for site/config.json.
// Editing this file documents all accepted fields and validates the JSON at build time.

export interface SiteConfig {
    /** Site display name, used in title and metadata */
    siteName: string

    /** Canonical URL for the deployed site (e.g. https://yourname.github.io) */
    siteUrl: string

    /** Default SEO description used on pages that don't define their own */
    seoDescription: string

    /** Path to the default Open Graph image (relative to public/) */
    ogImage: string

    /** Site owner information */
    owner: {
        name: string
        title: string
        /** Short bio displayed in the hero / about sections */
        bio: string
        email: string
        /** Path to the owner avatar image (relative to public/) */
        avatar: string
        github: string
        linkedin: string
        twitter: string
    }

    /** Visual theme configuration */
    theme: {
        /** Primary brand color (hex) */
        primaryColor: string
        /** Secondary / accent color (hex) */
        secondaryColor: string
        /** Google Fonts family name (must match fontUrl) */
        fontName: string
        /** Full Google Fonts CSS URL */
        fontUrl: string
    }

    /** Progressive Web App (PWA) manifest settings */
    pwa: {
        /** Browser chrome / address bar color (hex) */
        themeColor: string
        /** Splash screen background color (hex) */
        backgroundColor: string
        /** Path opened when the PWA is launched from the home screen */
        startUrl: string
    }

    /** Supported locales */
    locales: string[]

    /** Default locale (must be one of the locales above) */
    defaultLocale: string

    /** Which sections are visible on the home page */
    sections: {
        hero: boolean
        services: boolean
        projects: boolean
        experiences: boolean
        skills: boolean
        testimonials: boolean
        blog: boolean
        contact: boolean
    }
}
