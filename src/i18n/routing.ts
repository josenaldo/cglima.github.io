import { defineRouting } from 'next-intl/routing'

import rawConfig from '../../site/config.json'

export const routing = defineRouting({
    // Sourced from site/config.json — edit "locales" and "defaultLocale" there
    locales: rawConfig.locales as [string, ...string[]],
    defaultLocale: rawConfig.defaultLocale,
})
