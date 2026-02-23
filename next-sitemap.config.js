/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cglima.github.io',
    outDir: 'out',
    generateRobotsTxt: true,
}
