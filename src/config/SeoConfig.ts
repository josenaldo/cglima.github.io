import AppConfig from './AppConfig'

const SeoConfig = {
    defaultTitle: AppConfig.siteName,
    titleTemplate: `%s | ${AppConfig.siteName}`,
    description: 'Personal portfolio and blog.',
    canonical: AppConfig.siteUrl,
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: AppConfig.siteUrl,
        siteName: AppConfig.siteName,
        images: [
            {
                url: `${AppConfig.siteUrl}/images/og-default.png`,
                width: 1200,
                height: 630,
                alt: AppConfig.siteName,
            },
        ],
    },
    twitter: {
        handle: '',
        site: '',
        cardType: 'summary_large_image',
    },
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
    ],
}

export default SeoConfig
